import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';


function Input({label, type, className, value, setValue, icon, inputAttributes}) {
    const hendleInput = (onChange) => {
        setValue(onChange.target.value);
    }

    const showPassword = (event) => {
        const x = document.getElementById(inputAttributes.for);
        const icon = document.getElementById('icon-pwd');
        if (x.type === "password") {
          x.type = "text";
          icon.icon = faEyeSlash
        } else {
           x.type = "password";
           icon.icon = faEye
        }
    }

    return(
        <div className={`Input-container ${className}`}>
            <label htmlFor={inputAttributes.for}>
                {icon && (
                    <FontAwesomeIcon icon={icon} size={inputAttributes.size} className={`icon ${inputAttributes.color}`} />
                )}
                {`${label}:`}
            </label>
            {type === 'password' ? (
                // implement show password
                <Fragment>
                    <input type={type} onChange={hendleInput} id={inputAttributes.for} value={value} />
                    <FontAwesomeIcon id={'icon-pwd'} icon={faEye} size={'sm'} className={`icon-password`} onClick={showPassword}/>
                </Fragment>
            ) : (
                <input type={type} onChange={hendleInput} id={inputAttributes.for} value={value} />
            ) }
        </div>
    )
}

Input.defaultProps = {
    inputAttributes: {
      color: '',
      size: 'xs',
      for: '',
    },
};

export default Input;
