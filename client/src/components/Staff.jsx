import React from 'react';
import { Users, Mail, Phone, MoreVertical, Search, CheckCircle, Clock } from 'lucide-react';

const Staff = () => {
    const staff = [
        { name: 'Dr. Sarah Connor', role: 'Chief Engineer', dept: 'R&D', status: 'Online', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah' },
        { name: 'Marcus Wright', role: 'Production Supervisor', dept: 'Manufacturing', status: 'In Meeting', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus' },
        { name: 'Kyle Reese', role: 'QC Lead', dept: 'Quality Control', status: 'Offline', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Kyle' },
        { name: 'T-800', role: 'Logistics Manager', dept: 'Inventory', status: 'Online', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=T800' },
    ];

    return (
        <div className="staff-view">
            <div className="header">
                 <div className="title-section">
                    <h1>Staff Registry</h1>
                    <p>Personnel Management & Availability Telemetry</p>
                </div>
                <div className="status-badge online">
                   <CheckCircle size={14} /> TEAM STATUS: ASSEMBLED
                </div>
            </div>

            <div className="stat-grid">
               <div className="stat-card">
                  <span className="stat-label">TOTAL PERSONNEL</span>
                  <div className="stat-value">142 Employees</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>12 Active Recruiting</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">SHIFT COMPLIANCE</span>
                  <div className="stat-value">99.2%</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>↗ 0.4% this month</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">DEPARTMENTAL LOAD</span>
                  <div className="stat-value">Balanced</div>
                  <p className="stat-diff" style={{ color: '#00E5FF' }}>Stable output</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">L&D PROGRESS</span>
                  <div className="stat-value">84% Trained</div>
                  <p className="stat-diff">Advanced Protocols</p>
               </div>
            </div>

            <div className="card-panel">
                <div className="panel-header">
                    <h3 className="panel-title">Personnel Roster</h3>
                    <div className="search-mini">
                        <Search size={14} />
                        <input type="text" placeholder="Search staff name..." />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="staff-table">
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
                                    <td className="staff-member">
                                        <div className="member-avatar">
                                            <img src={s.img} alt={s.name} />
                                            <span className={`status-dot ${s.status.toLowerCase().replace(' ', '-')}`}></span>
                                        </div>
                                        <div className="member-info">
                                            <div className="member-name">{s.name}</div>
                                            <div className="member-email">{s.name.toLowerCase().replace(' ', '.')}@obsidian.com</div>
                                        </div>
                                    </td>
                                    <td className="role">{s.role}</td>
                                    <td><span className="dept-tag">{s.dept}</span></td>
                                    <td><span className={`status-text ${s.status.toLowerCase().replace(' ', '-')}`}>{s.status}</span></td>
                                    <td className="contact-btns">
                                        <button className="icon-btn-min"><Mail size={12} /></button>
                                        <button className="icon-btn-min"><Phone size={12} /></button>
                                    </td>
                                    <td><button className="icon-btn"><MoreVertical size={14} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="content-row">
                 <div className="card-panel">
                    <h3 className="panel-title">Shift Distribution</h3>
                    <div className="shift-display">
                        <div className="shift-segment alpha" style={{ width: '40%' }}>ALPHA (40%)</div>
                        <div className="shift-segment beta" style={{ width: '35%' }}>BETA (35%)</div>
                        <div className="shift-segment gamma" style={{ width: '25%' }}>GAMMA (25%)</div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Staff;
