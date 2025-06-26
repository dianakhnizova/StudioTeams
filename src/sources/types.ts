import type { MouseEvent } from 'react';

export type PageTitle = Record<string, string>;
export type LinkItems = {
  to: string;
  label: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};
