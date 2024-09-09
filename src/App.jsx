import { useState } from 'react'
import ClockForm from './components/clockForm/ClockForm';
import ClockList from './components/clockList/ClockList';
import './App.css'

const App = () => {
  const [clocks, setClocks] = useState([]); // state to store clocks

  return (
    <div className='app'>
      <h1>Time Zone Management</h1>
      {/* Form to add/edit clocks */}
      <ClockForm setClocks={setClocks} clocks={clocks}/>

      {/* List of Clocks */}
      <ClockList setClocks={setClocks} clocks={clocks}/>
    </div>
  )
}

export default App;
