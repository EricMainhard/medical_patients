import {Header} from "./components/Header"
import {Form} from "./components/Form"
import {PatientsList} from "./components/PatientsList"
import { useEffect, useState } from "react"

function App() {

  const [patients, setPatients] = useState([]);
  const [patient, setPatient] = useState({});

  useEffect(()=>{
    let patientsInStorage = JSON.parse(localStorage.getItem('patients') ?? []);
    setPatients(patientsInStorage);
  },[])

  useEffect(()=>{
    let patientsToJson = JSON.stringify(patients);
    localStorage.setItem('patients', patientsToJson);
  },[patients])

  return (
    <div className="App container mx-auto mt-10">
      <Header/>
      <div className="container md:flex justify-center mt-10">
        <Form patients={patients} setPatients={setPatients} patient={patient} setPatient={setPatient}/>
        <PatientsList patients={patients} setPatients={setPatients} setPatient={setPatient}/>
      </div>
    </div>
  )
}

export default App
