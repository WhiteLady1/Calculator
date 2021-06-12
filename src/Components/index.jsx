import { useCallback, useEffect, useMemo, useState } from 'react';

export const dataHistory = [
  { numberA: 0.8, numberB: 2.5, operator: '+', result: 3.3 },
  { numberA: 96, numberB: 85, operator: '*', result: 8160 },
  { numberA: 5, numberB: 9, operator: '-', result: -4 },
  { numberA: 0, numberB: 6, operator: '-', result: 6 },
  { numberA: 32, numberB: 3, operator: '+', result: 35 },
  { numberA: 8, numberB: 4, operator: '*', result: 32 },
  { numberA: 6, numberB: 6, operator: '*', result: 36 },
  { numberA: 25, numberB: 6, operator: '+', result: 31 },
  {
    numberA: 123456789,
    numberB: 987654321,
    operator: '+',
    result: 11111111110,
  },
  { numberA: 0.816, numberB: 2, operator: '+', result: 2.816 },
];

export const newRecordInHistory = {
  numberA: null,
  numberB: null,
  operator: '',
  result: null,
};
export const usePersistedState = (
  initialState,
  key,
  storage = localStorage, // localStorage nebo sessionStorage
) => {
  // Kontroluje, jestli je funkce volaná správně i s druhý argumentem
  if (typeof key !== 'string') {
    // Pokud ne, zobrazí do konzole error
    throw new Error('Argument "key" must be string');
  }

  // Přichystá interní stav. Pokud je to potřeba, načte poslední hodnotu z localStorage nebo použije dodanou v proměnné initialState
  const [rawState, setRawState] = useState(() =>
    loadJSON(storage, key, initialState),
  );

  // Při prvním renderu komponenty přidá posluchače událostí
  useEffect(() => {
    // Funkce pro zpracování události změny v localStorage
    const onChange = (event) => {
      // Vyjmeme z události klíč pro data a novou hodnotu dat
      const { key: eventKey, newValue } =
        event instanceof CustomEvent ? event.detail : event;
      // Zkontrolujeme, jestli se změnily data, která nás zajímají
      if (eventKey === key) {
        setRawState(missingDataCheck(newValue, initialState));
      }
    };

    // Přidání posluchaču
    window.addEventListener('storage', onChange);
    window.addEventListener('this-tab-storage', onChange);

    // Odebrání posluchačů po odebrání komponenty ze stránky
    return () => {
      window.removeEventListener('storage', onChange);
      window.removeEventListener('this-tab-storage', onChange);
    };
  }, [key, storage]);

  // Do proměnné state vytáhneme data z localStorage. Pomocí hooku useMemo optimalizujeme výkon a data zpracováváme pouze v případě, že jsou jiné než při předchozím renderu
  const state = useMemo(() => {
    // Pomocí try a catch zkusíme převést data z jsonu do původní struktury
    try {
      return JSON.parse(rawState);
    } catch (error) {
      // Pokud se převod nepovede, zapíšeme do konzole, že data jsou ve špatném formátu
      console.error(
        'Corrupted localStorage data. Falling back to initialState',
      );
      console.error(error);
    }
    // Vrátíme počáteční data, pokud selhal převod z jsonu
    return initialState;
  }, [rawState]);

  // Funkce pro změnu stavu, která ukládá do localStorage a doupozorní všechny komponenty, že se stav změnil
  const setState = useCallback(
    (value) => {
      // Stejně jako useState i usePersistedState podporuje ve value funkci pro práci s předchozí hodnotou
      const valueToStore = JSON.stringify(
        value instanceof Function ? value(state) : value,
      );
      // V localStorage můžou být jako hodnoty jen řetězce. Proto převedeme data (value) do jsonu
      saveJSON(storage, key, valueToStore);
      // Uložení do localStorage upozorňuje jen ostatní taby. Vytvoříme vlastní událost, která upozorní i tab, ve kterém zrovna jsme
      window.dispatchEvent(
        new CustomEvent('this-tab-storage', {
          detail: {
            key,
            newValue: valueToStore,
          },
        }),
      );
    },
    [key, state, storage],
  );

  return [state, setState];
};

// Funkce pro čtení z localStorage. Vrací počáteční hodnotu, pokud v localStorage pod daným klíčem ještě nejsou žádná data
const loadJSON = (storage, key, fallbackValue) => {
  const data = storage.getItem(key);
  return missingDataCheck(data, fallbackValue);
};

// Vrací počáteční hodnotu, pokud jsou data prázdná
const missingDataCheck = (data, fallbackValue) => {
  // Data se rovnají null, pokud v localStorage ještě žádná nejsou
  if (data === null) {
    return JSON.stringify(fallbackValue);
  }
  return data;
};

// Ukládá do localStorage
const saveJSON = (storage, key, value) => {
  try {
    storage.setItem(key, value);
  } catch (error) {
    console.error(error);
  }
};
