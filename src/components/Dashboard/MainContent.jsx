// Main Content Section (Search Bar and Cards)

import { useState } from "react";
import Header from "../Header";
import AddEmployee from "../Employees/AddEmployee";
import EmployeeList from "../Employees/EmployeeList";

import "./dashboard.css";


const mainClass = 'main-content';

const MainContent = ({employees}) => 
{
    const [openAddModal, setOpenAddModal] = useState(false);
    return (
      <main className={mainClass}>
        <Header />
        <div className="nav-container">
        {
            !openAddModal &&
            <button 
                className="add-employee-btn" 
                onClick={() => setOpenAddModal(true)}>
                    Add Employee
            </button>
        }
        </div>

        <div className='Employees'>
            {
                openAddModal ? (
                <div className="modal">
                    <AddEmployee setOpenAddModal={setOpenAddModal}/>
                </div> 
                ):(<></>)
            }
            <EmployeeList employees={ employees }/>
        </div>
        <div className="grid">            
          {/* <Card title="Global Sales" description="Shipped Products" color="red" />
          <Card title="2020 Sales" description="All products" color="green" />
          <Card title="Email Statistics" description="24 Hours Performance" color="blue" /> */}
        </div>
      </main>
    );
  };

export default MainContent;