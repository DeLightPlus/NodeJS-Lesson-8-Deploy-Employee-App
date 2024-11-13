import React, { useState } from 'react';
import "./dashboard.css"


// Sidebar links data
const sidebarLinks = [
  { text: 'Dashboard', href: '#' },
  { text: 'Profile', href: '#' },
  { text: 'Admins', href: '#' },
  { text: 'Employees', href: '#' },
  { text: '', href: '#' },
  { text: '', href: '#' },
  { text: '', href: '#' },
];

// CSS class names for styling
const sidebarClass = 'sidebar';
const linkClass = 'sidebar-link';
const buttonClass = 'logout-btn';

// Sidebar Component
const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (    
      <SidebarContent 
        isOpen={isSidebarOpen} 
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} 
      />
   );
};

// Sidebar Content (Links and Button)
const SidebarContent = ({ isOpen, toggleSidebar }) => {
  return (
    <aside className={`${sidebarClass} ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-toggle" onClick={toggleSidebar}>☰</button>
      <h1 className="title">EMPLOYEE APP</h1>
      <nav>
        <ul>
          {sidebarLinks.map((link, index) => (
            <SidebarLink key={index} link={link} />
          ))}
        </ul>
      </nav>
      <button className={buttonClass}>Logout</button>
    </aside>
  );
};

// Sidebar Link Component
const SidebarLink = ({ link }) => {
  return (
    <li className="sidebar-item">
      <a href={link.href} className={linkClass}>
        {link.text}
      </a>
    </li>
  );
};





export default Sidebar;
