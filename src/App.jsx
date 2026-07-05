import {useState} from 'react';
import QueueForm from './components/QueueForm';
import QueueDisplay from './components/QueueDisplay';

export default function App() {
  const [queue,setQueue] = useState([])
const addToQueue = (customer) =>{
  setQueue([...queue, {...customer,id:Date.now(), status:'waiting'}]);
}
const updateStatus = (id,newStatus) =>{
  setQueue(queue.map((customer => customer.id === id ? {...customer, status:newStatus}: customer)))
}

const removeCustomer = (id) =>{
  setQueue(queue.filter((customer) => customer.id !== id));
}
  
  return (
    <div>
      <header>
       <h2>Welcome to my Queue managament application.</h2>
       <p>Manage your customer efficiently.</p>
      </header>
    <main>
      <QueueForm onAdd ={addToQueue}/>
      <QueueDisplay queue ={queue}
      updateStatus = {updateStatus}
      removeCustomer = {removeCustomer}/> 
    </main>     
    </div>
  );
}