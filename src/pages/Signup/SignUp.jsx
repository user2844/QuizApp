
import styles from  './SignUp.module.css';
import Button from '../../components/Button/Button';
import {Link} from 'react-router-dom';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export default function SignUp(){

  const[username, setusername] = useState("");
  const[password, setpassword] = useState("");
  const[matchpassword, setmatchpassword] = useState("");
  const[error, seterror] = useState("");
  const navigate = useNavigate();

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
   
     
    //users array
    const users = JSON.parse(localStorage.getItem("users")) || [];


   const exisitingUser = users.some(user => user.username === username)

   if(exisitingUser){
    seterror("username already exists");
    return;
   }

   users.push({
    username,
    password
   });

      localStorage.setItem('users', JSON.stringify(users));
    
      alert('your account has been created');
      navigate('/');

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

        <Button type='submit' text="Create Account" variant= "toggleBtn" className={styles.createButton}/>

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
   