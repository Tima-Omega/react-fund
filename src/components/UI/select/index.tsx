import { FC } from 'react';

interface SelectProps {
    options: {
        value: string;
        name: string;
    }[];
    defaultValue: string;
    value: string;
    onChange: (value: string) => void;
}

const Select: FC<SelectProps> = ({ options, defaultValue, value, onChange }) => {
    return (
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
};

export default Select;
