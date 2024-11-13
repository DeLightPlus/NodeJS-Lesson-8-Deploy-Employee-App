import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css'

import Dashboard from './components/Dashboard/Dashboard';


function App() 
{    
  const base_url ="https://nodejs-lesson-8-server.onrender.com"; // http://localhost:8000
  const [employees, setEmployees] = useState([]);
  const get_users = async () => 
    {
      try 
      {
          const response = await axios.get(`${base_url}/api/employees`);
          const data = response.data;
          console.log(data);          
          setEmployees(data);
      } 
      catch (error) 
      {
          console.error("Error fetching employees:", error);
      }
  };

  useEffect(() => {
        get_users();
    }, []);

  return (
    <div className='EmployeeApp'>  
      {console.log(employees)}    
      <Dashboard employees={employees} />       
    </div>
    

  )
}

export default App
