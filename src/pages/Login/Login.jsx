import styles from './Login.module.css';
import Button from '../../components/Button/Button.jsx'
import {Link} from 'react-router-dom';
import {useState} from 'react'

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setpassword] = useState("");
    const [error, setError] = useState("")
    

    function handleSubmit(e){
        e.preventDefault();

        if(username.trim() === "" || password.trim() === ""){
            setError('fill in all the fields')
            return;
        }
        setError("");
        if(username.trim() === "admin" && password.trim() === "admin"){
             console.log("submitted")
        }else{
            console.log("username or password didn't match")
        }
       
    }

    return(
        <div className={styles.containerDiv}>
            <div className={styles.logincard}>
                <h1>Welcome Back</h1>
                <p>Login to continue</p>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input type='text' placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                    <input type='password' placeholder='Password' onChange={(e) => setpassword(e.target.value)}/>

                    {error && <p className={styles.error}> {error} </p>}

                     <div className={styles.forgotPw}>
                        <Link to="/forgot-password">Forgot Password?</Link>
                     </div>

                    <Button type='submit' text="Log In" variant="toggle-btn" className={styles.subBtn}/>

                    <hr></hr>
                    <div className={styles.noAccount}>  
                        <p>Don't have an account? </p> <Link className={styles.signup} to="/Sign-Up"> Sign Up</Link>
                    </div>

                </form>

            </div>
        </div>
    );
}