import React from 'react';
import { ShieldCheck, Crosshair, AlertTriangle, FileText, ChevronRight, Activity, Filter, Download } from 'lucide-react';

const QualityControl = () => {
  const recentLogs = [
    { id: '#B-88291', product: 'Iridium Core Plate', inspector: 'A. Mitchell', date: 'Oct 24, 08:30', result: 'PASS', score: '98%' },
    { id: '#B-88290', product: 'Kinetic Actuator V4', inspector: 'J. Kovic', date: 'Oct 23, 16:45', result: 'FAIL', score: '32%' },
    { id: '#B-88289', product: 'Optic Array L2', inspector: 'S. Weber', date: 'Oct 23, 11:20', result: 'PASS', score: '95%' },
    { id: '#B-88288', product: 'Thermal Sensor 2', inspector: 'T. Reed', date: 'Oct 22, 14:10', result: 'PASS', score: '89%' }
  ];

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div className="header-title-section">
          <h1 className="page-title">Quality Assurance Registry</h1>
          <p className="page-subtitle">REAL-TIME TELEMETRY AND STRUCTURAL VALIDATION LOGS</p>
        </div>
        <div className="header-actions-obsidian">
           <button className="btn-obsidian-primary"><ShieldCheck size={14} style={{ marginRight: '8px' }} /> LOG NEW QC TEST</button>
        </div>
      </div>

      <div className="grid-3 mb-20">
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">PASS/FAIL GLOBAL RATIO</span>
               <span className="stat-inline-val">98.4%</span>
               <span style={{ color: 'var(--accent-green)', fontSize: '13px', fontWeight: 800 }}>↗ +1.2%</span>
            </div>
            <div className="progress-container-obs mt-20">
               <div className="progress-bar-obs" style={{ width: '98%', background: 'var(--accent-green)' }}></div>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">TOTAL PASS</span>
               <span className="stat-inline-val">14,209</span>
               <span className="stat-inline-label">REJECTIONS</span>
               <span style={{ fontSize: '14px', fontWeight: 700, color: 'var(--accent-red)' }}>231</span>
            </div>
         </div>
         <div className="obsidian-card" style={{ background: '#2d3748', color: '#fff' }}>
            <div className="stat-inline">
               <span className="stat-inline-label" style={{ color: 'rgba(255,255,255,0.6)' }}>FAILURE DIAGNOSTICS</span>
               <div className="mt-20">
                  <div className="flex-split mb-20">
                     <span style={{ fontSize: '12px' }}>Structural Stress</span>
                     <span style={{ fontWeight: 800 }}>42%</span>
                  </div>
                  <div className="flex-split mb-20">
                     <span style={{ fontSize: '12px' }}>Thermal Tolerance</span>
                     <span style={{ fontWeight: 800 }}>31%</span>
                  </div>
                  <div className="flex-split mb-20">
                     <span style={{ fontSize: '12px' }}>Surface Finish</span>
                     <span style={{ fontWeight: 800 }}>27%</span>
                  </div>
               </div>
            </div>
         </div>
      </div>

      <div className="obsidian-card">
         <div className="flex-split mb-20">
            <h3 className="panel-title-obs">Recent Logs</h3>
            <div style={{ display: 'flex', gap: '12px' }}>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)' }}><Filter size={18} /></button>
               <button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)' }}><Download size={18} /></button>
            </div>
         </div>

         <div className="table-container-obs">
            <table className="table-obs">
               <thead>
                  <tr>
                     <th>BATCH ID</th>
                     <th>PRODUCT NAME</th>
                     <th>INSPECTOR NAME</th>
                     <th>DATE</th>
                     <th>RESULT</th>
                     <th>ACTIONS</th>
                  </tr>
               </thead>
               <tbody>
                  {recentLogs.map((log, i) => (
                    <tr key={i}>
                       <td style={{ color: '#3182ce', fontWeight: 700 }}>{log.id}</td>
                       <td style={{ fontWeight: 600 }}>{log.product}</td>
                       <td>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                             <div className="avatar-obs" style={{ width: '28px', height: '28px', backgroundImage: `url(https://api.dicebear.com/7.x/initials/svg?seed=${log.inspector})` }}></div>
                             <span style={{ fontSize: '13px' }}>{log.inspector}</span>
                          </div>
                       </td>
                       <td style={{ color: 'var(--text-secondary)' }}>{log.date}</td>
                       <td>
                          <span className={`badge-obs ${log.result === 'PASS' ? 'badge-success' : 'badge-danger'}`}>
                             {log.result}
                          </span>
                       </td>
                       <td><button style={{ background: 'none', border: 'none', color: 'var(--text-secondary)' }}>•••</button></td>
                    </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
      
      <div className="obsidian-card" style={{ background: 'rgba(52, 152, 219, 0.05)', border: '1px dashed #3498db' }}>
         <p style={{ fontSize: '13px', color: '#2c3e50', fontWeight: 700 }}>
            Optimization suggested: Increase cooling cycle by 12 seconds on the primary forge line to mitigate thermal drift.
         </p>
      </div>
    </div>
  );
};

export default QualityControl;
