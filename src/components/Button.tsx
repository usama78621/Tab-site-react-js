import React, { FC } from 'react'
interface prop{
    job:{id:string,company:string}[]
    setValue: React.Dispatch<React.SetStateAction<number>>
    value:number
}

const Button:FC<prop> = ({job,setValue,value}) => {
    
  return (
    <div className='btn-container'>
       { job.map((item,index)=>{
               return(
                 <button key={item.id}
                 onClick={()=>setValue(index)}
                 className={`job-btn ${index === value && 'active-btn'}`}
                 >{item.company}
                 </button>
               )
           })
       }
    </div>
  )
}

export default Button