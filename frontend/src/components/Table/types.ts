import type React from 'react';

type NestedKeyOf<ObjectType extends any> = {
  [Key in keyof ObjectType & (string | number)]: ObjectType[Key] extends object
    ? `${Key}` | `${Key}.${NestedKeyOf<ObjectType[Key]>}`
    : `${Key}`;
}[keyof ObjectType & (string | number)];

export type ColumnsProps<T = any> = {
  title: string;
  name: NestedKeyOf<T>;
  align?: 'left' | 'right' | 'center';
  render?: (row: T) => React.ReactNode;
  minWidth?: number;
};

export type TableProps<T = any> = {
  columns: Array<ColumnsProps<T>>;
  rows: Array<T>;
  getKey: (value: T) => string | number;
};
