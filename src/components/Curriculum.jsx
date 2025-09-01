import { General } from "./General"
import { Education } from "./Education"
import { Experience } from "./Experience"
import { useState } from "react";

export const Curriculum =() =>{
    const [submited, setSubmit] = useState(false);

    function handleClick() {
    setSubmit(!submited);
  }
    return(
<div className="curriculum">

<h1>Curriculum</h1>
<General isSubmited={submited}></General>
<Education isSubmited={submited}></Education>
<Experience isSubmited={submited}></Experience>
<button onClick={handleClick} className="submitBtn" type="submit">{submited ? "Edit": "Submit"}</button>
</div>
)
};
