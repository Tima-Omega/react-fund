const Select = ({ options, defaultValue, onChange }) => (
    <select defaultValue={defaultValue} onChange={(e) => onChange(e.target.value)}>
        {options.map(({ value, name }) => (
            <option value={value} key={value}>
                {name}
            </option>
        ))}
    </select>
);

export default Select;
