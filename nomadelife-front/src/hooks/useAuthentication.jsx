import {db} from '../firebase/config'
import{
    getAuth,
    createUserEmail,
    createUseEmailAndPassword,
    signInWitheEmailAndPassword,
    updateProfile
    signOut
}
import { useState, useEffect } from 'react'


export const useAuthentication = () =>{
    const[error, setError] =useState(null)
    const[loading, setLoading] = useState(null)
    const[cancelled, setCancelled] = useState(false)
}

    const auth = getAuth()
    
    function checkFisCancelled(){
        if(canceled){
            return
        }
    }