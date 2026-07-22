import style from './Header.module.css';
import ProfilePic from "../../assets/images/ProfilePic.jpg";
import { FiSearch, FiBell } from 'react-icons/fi';

export default function Header(){

    return(
        <div className={style.header}>
        <div className={style.lefthead}>
          <h3>Quiz Web</h3>
        </div>

        <div className={style.righthead}>
          <FiSearch size={22} />
          <FiBell size={22} />

          <div className={style.profile}>
            <img src={ProfilePic} />
          </div>
        </div>
      </div>
    )
}