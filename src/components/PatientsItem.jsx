import "./patientsItem.css";

export const PatientsItem = ({patient}) => {
  return (
    <div className="patiens__item m-3 shadow-md px-5 py-10 flex">
        <div className="w-1/5 flex justify-center align-center items-center ">
            <span className="w-full text-center text-2xl ">
                ⬛
            </span>
        </div>
        <div className="patients_data w-4/5 ">
            <p className="patient__label">
                {patient.date} / {patient.time} hs
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
    </div>
  )
}
