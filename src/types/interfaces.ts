export interface IBook {
  id: number;
  title: string;
  author: string;
  category: string;
  isbn: number;
  created: number;
  modified: number | null;
  active: boolean;
}

export interface ISelectOption {
  value: string;
  label: string;
  hidden?: boolean;
}
