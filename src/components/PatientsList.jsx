import { useEffect, useState } from "react"
import { PatientsItem } from "./PatientsItem"

export const PatientsList = ({patients, setPatients, setPatient}) => {

  return (
    <div className="mt-10 md:w-1/2 md:mt-0 lg:w-3/5 h-screen overflow-auto">
        <h2 className="text-3xl text-center font-bold">
            Patients List
        </h2>
        <p className="text-indigo-600 mt-5 text-center font-bold text-2xl ">Rearrenge the list by priority</p>
        <div className="patiens-list">
            {patients.map((patient)=>{
              return(
                <PatientsItem key={patient.id} patient={patient} setPatient={setPatient} setPatients={setPatients} patients={patients}/>
              )
            })}
        </div>
    </div>
  )
}
