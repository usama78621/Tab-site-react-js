import React, { FC } from 'react'
import {IoMdFastforward} from 'react-icons/io'
interface props {
    job: { id: number, title: string, dates: string, duties: [], company: string }[]
    value: number
}

const Singletab: FC<props> = ({ job, value }) => {
    const { id, title, dates, duties, company } = job[value]
    return (
        <article key={id}>
            <h1 className='title'>{title}</h1>
            <h4 className='company'>{company}</h4>
            <p className='job-date'>{dates}</p>
            <div >
                {duties.map((dtuy, index) => (
                    <div className='job-desc' key={index}>
                       <IoMdFastforward className='job-icon'>
                       </IoMdFastforward>
                      { <p>{dtuy}</p>}
                    </div>
                ))
                }
            </div>


        </article>
    )
}

export default Singletab