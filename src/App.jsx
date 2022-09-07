import {Header} from "./components/Header"
import {Form} from "./components/Form"
import {PatientsList} from "./components/PatientsList"
import { useState } from "react"

function App() {

  const [patients, setPatients] = useState([]);

  return (
    <div className="App container mx-auto mt-10">
      <Header/>
      <div className="container md:flex justify-center mt-10">
        <Form patients={patients} setPatients={setPatients}/>
        <PatientsList patients={patients} setPatients={setPatients}/>
      </div>
    </div>
  )
}

export default App
