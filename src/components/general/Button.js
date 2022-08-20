import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Button({label, className, onClick, icon, text, id}) {
    return(
        <button
            type={label}
            className={`btn ${className}`}
            onClick={onClick}
            id={id}>
            {icon && (
                <span className="icons-span">
                    <FontAwesomeIcon icon={icon} size={'sm'} className='icon' />
                </span>
            )}
            {text}
        </button>
    )
}

Button.defaultProps = {
    className: '',
    label: '',
};

export default Button;
