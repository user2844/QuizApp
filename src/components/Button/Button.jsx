import styles from './Button.module.css';

export default function Button({
    text, 
    variant ="" , 
    className="",
    disabled,
    onClick, 
    type="button"}){
    return(
        <button 
        className={`${styles.button} ${styles[variant]} ${className}`} 
        type={type} 
        onClick={onClick}
        disabled={disabled}
        >
            {text}
        </button>

    )
}