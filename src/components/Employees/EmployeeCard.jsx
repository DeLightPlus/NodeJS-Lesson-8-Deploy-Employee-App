import React, { useState } from 'react';
import axios from 'axios';

const EmployeeCard = ({ employee }) => 
{
  const base_url ="https://nodejs-lesson-8-server.onrender.com"; // http://localhost:8000

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editedEmployee, setEditedEmployee] = useState({
    name: employee.name,
    email: employee.email,
    phone: employee.phone,
    position: employee.position,
    image: employee.imageUrl || employee.img_url, // Include image if needed
  });

  const handleEdit = async () => {
    // Basic validation
    if (!editedEmployee.name || !editedEmployee.email || 
      !editedEmployee.phone || !editedEmployee.position) 
    {
      alert("Please fill out all fields.");
      return;
    }

    try {
      const response = await axios.put(`${base_url}/api/employees/${employee.id}`, editedEmployee);
      console.log("Employee updated:", response.data.message);
      setIsModalOpen(false);
      window.location.reload(); // Refresh to see changes
    } catch (error) {
      console.error("Error updating employee:", error);
      alert("Failed to update employee. Please try again.");
    }
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`${base_url}/api/employees/${employee.id}`);
      console.log("deleted");
      window.location.reload();
    } catch (error) {
      console.error("Error deleting employee:", error);
    }
  };

  const onAvatarChange = async (e) => 
  {
    e.preventDefault();
    const file = e.target.files[0];
    console.log('Attempting to update avatar');

    if (file) 
    {
        const formData = new FormData();
        formData.append('image', file); // Append the file to FormData
        formData.append('id', employee.id); // Include the employee ID if needed
        formData.append('employeeId', employee.employeeId);

        try 
        {
            const response = await axios.patch(`${base_url}/api/employees/${employee.id}`, formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            });

            // Handle success
            console.log('Avatar updated successfully:', response.data);
            // Optionally, update the state to reflect the new image
            // setEmployee(response.data); // Uncomment and implement if you maintain employee state
        } 
        catch (error) 
        {
          console.error('Error uploading avatar:', error.response ? error.response.data : error.message);
        }
    }
  }

  return (
    <>
      <div className="employee_card">
        <div className="top">
          {employee.id && console.log(employee.id)}
          <div className='employee_avatar'>
            <img 
              src={employee.imageUrl || employee.img_url} 
              alt="Preview" 
              style={{ height: "128px", width: "128px", objectFit: "cover" }} 
            />

            <input className='card-img-inp'
              type='file'              
              onChange={(e)=>{ onAvatarChange(e) }}
            />
          </div>

          <div className="employee_details">
            <big>{employee.name}</big><br />
            <strong>{employee.position}</strong>
            <h1>{employee.employeeId}</h1>
            <hr />
            <div>
              <small>{employee.email}</small><br />
              <small>{employee.phone}</small>
            </div>
          </div>
        </div>
        <div className="button_group">
        {
          employee.imageUrl && 
          (
            <>
              <button onClick={() => setIsModalOpen(true)}>Edit</button>
              <button onClick={handleDelete}>Delete</button>
            </>
          )
        }
        </div>
      </div>

      {/* Modal for editing employee */}
      {
        isModalOpen && (
        <div className="modal">
          <div className="EditEmployee">
            <span className="close-modal-btn" onClick={() => setIsModalOpen(false)}>&times;</span>
            
            <div className="form-container">
              <h2>Update Employee Details</h2>
              <form onSubmit={(e) => { e.preventDefault(); handleEdit(); }}>
                <label htmlFor="">Full name: 
                  <input
                    type="text"
                    value={editedEmployee.name}
                    onChange={(e) => setEditedEmployee({ ...editedEmployee, name: e.target.value })}
                    placeholder="Name"
                    required
                  />
                </label>

                <label htmlFor="">Position
                  <input
                    type="text"
                    value={editedEmployee.position}
                    onChange={(e) => setEditedEmployee({ ...editedEmployee, position: e.target.value })}
                    placeholder="Position"
                    required
                  />
                </label>

                <label htmlFor="">Email
                  <input
                    type="email"
                    value={editedEmployee.email}
                    onChange={(e) => setEditedEmployee({ ...editedEmployee, email: e.target.value })}
                    placeholder="Email"
                    required
                  />
                </label>

                <label htmlFor="">Phone:
                  <input
                    type="text"
                    value={editedEmployee.phone}
                    onChange={(e) => setEditedEmployee({ ...editedEmployee, phone: e.target.value })}
                    placeholder="Phone"
                    required
                  />
                </label>
                <button type="submit">Save Changes</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default EmployeeCard;