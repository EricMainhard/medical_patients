import './form.css';
import { useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

export const Form = ({patients, setPatients}) => {

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
            console.log(formData);
            setError(false);  
        }
    }
    
  return (
    <div className="md:w-1/2 lg:w-2/5">
        <h2 className="text-center text-3xl font-bold">
            Enter patient
        </h2>
        <form className="form shadow-md p-5 rounded-lg " onSubmit={handleSubmit}>

            {error && (
                <div className="bg-red-800 text-white text-center p-3 uppercase rounded-md">
                    <p className='text-2xl '>
                        Todos los campos son obligatorios
                    </p>
                </div>
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

            <button className='form__button w-full bg-indigo-600 w-100 p-4 uppercase mt-5 text-white ' type="submit">SUBMIT</button>
        </form>
    </div>
  )
}
