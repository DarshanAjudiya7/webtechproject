import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Topbar = () => (
    <header className="top-header">
        <div className="search-bar">
            <Search size={16} />
            <input type="text" placeholder="Search telemetry..." />
        </div>
        <div className="top-nav">
           <nav>
              <a href="#" className="active">OVERVIEW</a>
              <a href="#">ANALYTICS</a>
              <a href="#">LOGS</a>
           </nav>
        </div>
        <div className="top-actions">
           <Bell size={18} />
           <Settings size={18} />
           <div className="profile-img">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="Profile" />
           </div>
        </div>
    </header>
);

export default Topbar;
