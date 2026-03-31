import React, { useState } from 'react';
import { Plus, Search, MoreHorizontal, UserCheck, ShieldAlert, Edit2 } from 'lucide-react';

const staffData = [
  { emp_id: 'E-001', name: 'Arjun Patel',    role: 'Admin',      dept: 'Management',  status: 'Active',  contact: '98765-43210' },
  { emp_id: 'E-002', name: 'Priya Shah',     role: 'Sales',      dept: 'Commerce',    status: 'Active',  contact: '91234-56789' },
  { emp_id: 'E-003', name: 'Rohan Mehta',    role: 'Production', dept: 'Factory',     status: 'Active',  contact: '90011-22334' },
  { emp_id: 'E-004', name: 'Sneha Kapoor',   role: 'QC',         dept: 'Quality',     status: 'On Leave',contact: '88899-77665' },
  { emp_id: 'E-005', name: 'Dev Rathore',    role: 'Support',    dept: 'Post-Sales',  status: 'Active',  contact: '77711-33554' },
];

const customerData = [
  { cust_id: 'C-001', name: 'Rajesh Industries', contact: '92001-11002', address: 'Surat, Gujarat',    orders: 12, status: 'Premium' },
  { cust_id: 'C-002', name: 'Meena Electricals',  contact: '93400-22003', address: 'Ahmedabad, GJ',    orders: 5,  status: 'Regular' },
  { cust_id: 'C-003', name: 'Vijay Tech Ltd.',    contact: '94500-33004', address: 'Baroda, Gujarat',   orders: 8,  status: 'Premium' },
];

export default function StaffManagement() {
  const [tab, setTab] = useState('staff');
  const [search, setSearch] = useState('');

  const filteredStaff = staffData.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.emp_id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">User & Staff Management</h1>
          <p className="page-subtitle">SECURE LOGIN · ROLES · DEPARTMENTS · CUSTOMERS</p>
        </div>
        <button className="btn-obsidian-primary"><Plus size={14} style={{marginRight:6}} />ADD MEMBER</button>
      </div>

      {/* Summary Cards */}
      <div className="grid-4 mb-20">
        {[
          { label: 'Total Staff',    value: staffData.length,    color: '#38b2ac', note: '3 Departments' },
          { label: 'Active',         value: staffData.filter(s=>s.status==='Active').length, color: '#2ecc71', note: 'Online Now' },
          { label: 'Total Customers',value: customerData.length, color: '#9b59b6', note: '2 Premium' },
          { label: 'Roles Defined',  value: 5,                   color: '#e67e22', note: 'Admin · Sales · QC…' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <div className="stat-inline">
              <span className="stat-inline-label">{c.label}</span>
              <span style={{ fontSize: 28, fontWeight: 800, color: c.color }}>{c.value}</span>
              <span style={{ fontSize: 11, color: 'var(--text-secondary)' }}>{c.note}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div style={{ display:'flex', gap:8, marginBottom:20 }}>
        {['staff','customers'].map(t => (
          <button key={t} onClick={()=>setTab(t)}
            style={{ padding:'8px 20px', borderRadius:10, fontWeight:700, fontSize:13, border:'none',
              background: tab===t ? '#2d3748' : '#edf2f7',
              color: tab===t ? '#fff' : 'var(--text-secondary)' }}>
            {t === 'staff' ? '👥 Staff Registry' : '🏢 Customer Registry'}
          </button>
        ))}
      </div>

      {tab === 'staff' && (
        <div className="obsidian-card">
          <div className="flex-split mb-20">
            <h3 className="panel-title-obs">Staff Members</h3>
            <div className="top-search" style={{ background:'#f7fafc', padding:'8px 14px', borderRadius:10 }}>
              <Search size={15} />
              <input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search by name or ID…" style={{fontSize:13}} />
            </div>
          </div>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>EMP ID</th><th>NAME</th><th>ROLE</th><th>DEPARTMENT</th><th>CONTACT</th><th>STATUS</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {filteredStaff.map(s => (
                  <tr key={s.emp_id}>
                    <td style={{color:'#3182ce',fontWeight:800}}>{s.emp_id}</td>
                    <td>
                      <div style={{display:'flex',alignItems:'center',gap:10}}>
                        <div className="avatar-obs" style={{width:32,height:32,backgroundImage:`url(https://api.dicebear.com/7.x/initials/svg?seed=${s.name})`}} />
                        <span style={{fontWeight:700}}>{s.name}</span>
                      </div>
                    </td>
                    <td><span className="badge-obs badge-info">{s.role}</span></td>
                    <td style={{color:'var(--text-secondary)'}}>{s.dept}</td>
                    <td style={{fontSize:13}}>{s.contact}</td>
                    <td><span className={`badge-obs ${s.status==='Active'?'badge-success':'badge-warning'}`}>{s.status}</span></td>
                    <td>
                      <div style={{display:'flex',gap:8}}>
                        <button style={{border:'none',background:'#f7fafc',padding:'6px 8px',borderRadius:6,cursor:'pointer'}}><Edit2 size={13}/></button>
                        <button style={{border:'none',background:'#f7fafc',padding:'6px 8px',borderRadius:6,cursor:'pointer'}}><MoreHorizontal size={13}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'customers' && (
        <div className="obsidian-card">
          <h3 className="panel-title-obs mb-20">Customer Registry</h3>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>CUST ID</th><th>NAME</th><th>CONTACT</th><th>ADDRESS</th><th>ORDERS</th><th>TIER</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {customerData.map(c => (
                  <tr key={c.cust_id}>
                    <td style={{color:'#3182ce',fontWeight:800}}>{c.cust_id}</td>
                    <td style={{fontWeight:700}}>{c.name}</td>
                    <td style={{fontSize:13}}>{c.contact}</td>
                    <td style={{color:'var(--text-secondary)',fontSize:13}}>{c.address}</td>
                    <td><span style={{fontWeight:800}}>{c.orders}</span></td>
                    <td><span className={`badge-obs ${c.status==='Premium'?'badge-warning':'badge-info'}`}>{c.status}</span></td>
                    <td><button style={{border:'none',background:'none',cursor:'pointer'}}><MoreHorizontal size={16}/></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
