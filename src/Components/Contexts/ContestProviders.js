import React, { createContext, useState } from "react";

export const regStudent=createContext()
export const logStudent=createContext()

function ContestProviders({children}) {

    const [student,setStudent]=useState()
    const [logStu,setLogstu]=useState()


  return (
    <>
<regStudent.Provider value={{student,setStudent}}>
        <logStudent.Provider value={{logStu,setLogstu}}>
        {children}    
        </logStudent.Provider>
    </regStudent.Provider> 
    </>
  )
}

export default ContestProviders