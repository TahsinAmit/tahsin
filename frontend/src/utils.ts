import { useMemo } from 'react';
import { useAppState } from './state/state';

export function randomNumber(minimum: number, maximum: number) {
  return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
}

export function generateRandomArray(min: number, max: number) {
  const randomArray: number[] = [];
  while (randomArray.length - 1 < max - min) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    if (!randomArray.includes(randomNumber)) {
      randomArray.push(randomNumber);
    }
  }
  return randomArray;
}

export function useRandomPageRange() {
  const instructionPageNumber = useAppState((s) => s.instructionPageNumber);
  let startPage = 1;
  let endPage = 31;

  if (instructionPageNumber === 2) {
    startPage = 32;
    endPage = 62;
  } else if (instructionPageNumber === 3) {
    startPage = 63;
    endPage = 93;
  }
  return useMemo(() => generateRandomArray(startPage, endPage), []);
}
