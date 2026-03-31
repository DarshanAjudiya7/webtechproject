import React from 'react';
import { Factory, Zap, ShieldCheck, Activity, Layers, Clock } from 'lucide-react';

const Manufacturing = () => {
  const productionLines = [
    { id: 'L1', name: 'Assembly Line A', status: 'Active', process: 'PCB SMT', progress: 75, color: '#2ecc71', type: 'High Speed' },
    { id: 'L2', name: 'Assembly Line B', status: 'Active', process: 'Glass Bonding', progress: 30, color: '#f1c40f', type: 'Precision' },
    { id: 'L3', name: 'Assembly Line C', status: 'Idle', process: 'Chassis Assembly', progress: 0, color: '#95a5a6', type: 'Heavy Duty' },
    { id: 'L4', name: 'Assembly Line D', status: 'Warning', process: 'Final Calibration', progress: 10, color: '#e74c3c', type: 'Quality Gate' }
  ];

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div className="header-title-section">
          <h1 className="page-title">Manufacturing OS</h1>
          <p className="page-subtitle">REAL-TIME PRODUCTION TELEMETRY & LINE CONTROL</p>
        </div>
        <div className="header-actions-obsidian">
           <button className="btn-obsidian-primary">INITIATE NEW BATCH</button>
        </div>
      </div>

      <div className="grid-4 mb-20">
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">DAILY TARGET</span>
               <span className="stat-inline-val">450 Units</span>
               <div className="progress-container-obs mt-20">
                  <div className="progress-bar-obs" style={{ width: '65%', background: 'var(--accent-green)' }}></div>
               </div>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">DOWNTIME (24H)</span>
               <span className="stat-inline-val">1h 12m</span>
               <span style={{ color: 'var(--accent-red)', fontSize: '12px', fontWeight: 700 }}>↗ 5% vs Average</span>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">ENERGY CONSUMPTION</span>
               <span className="stat-inline-val">1.4 kW/h</span>
               <span style={{ color: 'var(--accent-green)', fontSize: '12px', fontWeight: 700 }}>Optimized Range</span>
            </div>
         </div>
         <div className="obsidian-card">
            <div className="stat-inline">
               <span className="stat-inline-label">OPERATING STAFF</span>
               <span className="stat-inline-val">24 Active</span>
               <span style={{ fontSize: '11px', color: 'var(--text-secondary)' }}>3 Shifts Running</span>
            </div>
         </div>
      </div>

      <h3 className="panel-title-obs mb-20" style={{ paddingLeft: '4px' }}>Active Production Lines</h3>
      
      <div className="grid-2">
        {productionLines.map(line => (
          <div key={line.id} className="obsidian-card">
            <div className="flex-split">
               <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <span className="badge-obs" style={{ backgroundColor: '#2d3748', color: '#fff', padding: '4px 8px' }}>{line.id}</span>
                    <h3 style={{ fontSize: '16px', fontWeight: 800 }}>{line.name}</h3>
                  </div>
                  <span className={`badge-obs ${line.status === 'Active' ? 'badge-success' : line.status === 'Idle' ? 'badge-info' : 'badge-danger'}`}>
                     {line.status}
                  </span>
               </div>
               <div style={{ textAlign: 'right' }}>
                  <span className="stat-inline-label">{line.type}</span>
                  <div style={{ fontWeight: 800 }}>{line.process}</div>
               </div>
            </div>
            
            <div className="mt-20">
               <div className="flex-split mb-20">
                  <span style={{ fontSize: '12px', fontWeight: 700 }}>Batch Progress</span>
                  <span style={{ fontSize: '12px', fontWeight: 800 }}>{line.progress}%</span>
               </div>
               <div className="progress-container-obs">
                  <div className="progress-bar-obs" style={{ width: `${line.progress}%`, background: line.color }}></div>
               </div>
            </div>

            <div className="section-stats-bar" style={{ marginTop: '24px' }}>
               <button className="footer-link" style={{ background: '#f8f9fa', color: 'var(--text-primary)', border: '1px solid var(--border-light)' }}>
                  <Layers size={14} /> LOGS
               </button>
               <button className="footer-link" style={{ background: '#f8f9fa', color: 'var(--text-primary)', border: '1px solid var(--border-light)' }}>
                  <Clock size={14} /> HISTORY
               </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Manufacturing;
