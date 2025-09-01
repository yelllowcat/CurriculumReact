import { useState } from "react";
import "../styles/styles.css"
export const Education = ({isSubmited}) => {
    const [school, setSchool] = useState('');
    const [title, setTitle] = useState('');
    const [fisrtDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');
 
 function handleSchool(e) {
    setSchool(e.target.value);
  }
   function handleTitle(e) {
    setTitle(e.target.value);
  }
  
  function handleFirst(e) {
    setFirstDate(e.target.value);
  }
   function handleSecond(e) {
    setSecondDate(e.target.value);
  }
 if (isSubmited) {
    return <div className="formSection">
    <h2>General</h2>
    
  <p>School: {school}</p>
  <p>Title: {title}</p>
  <label >Date</label>
  <p>From {fisrtDate ? fisrtDate : "not especified"}</p>
  <p>To {secondDate ? secondDate :"not especified"}</p>
    <hr />
   </div>
 }   
else return <div>
<h2>Education</h2>
  <p>School Name</p>
  <input type="text" value={school} onChange={handleSchool} placeholder={"Harvard"}/> 
    <p>Academic Title</p>
  <input type="email" value={title} onChange={handleTitle} placeholder={"Computer Science"}/> 
   <p>From</p>
  <input type="date" value={fisrtDate} onChange={handleFirst} /> 
  <p>To</p>
  <input type="date"value={secondDate} onChange={handleSecond}/> 
  <hr />
</div>
}