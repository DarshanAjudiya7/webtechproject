import React from 'react';
import {
  LayoutDashboard, Users, Package, ShieldCheck,
  Truck, Warehouse, ShoppingCart, CreditCard,
  Send, Headphones, LogOut, ChevronRight, Zap
} from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
  const sections = [
    {
      label: 'CORE',
      items: [
        { id: 'dashboard',  label: 'Dashboard',           icon: <LayoutDashboard size={18} /> },
        { id: 'staff',      label: 'Staff Management',    icon: <Users size={18} /> },
      ]
    },
    {
      label: 'PRODUCTION',
      items: [
        { id: 'products',   label: 'Product & QC',        icon: <ShieldCheck size={18} /> },
        { id: 'supplychain',label: 'Supply Chain',        icon: <Truck size={18} /> },
        { id: 'inventory',  label: 'Inventory',           icon: <Warehouse size={18} /> },
      ]
    },
    {
      label: 'COMMERCE',
      items: [
        { id: 'orders',     label: 'Order Management',    icon: <ShoppingCart size={18} /> },
        { id: 'finance',    label: 'Finance & Payments',  icon: <CreditCard size={18} /> },
        { id: 'dispatch',   label: 'Dispatch',            icon: <Send size={18} /> },
        { id: 'support',    label: 'Post-Sales Support',  icon: <Headphones size={18} /> },
      ]
    }
  ];

  return (
    <aside className="sidebar-obsidian">
      <div className="brand-obsidian">
        <div style={{ width: 36, height: 36, borderRadius: 10, background: 'var(--accent-yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Zap size={20} color="#1a202c" />
        </div>
        <div>
          <h1 className="brand-title" style={{ fontSize: 18, marginBottom: 0 }}>SwitchBoard</h1>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.4)', letterSpacing: 2 }}>EMS v2.0</span>
        </div>
      </div>

      <nav className="nav-links-obsidian" style={{ overflowY: 'auto', paddingBottom: 12 }}>
        {sections.map(section => (
          <div key={section.label} style={{ marginBottom: 8 }}>
            <div style={{ fontSize: 10, fontWeight: 800, color: 'rgba(255,255,255,0.25)', letterSpacing: 2, padding: '12px 16px 6px' }}>
              {section.label}
            </div>
            {section.items.map(item => (
              <button
                key={item.id}
                className={`nav-item-obsidian ${activeTab === item.id ? 'active' : ''}`}
                onClick={() => setActiveTab(item.id)}
              >
                <span className="nav-icon-obsidian">{item.icon}</span>
                <span className="nav-label-obsidian" style={{ flex: 1, textAlign: 'left' }}>{item.label}</span>
                {activeTab === item.id && <ChevronRight size={14} />}
              </button>
            ))}
          </div>
        ))}
      </nav>

      <div className="sidebar-footer-obsidian">
        <button className="footer-link"><LogOut size={16} /> Log Out</button>
      </div>
    </aside>
  );
};

export default Sidebar;
