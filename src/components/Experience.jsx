import { useState } from "react"
export const Experience = ({isSubmited}) =>{
    const [company, setCompany] = useState('');
    const [position, setposition] = useState('');
    const [resonsabilities, setResponsabilities] = useState([]);
    const [nresp, setNresp] = useState(1);

    const [fisrtDate, setFirstDate] = useState('');
    const [secondDate, setSecondDate] = useState('');

 function handleCompany(e) {
    setCompany(e.target.value);
  }
   function handlePosition(e) {
    setposition(e.target.value);
  }
   function handleResponsabilities(e) {
    setResponsabilities(e.target.value);
  }
  function handleFirst(e) {
    setFirstDate(e.target.value);
  }
   function handleSecond(e) {
    setSecondDate(e.target.value);
  }
  function addInput(){
    setNresp(nresp+1)
  }
  
  const respList =[];
    for (let i = 0; i < nresp; i++) {
respList.push(<input type="text"   placeholder={"Resonsabilities"}/> ) }
  
 if (isSubmited) {
    return <div className="formSection">
    <h2>General</h2>

  <p><span>Company: </span>{company}</p>
  <p><span>Position: </span>{position}</p>
  <p>Resonsabilities:</p>
  <ul>
    {resonsabilities.map((resp) =>{
      return <li key={resp}>{resp}</li>
    }
    )}
  </ul>
  <label >Date</label>
  <p>From {fisrtDate ? fisrtDate : "not especified"}</p>
  <p>To {secondDate ? secondDate :"not especified"}</p>
    <hr />  
    </div>
  }else
  return <>
<h2>Experience</h2>
<p>Company</p>
<input type="text" value={company} onChange={handleCompany} placeholder={"Company"}/> 
<p>Position</p>
<input type="text" value={position} onChange={handlePosition} placeholder={"Position"}/> 
<p>Resonsabilities</p>
<ul>
 {respList}
</ul>
<button onClick={addInput}>Add</button>  
   <p>From</p>
  <input type="date" onChange={handleFirst} value={fisrtDate} /> 
  <p>To</p>
  <input type="date" onChange={handleSecond} value={secondDate}/> 
  <hr />
    </>
}