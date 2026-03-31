import React from 'react';
import { 
  BarChart2, 
  Package, 
  Factory, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  HelpCircle, 
  LogOut,
  Plus
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'DASHBOARD', icon: <BarChart2 size={18} /> },
    { id: 'inventory', label: 'INVENTORY', icon: <Package size={18} /> },
    { id: 'manufacturing', label: 'MANUFACTURING', icon: <Factory size={18} /> },
    { id: 'quality', label: 'QUALITY CONTROL', icon: <ShieldCheck size={18} /> },
    { id: 'sales', label: 'SALES', icon: <DollarSign size={18} /> },
    { id: 'staff', label: 'STAFF', icon: <Users size={18} /> }
  ];

  return (
    <aside className="sidebar-obsidian">
      <div className="brand-obsidian">
        <h1 className="brand-title">OBSIDIAN FORGE</h1>
        <div className="brand-details">
           <span className="brand-sub">Industrial Luminescence</span>
           <span className="brand-os">MANUFACTURING OS</span>
        </div>
      </div>
      
      <nav className="nav-links-obsidian">
        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`nav-item-obsidian ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon-obsidian">{item.icon}</span>
            <span className="nav-label-obsidian">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sidebar-footer-obsidian">
         <button className="btn-new-batch">New Batch <Plus size={16} /></button>
         <div className="footer-links">
            <button className="footer-link"><HelpCircle size={14} /> SUPPORT</button>
            <button className="footer-link"><LogOut size={14} /> LOGOUT</button>
         </div>
      </div>
    </aside>
  );
};

export default Sidebar;
