import './general.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


function Button({label, className, onClick, icon}) {
    return(
        <button className={`btn ${className}`} onClick={onClick} type={label}>
            {icon && (
                <span className="icons-span">
                    <FontAwesomeIcon icon={icon} size={'sm'} className='icon' />
                    </span>
            )}
            {label}
        </button>
        
    )
}

Button.defaultProps = {
    className: '',
    label: '',
};

export default Button;
