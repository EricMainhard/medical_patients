import "./patientsItem.css";

export const PatientsItem = ({patient, setPatient, patients, setPatients}) => {

    const handleEdit = () => {
        setPatient(patient);
    }

    const handleDelete = () => {
        let updatedPatients = patients.filter(pat => pat.id != patient.id);
        setPatients(updatedPatients);
    }

  return (
    <div className="patiens__item m-3 shadow-md px-5 py-10 flex flex-col">
        <div className="patients_data ">
            <p className="patient__label">
                Enter at:
                <span className="patient__input">
                    {patient.date} / {patient.time} hs
                </span>
            </p>
            
            <p className="patient__label">
                First name:
                <span className="patient__input">
                    {patient.fName}
                </span>
            </p>
            <p className="patient__label">
                Last name:
                <span className="patient__input">
                    {patient.lName}
                </span>
            </p>
            <p className="patient__label">
                Email:
                <span className="patient__input">
                    {patient.email}
                </span>
            </p>
            <p className="patient__label">
                Age:
                <span className="patient__input">
                    {patient.age}
                </span>
            </p>
            <p className="patient__label">
                Gender:
                <span className="patient__input">
                    {patient.gender}
                </span>
            </p>
            <p className="patient__label">
                Symptoms:
                <span className="patient__input">
                    {patient.desc}
                </span>
            </p>
        </div>
        <div className="flex justify-between mt-10">
            <button type="button" className="py-5 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg text-2xl"
            onClick={handleEdit}>
                Editar
            </button>
            <button type="button" className="py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg text-2xl"
            onClick={handleDelete}>
                Eliminar
            </button>
        </div>
    </div>
  )
}
