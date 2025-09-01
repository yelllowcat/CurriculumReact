import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Title } from './components/Title.jsx'
import { General } from './components/General.jsx'
import { Education } from './components/Education.jsx'
import { Experience } from './components/Experience.jsx'
import { Curriculum } from './components/Curriculum.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Curriculum></Curriculum>
  </StrictMode>,
)
