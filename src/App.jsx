import AppRoutes  from './routes/AppRoutes';
import './App.css';
import {Toaster} from 'sonner';

function App(){
  return(
    <>
    <Toaster position ="top-center" richColors closeButton/>
    <AppRoutes/>
    </>
  )
}

export default App;