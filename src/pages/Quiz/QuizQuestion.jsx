
import styles from './QuizQuestion.module.css';
import Button from '../../components/Button/Button.jsx'

export default function QuizQuestion (){
    return(
        <div className={styles.quizContainer}>
            <div className={styles.questionDiv}>
                    <h1>what is your name? loresdadsadsga</h1>

            </div>
            <div className={styles.answers}>
                <Button text="A: Ram" variant="mcq-btn"/>
                <Button text ="B: Sam"  variant="mcq-btn"/>
                <Button text ="C: Hari" variant="mcq-btn"/>
                <Button text= "D: Mahesh" variant="mcq-btn"/>

            </div>
            <div className={styles.nextBtn}>
                <button>
                Next
                </button>
            </div>
            
        </div>
    )
}