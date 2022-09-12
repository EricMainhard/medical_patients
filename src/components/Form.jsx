import './form.css';
import { useEffect, useState } from 'react';
import { Error } from './Error';

export const Form = ({patients, setPatients, patient, setPatient}) => {

    const [formData, setFormData] = useState({
        date: '',
        time: '',
        fName: '',
        lName: '',
        email: '',
        age: '',
        gender: '',
        desc: ''
    });

    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.values(formData).includes('')){
            setError(true);
        } else {
            let newPatient = {
                ...formData
            }
            if(!patient.id){
                newPatient.id = Math.random().toString(36).substr(2);
                setPatients([...patients, newPatient]);
            } else {
                newPatient.id = patient.id;

                let updatedPatients = patients.map((pat)=>{
                    return pat.id === patient.id ? newPatient : pat
                })

                setPatients(updatedPatients);
            }

            setFormData({
                date: '',
                time: '',
                fName: '',
                lName: '',
                email: '',
                age: '',
                gender: '',
                desc: ''
            });
            setError(false); 
        }
    }

    useEffect(()=>{
        if(Object.keys(patient).length > 0){
            setFormData({
                date: patient.date,
                time: patient.time,
                fName: patient.fName,
                lName: patient.lName,
                email: patient.email,
                age: patient.age,
                gender: patient.gender,
                desc: patient.desc
            });
        }
    },[patient])
    
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-center text-3xl font-bold">
            Enter patient
        </h2>
        <form className="form shadow-md p-5 rounded-lg " onSubmit={handleSubmit}>

            {error && (
                <Error errorMsg={"Todos los campos son obligatorios"}/>
            )}

            <label htmlFor="date">Entering date:</label>
            <input id="date" name="date" type="date" className="border-3black " value={formData.date}
             onChange={handleChange}/>

            <label htmlFor="date">Entering time:</label>
            <input id="time" name="time" type="time" className="border-3black " value={formData.time}
             onChange={handleChange}/>

            <label htmlFor="fName">First name:</label>
            <input id="fName" name="fName" type="text" value={formData.fName}
             onChange={handleChange}/>

            <label htmlFor="lName">Last name:</label>
            <input id="lName" name="lName" type="text" value={formData.lName}
             onChange={handleChange}/>

            <label htmlFor="email">Email:</label>
            <input id="email" name="email" type="email" value={formData.email}
             onChange={handleChange}/>

            <label htmlFor="age">Age:</label>
            <input id="age" name="age" type="number" value={formData.age}
             onChange={handleChange}/>

            <label htmlFor="gender">Gender:</label>
            <fieldset id="gender" className="flex gap-3">
                <span>
                    <label htmlFor="female">Female</label>
                    <input type="radio" id="female" name="gender" value="female" 
                    onChange={handleChange}/>
                </span>
                <span>
                    <label htmlFor="male">Male</label>
                    <input type="radio" id="male" name="gender" value="male" 
                    onChange={handleChange}/>
                </span>
                <span>
                    <label htmlFor="n/a">N/A</label>
                    <input type="radio" id="n/a" name="gender" value="n/a" 
                    onChange={handleChange}/>
                </span>
            </fieldset>

            <label htmlFor="desc">Describe symptoms:</label>
            <textarea id="desc" name="desc" cols={10} rows={10} value={formData.desc}
             onChange={handleChange}/>

            <button className='form__button w-full bg-indigo-600 w-100 p-4 uppercase mt-5 text-white ' type="submit">
                {patient.id ? 'Edit Patient' : 'Add Patient'}
            </button>
        </form>
    </div>
  )
}
