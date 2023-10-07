import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
  
   
      <div className={`fixed h-screen bg-black w-[150px] text-white flex transition-transform duration-300 ease-in-out transform ${isSidebarCollapsed ? 'translate-x-[-70%]' : ''}`}>
        <div className="w-[100%] justify-center pt-12">
          
          <ul className={`flex flex-col  gap-3 ${isSidebarCollapsed ? 'items-end pr-4' : 'items-center'} `}>
          <button onClick={toggleSidebar} className="text-white mb-2">
          <FontAwesomeIcon icon={faBars} size='lg' />
          </button>
            <li>
              <a href="">
                {isSidebarCollapsed ? (
                  <FontAwesomeIcon icon={faHome} />
                ) : (
                  'Home'
                )}
              </a>
            </li>
            <li>
              <a href="#about">
                {isSidebarCollapsed ? (
                  <FontAwesomeIcon icon={faInfoCircle} />
                ) : (
                  'About'
                )}
              </a>
            </li>
            <li>
              <a href="">
                {isSidebarCollapsed ? (
                  <FontAwesomeIcon icon={faEnvelope} />
                ) : (
                  'Contact'
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
     
    
 
  );
}

export default Sidebar;
