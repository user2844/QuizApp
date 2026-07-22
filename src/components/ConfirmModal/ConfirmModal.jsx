import styles from './ConfirmModal.module.css';
import Button from '../Button/Button';

export default function ConfirmModal({
    isOpen,
    title,
    message,
    onConfirm,
    onCancel
}){
    if(!isOpen) return null;

    return(
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2>{title}</h2>
                <p>{message}</p>

                <div className={styles.buttons}>
                    <Button text="No" variant="wrongBtn" onClick={onCancel}/>
                    <Button text="Yes" variant='correctBtn' onClick={onConfirm}/>
                </div>
            </div>

        </div>
    )
}