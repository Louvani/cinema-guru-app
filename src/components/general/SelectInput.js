import './general.css';


function SelectInput({label, options, className, value, setValue}) {
    const hendleInput = (onChange) => {
        setValue(onChange.target.value);
    }

    return(
        <div className={`Select-container ${className}`}>
            <label>{label}</label>
            <select onChange={hendleInput} value={value} >
                {options.map((option) => (
                    <option key={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default SelectInput;
