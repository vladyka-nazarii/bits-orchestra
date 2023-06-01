import { ISelectOption } from '../types/interfaces';

export const FILTER_OPTIONS: ISelectOption[] = [
  { value: 'null', label: 'Show All' },
  { value: 'true', label: 'Show Active' },
  { value: 'false', label: 'Show Deactivated' },
];

export const CATEGORY_OPTIONS: ISelectOption[] = [
  { value: '', label: '--Choose Category--', hidden: true },
  { value: 'Fantasy', label: 'Fantasy' },
  { value: 'Novel', label: 'Novel' },
  { value: 'Detective', label: 'Detective' },
  { value: 'Tale', label: 'Tale' },
];
