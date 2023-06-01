import { memo } from 'react';
import { ISelectOption } from '../../types/interfaces';

interface ICustomSelectProps {
  options: ISelectOption[];
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  required?: boolean;
}

export const CustomSelect = memo(
  ({ options, onChange, value, required = false }: ICustomSelectProps) => (
    <select defaultValue={value} name='select' required={required} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value} hidden={option.hidden}>
          {option.label}
        </option>
      ))}
    </select>
  )
);
