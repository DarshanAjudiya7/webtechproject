import React from 'react';
import { Search, Bell, Settings } from 'lucide-react';

const Topbar = () => (
    <header className="top-header-obsidian">
        <div className="top-search">
            <Search size={16} color="var(--text-muted)" />
            <input type="text" placeholder="Search SKU or name..." />
        </div>
        <div className="top-nav-links">
           <nav>
              <a href="#" className="active">OVERVIEW</a>
              <a href="#">ANALYTICS</a>
              <a href="#">LOGS</a>
           </nav>
        </div>
        <div className="top-actions-obsidian">
           <Bell size={18} color="var(--text-muted)" />
           <Settings size={18} color="var(--text-muted)" />
           <div className="user-profile-obsidian">
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=John" alt="User" />
               <div className="online-indicator"></div>
           </div>
        </div>
    </header>
);

export default Topbar;
