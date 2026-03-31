import { Search, Bell, Settings } from 'lucide-react';

const Topbar = () => (
    <header className="top-header-obsidian">
        <div className="top-search">
            <Search size={18} />
            <input type="text" placeholder="Search" />
        </div>
        <div className="top-actions-obsidian">
           <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text-secondary)' }}>
              Monday, July 2
           </div>
           <Bell size={20} color="var(--text-secondary)" />
           <Settings size={20} color="var(--text-secondary)" />
           <div className="user-profile-obsidian" style={{ width: '36px', height: '36px', borderRadius: '50%', backgroundColor: '#cbd5e0', padding: '2px' }}>
               <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=User" alt="User" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
           </div>
        </div>
    </header>
);

export default Topbar;
