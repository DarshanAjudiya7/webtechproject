import React from 'react';
import { Users, UserPlus, Phone, Mail, MoreHorizontal, Search, Settings, Shield } from 'lucide-react';

const Staff = () => {
  const staff = [
    { name: 'Dr. Sarah Connor', role: 'Chief Engineer', dept: 'R&D', status: 'Online', emoji: '👩‍🔬' },
    { name: 'Marcus Wright', role: 'Line Manager', dept: 'Production', status: 'On Leave', emoji: '👨‍🔧' },
    { name: 'Kyle Reese', role: 'QC Analyst', dept: 'Quality', status: 'Online', emoji: '👨‍💻' },
    { name: 'John Connor', role: 'Operations Lead', dept: 'Admin', status: 'Online', emoji: '🤵' }
  ];

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div className="header-title-section">
          <h1 className="page-title">Staff Registry</h1>
          <p className="page-subtitle">Personnel Management & Availability Telemetry</p>
        </div>
        <div className="header-actions-obsidian">
           <button className="btn-obsidian-primary"><UserPlus size={14} style={{ marginRight: '8px' }} /> ADD PERSONNEL</button>
        </div>
      </div>

      <div className="grid-4 mb-20">
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">TEAM STATUS</span>
               <span className="stat-inline-val" style={{ color: 'var(--accent-green)' }}>● ASSEMBLED</span>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">TOTAL PERSONNEL</span>
               <span className="stat-inline-val">142 Employees</span>
               <span style={{ fontSize: '12px', color: 'var(--accent-green)', fontWeight: 800 }}>12 Active Recruiting</span>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">SHIFT COMPLIANCE</span>
               <span className="stat-inline-val">99.2%</span>
               <span style={{ fontSize: '12px', color: 'var(--accent-green)', fontWeight: 800 }}>↗ 0.4% this month</span>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">DEPARTMENTAL LOAD</span>
               <span className="stat-inline-val">Balanced</span>
               <span style={{ fontSize: '12px', color: '#3498db', fontWeight: 800 }}>Stable output</span>
            </div>
         </div>
      </div>

      <div className="obsidian-card">
         <div className="flex-split mb-20">
            <h3 className="panel-title-obs">Personnel Roster</h3>
            <div className="top-search" style={{ background: '#f8f9fa', padding: '10px 16px', borderRadius: '10px' }}>
               <Search size={16} />
               <input type="text" placeholder="Search staff name..." style={{ fontSize: '13px' }} />
            </div>
         </div>

         <div className="table-container-obs">
            <table className="table-obs">
               <thead>
                  <tr>
                     <th>STAFF MEMBER</th>
                     <th>ROLE</th>
                     <th>DEPARTMENT</th>
                     <th>STATUS</th>
                     <th>CONTACT</th>
                     <th>ACTIONS</th>
                  </tr>
               </thead>
               <tbody>
                  {staff.map((s, i) => (
                    <tr key={i}>
                       <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                             <div className="avatar-obs" style={{ backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${s.name})` }}></div>
                             <div className="stat-inline">
                                <span style={{ fontWeight: 800 }}>{s.name}</span>
                                <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>Employee ID: #E-99{i}</span>
                             </div>
                          </div>
                       </td>
                       <td style={{ fontWeight: 600 }}>{s.role}</td>
                       <td><span className="badge-obs badge-info">{s.dept}</span></td>
                       <td>
                          <span className={`badge-obs ${s.status === 'Online' ? 'badge-success' : 'badge-warning'}`}>
                             {s.status}
                          </span>
                       </td>
                       <td>
                          <div style={{ display: 'flex', gap: '10px' }}>
                             <button style={{ border: 'none', background: '#f8f9fa', padding: '6px', borderRadius: '6px' }}><Mail size={14} /></button>
                             <button style={{ border: 'none', background: '#f8f9fa', padding: '6px', borderRadius: '6px' }}><Phone size={14} /></button>
                          </div>
                       </td>
                       <td><button style={{ border: 'none', background: 'none' }}><MoreHorizontal size={18} /></button></td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>

      <div className="obsidian-card" style={{ background: 'rgba(46, 204, 113, 0.05)', border: '1px solid var(--accent-green)' }}>
         <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--accent-green)' }}>
            <Shield size={20} />
            <span style={{ fontWeight: 800 }}>L&D PROGRESS: 84% Trained in Advanced Protocols</span>
         </div>
      </div>
    </div>
  );
};

export default Staff;
