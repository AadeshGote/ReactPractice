import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Toast=()=>{
    return(
        <div>
            <ToastContainer/>
            <h1>Toast</h1>
            <button onClick={()=>{toast.success('COMPLETED',{position:toast.POSITION.TOP_RIGHT})}}>SUCCESS</button><br/>
            <button onClick={()=>{toast.error('ERROR',{position:toast.POSITION.TOP_RIGHT})}}>ERROR</button><br/>
            <button onClick={()=>{toast.warning('WARNING',{position:toast.POSITION.TOP_RIGHT})}}>WARNING</button><br/>
            <button onClick={()=>{toast.info('INFO',{position:toast.POSITION.TOP_RIGHT})}}>INFO</button>
        </div>
    )
}
export default Toast