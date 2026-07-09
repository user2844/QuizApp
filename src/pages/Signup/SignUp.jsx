
import styles from  './SignUp.module.css';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import {useState} from 'react';

export default function SignUp(){

  const[username, setusername] = useState("");
  const[password, setpassword] = useState("");
  const[matchpassword, setmatchpassword] = useState("");
  const[error, seterror] = useState("");

  function createAccount(e){
    e.preventDefault();
    if(username.trim()=== "" || password.trim() === "" || matchpassword.trim() === ""){
      seterror("fill in all fields");
      return;
    }
    seterror("")
    if(password.trim() !== matchpassword.trim()) {
      seterror("password did not match!")
      return;
    }
    seterror("")
    console.log('createaccount fn works') 
  }

    return(
    <div className={styles.mainContainer}>
      <div className={styles.singupCard}>
        <div className={styles.heading}>
          <h1>Create account</h1>
        </div>

      <form onSubmit={createAccount} className={styles.form}>
        <input type='text' placeholder='Username' onChange={(e) => setusername(e.target.value)}/>
        <input type='password' placeholder='Password'onChange={(e) => setpassword(e.target.value)}/>
        <input type='password' placeholder='Confirm Password' onChange={(e) => setmatchpassword(e.target.value)}/>

        {error && <p className={styles.errorMsg}>{error}</p>}

        <Button type='submit' text="Create Account" variant= "toggle-btn" className={styles.createButton}/>

        <hr></hr>

       <div className={styles.haveAccount}>
          <p>Already have an account? </p> 
          <Link to="/" className={styles.login}>Log In</Link>
       </div>
      </form>

        </div>  
    </div>

    )
}
    