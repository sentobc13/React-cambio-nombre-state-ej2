
import { useState } from 'react';
import './App.css'

function App() {
  const [teacherName, setTeacherName] = useState('Sofia');


  return <div>
    <ul>
      <li onClick={()=>setTeacherName('Data')}>Data</li>
      <li onClick={()=>setTeacherName('Reyes')}>Reyes</li>
      <li onClick={()=>setTeacherName('Yolanda')}>Yolanda</li>
      </ul>

    <h2>Teacher Name: {teacherName}</h2>
  </div>
}

export default App
