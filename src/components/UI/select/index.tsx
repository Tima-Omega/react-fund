import type { FC } from 'react';

interface SelectOption {
    value: string;
    name: string;
}

interface SelectProps {
    options: SelectOption[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ options, defaultValue, value, onChange }) => (
    <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="" disabled>
            {defaultValue}
        </option>
        {options.map((option) => (
            <option key={option.value} value={option.value}>
                {option.name}
            </option>
        ))}
    </select>
);

export default Select;
