import React, { useEffect, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Singletab from './components/Singletab';
const url = 'https://course-api.com/react-tabs-project';


function App() {
  const [loading, setLoading] = useState(true)
  const [job, setJob] = useState([])
  const [value, setValue] = useState(0)

  const fecthData = async () => {
    try {
      const reponse = await fetch(url)
      const newJob = await reponse.json()
     setJob(newJob)

    } catch (error) {
      alert('fsfhush')
    }
    setLoading(false)

  }
  useEffect(() => {
    fecthData()
  }, [])
  if (loading) {
    return <section>
      <h1>Loading...</h1>
    </section>
  }
  return (
    <main>
      <section className='jobs-center'>
      <Button job={job} setValue={setValue}  value={value} />
      <Singletab job={job} value={value}/>
      </section>
    </main>
  );
}

export default App;
