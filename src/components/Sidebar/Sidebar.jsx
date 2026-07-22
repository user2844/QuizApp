import { Link } from "react-router-dom";
import style from './Sidebar.module.css';
import {
  FiSearch,
  FiBell,
  FiHome,
  FiFileText,
  FiClock,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";

export default function Sidebar({onLogoutClick}){


    return(
                <div className={style.sidebar}>
                  <Link to="/dashboard" className={style.sidebarItem}>
                    <FiHome size={20} /> <span>Home</span>
                  </Link>
        
                  <Link to="/quiz" className={style.sidebarItem}>
                    <FiFileText size={20} /> <span>Take Quiz</span>
                  </Link>
        
                  <Link to="/history" className={style.sidebarItem}>
                    <FiClock size={20} /> <span>History</span>
                  </Link>
        
                  <Link to="/setting" className={style.sidebarItem}>
                    <FiSettings size={20} /> <span>Setting</span>
                  </Link>
        
                 <div className={style.sidebarItem} onClick={onLogoutClick}>
                  <FiLogOut size={20} /> 
                    <span>Logout</span>
                 </div>

                 
                    
               
        
          
                </div>     
    );
}
