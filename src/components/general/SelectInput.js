import './general.css';


function SelectInput({label, options, className, value, setValue}) {
    const handleInput = (onChange) => {
        setValue(onChange.target.value);
    }

    return(
        <div className={`select-container ${className}`}>
            <label>{label}</label>
            <select onChange={handleInput} value={value} >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;
