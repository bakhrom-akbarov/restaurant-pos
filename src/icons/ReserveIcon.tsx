import React from 'react';

import { DEFAULT_COLOR, DEFAULT_SIZE } from './constants';
import { IconSizeColor } from './types';

export const MealIcon: React.FC<IconSizeColor> = ({
  size = DEFAULT_SIZE,
  color = DEFAULT_COLOR,
}) => {
  return (
    <svg width={size} height={size} viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M54 8.93334C51.6 12.1333 48.4 16.9333 46.9333 19.6C43.7333 25.0667 41.8667 25.7333 39.3333 22.6667C37.2 20.1333 33.4667 20.1333 31.3333 22.5333C30.2667 24 28.1333 24.2667 23.6 23.7333C17.4667 23.0667 17.0667 23.2 11.6 29.2C8.53334 32.5333 5.33334 35.3333 4.66667 35.3333C2.93334 35.3333 2.93334 43.6 4.8 48.2667C6.66667 53.3333 12.2667 59.0667 18.2667 62.1333C25.2 65.7333 42.8 65.7333 49.7333 62.1333C58.9333 57.3333 64.6667 49.2 64.6667 40.5333C64.6667 37.7333 63.0667 35.0667 58.6667 30.6667L52.6667 24.8L58.9333 16.6667C64 10.1333 64.9333 8.13334 63.7333 6.26667C61.2 2.13334 58.2667 2.93334 54 8.93334ZM61.2 7.2C62 8.40001 45.8667 30.2667 44.9333 29.3333C44.1333 28.5333 58.4 6.00001 59.6 6.00001C60.1333 6.00001 60.8 6.53334 61.2 7.2ZM39.3333 25.8667C40 27.3333 40.2667 29.4667 39.8667 30.5333C38.5333 34 45.7333 33.2 48.6667 29.7333L51.0667 26.6667L54.5333 30.4C56.4 32.4 58 34.4 58 34.6667C58 34.9333 47.2 35.2 34 35.2C18 35.2 10 34.8 10 33.8667C10 33.0667 11.2 32.1333 12.5333 31.7333C14 31.3333 15.4667 29.8667 15.7333 28.4C16.4 25.8667 17.2 25.7333 23.7333 26.5333C29.6 27.3333 31.2 27.0667 31.7333 25.4667C32.9333 22.5333 37.6 22.8 39.3333 25.8667ZM62 41.3333C62 48.1333 54.5333 57.7333 46.9333 60.5333C42.1333 62.4 25.8667 62.4 21.0667 60.5333C13.4667 57.7333 6 48.1333 6 41.3333V38H34H62V41.3333Z"
        fill={color} />
      <path
        d="M34 27.3333C34 28 34.6667 28.6667 35.3333 28.6667C36.1333 28.6667 36.6667 28 36.6667 27.3333C36.6667 26.5333 36.1333 26 35.3333 26C34.6667 26 34 26.5333 34 27.3333Z"
        fill={color} />
      <path
        d="M19.3333 30C19.3333 30.6667 20 31.3333 20.6666 31.3333C21.4666 31.3333 22 30.6667 22 30C22 29.2 21.4666 28.6667 20.6666 28.6667C20 28.6667 19.3333 29.2 19.3333 30Z"
        fill={color} />
      <path
        d="M23.3333 32.6667C23.3333 33.3333 24 34 24.6666 34C25.4666 34 26 33.3333 26 32.6667C26 31.8667 25.4666 31.3333 24.6666 31.3333C24 31.3333 23.3333 31.8667 23.3333 32.6667Z"
        fill={color} />
    </svg>

  );
};
