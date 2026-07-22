import style from './User.module.css';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header/Header.jsx';
import Sidebar from '../../components/Sidebar/Sidebar.jsx'
import { useState,useEffect } from 'react';
import ConfirmModal from '../../components/ConfirmModal/ConfirmModal.jsx';
import { useNavigate } from 'react-router-dom';


export default function UserLayout(){

    const [showLogoutModal, setShowLogoutModal] =useState(false);
    const navigate = useNavigate();
    return(
         <div className={style.mainWrapper}> 
                <Header/>
             <div className={style.bodyDiv}>
                <Sidebar onLogoutClick={() => setShowLogoutModal(true)}/>
                <Outlet/>
             </div>

             <ConfirmModal
                  isOpen={showLogoutModal}
                  title="Logout"
                  message="Do u want to Logout?"
                  onCancel={()=> setShowLogoutModal(false)}
                  onConfirm={ () =>{
                    navigate('/')
                  }}
                 />
        </div>
    );
}
