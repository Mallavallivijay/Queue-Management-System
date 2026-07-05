
import {useState} from 'react';
import {FaUserPlus}from "react-icons/fa";
export default function QueueForm({ onAdd }) {
    const[name,setName] =useState('')
    const[service,setService] = useState('')
    const handleSubmit =(e) =>{
        e.preventDefault();
        //validation initial phase
        if(!name.trim() || !service.trim()) return;
        onAdd({name,service})
        setName('');
        setService('');
    }

  return (
    <>
      <form  className='queue-form' onSubmit={handleSubmit}>
        <div>
            <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) =>setName(e.target.value)}></input>
        </div>
        <div>
            <select
             value={service}
              onChange={(e) => setService(e.target.value)}>
                <option value="">Select service</option>
                <option value="consultation">consultation</option>
                <option value="payment">payment</option>
                <option value="support">support</option>
            </select>
        </div>
        <div>
            <button type="submit">
                <FaUserPlus/>Add to Queue
            </button>
        </div>
      </form>
    </>
  );
}
