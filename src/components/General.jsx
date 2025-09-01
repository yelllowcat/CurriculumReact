import { Curriculum } from "./Curriculum";
import { useState } from "react";
 export const General = ({isSubmited}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

 function handleName(e) {
    setName(e.target.value);
  }
   function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePhone(e) {
    setPhone(e.target.value);
  }
  if (isSubmited) {
    return <div className="formSection">
    <h2>General</h2>
  <p><span>Name: </span>{name}</p>
  <p><span>Email: </span>{email}</p>
  <p><span>Phone: </span>{phone}</p>
    <hr />  
    </div>
  }else return <>
  <h2>General</h2>
  <p>Name</p>
  <input type="text" placeholder={"David Gonzalez Vargas"}value={name} onChange={handleName}/> 
  <p>Email</p>
  <input type="email" value={email} onChange={handleEmail} placeholder={"fakeemail@gmail.com"}/> 
  <p>Phone</p>
  <input type="number" value={phone} onChange={handlePhone} placeholder={"6121113337"}/> 
    <hr />
  </>

 }