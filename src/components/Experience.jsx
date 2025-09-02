import { useState } from "react"
export const Experience = ({isSubmited}) =>{
    const [company, setCompany] = useState('');
    const [position, setposition] = useState('');
    const [responsabilities, setResponsabilities] = useState({});
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
    const index=e.target.id;
    
    responsabilities[index] =e.target.value;

        setResponsabilities(responsabilities)

  }
  function handleFirst(e) {
    setFirstDate(e.target.value);
  }
   function handleSecond(e) {
    setSecondDate(e.target.value);
  }
  function addInput(){
    if (nresp<5) {
          setNresp(nresp+1)

    }
  }
  
  const respList =[];
    for (let i = 0; i < nresp; i++) {

respList.push(<input type="text" key={[i]} id={i}  onChange={handleResponsabilities}  placeholder={"Resonsabilities"}/> )

}
  
 if (isSubmited) {

    return <div className="formSection">
    <h2>General</h2>

  <p><span>Company: </span>{company}</p>
  <p><span>Position: </span>{position}</p>
  <p>Resonsabilities:</p>
  <ul>
    {Object.values(responsabilities).map((e,index)=>{
return <li key={index}>{e}</li>
    })}
    
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