import React, { useState } from 'react';
import './Header.css'; // Import your CSS file

const Header = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredData, setFilteredData] = useState([]);

    const inputHandler = (e) => {
        const query = e.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = data.filter(item => 
            item.name.toLowerCase().includes(query) || 
            item.emailadress.toLowerCase().includes(query) ||
            item.phonenumber.includes(query) || 
            item.ID.toString().includes(query)
        );
        setFilteredData(filtered);
    };

    return (
        <header className="header">
            <p>Dashboard/Employees</p>
            
            <nav className="navbar">                                      

                    <div className="nav-links">
                        <a href="#" className="nav-link">
                            <input className='search-input' 
                                type="text" 
                                placeholder="Search..."                                 
                                value={searchQuery}
                                onChange={inputHandler} 
                            />                 
                        </a>                        
                    </div>

                    <div className="auth-links">
                        <a href="#" className="nav-link">Sign up</a>
                        <a href="#" className="nav-link">Sign in</a>
                    </div>

                    <div className="auth-links">
                        <a href="#" className="nav-link">logout</a>
                    </div>
            </nav>                
          
        </header>
    );
};

export default Header;
