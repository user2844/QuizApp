import styles from './Button.module.css';

export default function Button({text, variant ="" , className="",onClick, type="button"}){
    return(
        <button className={`${styles.button} ${styles[variant]} ${className}`} 
        type={type} onClick={onClick}>
            {text}
        </button>
    )
}