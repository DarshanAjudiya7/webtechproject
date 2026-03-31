import React from 'react';
import { 
  LayoutDashboard, 
  Package, 
  Factory, 
  ShieldCheck, 
  DollarSign, 
  Users 
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
    { id: 'inventory', label: 'Inventory', icon: <Package size={18} /> },
    { id: 'manufacturing', label: 'Manufacturing', icon: <Factory size={18} /> },
    { id: 'quality', label: 'Quality Control', icon: <ShieldCheck size={18} /> },
    { id: 'sales', label: 'Sales', icon: <DollarSign size={18} /> },
    { id: 'staff', label: 'Staff', icon: <Users size={18} /> }
  ];

  return (
    <aside className="sidebar">
      <div className="brand">
        <h1 className="brand-name">OBSIDIAN FORGE</h1>
        <p className="brand-sub">Industrial Luminescence</p>
      </div>
      
      <nav className="nav-links">
        {menuItems.map(item => (
          <button 
            key={item.id}
            className={`nav-item ${activeTab === item.id ? 'active' : ''}`}
            onClick={() => setActiveTab(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-label">{item.label}</span>
          </button>
        ))}
      </nav>

      <button className="new-batch-btn">New Batch +</button>
      
      <div className="sidebar-footer">
         <div className="nav-item">❓ SUPPORT</div>
         <div className="nav-item">🚪 LOGOUT</div>
      </div>
    </aside>
  );
};

export default Sidebar;
