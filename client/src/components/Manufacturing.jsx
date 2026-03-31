import React from 'react';
import { Factory, Zap, Clock, AlertTriangle, Play, Pause } from 'lucide-react';

const Manufacturing = () => {
    const lines = [
      { id: 'L1', name: 'Assembly Line A', process: 'PCB SMT', progress: 75, status: 'Active', load: 'High' },
      { id: 'L2', name: 'Assembly Line B', process: 'Glass Bonding', progress: 30, status: 'Active', load: 'Normal' },
      { id: 'L3', name: 'Assembly Line C', process: 'Chassis Assembly', progress: 0, status: 'Idle', load: 'None' },
      { id: 'L4', name: 'Assembly Line D', process: 'Final Calibration', progress: 95, status: 'Warning', load: 'Overload' },
    ];

    return (
        <div className="manufacturing-view">
            <div className="header">
                <div className="title-section">
                    <h1>Manufacturing</h1>
                    <p>Production Line Telemetry & Throughput</p>
                </div>
                <div className="status-badge">
                   <Zap size={14} className="pulse" /> LOAD: 64% CAPACITY
                </div>
            </div>

            <div className="stat-grid">
               <div className="stat-card">
                  <span className="stat-label">DAILY TARGET</span>
                  <div className="stat-value">450 Units</div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: '65%', backgroundColor: '#00E5FF' }}></div></div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>292/450 Completed</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">DOWNTIME (24H)</span>
                  <div className="stat-value">1h 12m</div>
                  <p className="stat-diff" style={{ color: '#FF3D00' }}>↗ 5% vs Average</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">ENERGY CONSUMPTION</span>
                  <div className="stat-value">1.4 kW/h</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>Optimized Range</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">OPERATING STAFF</span>
                  <div className="stat-value">24 Active</div>
                  <p className="stat-diff">3 Shifts Running</p>
               </div>
            </div>

            <div className="card-panel">
                <div className="panel-header">
                    <h3 className="panel-title">Active Production Lines</h3>
                </div>
                <div className="production-grid">
                    {lines.map(line => (
                        <div key={line.id} className="line-card">
                            <div className="line-header">
                                <div className="line-info">
                                    <span className="line-id">{line.id}</span>
                                    <h4>{line.name}</h4>
                                </div>
                                <span className={`status-pill ${line.status.toLowerCase()}`}>{line.status}</span>
                            </div>
                            <div className="process-info">
                                <span>Current Process</span>
                                <strong>{line.process}</strong>
                            </div>
                            <div className="progress-section">
                                <div className="progress-labels">
                                    <span>Batch Progress</span>
                                    <span>{line.progress}%</span>
                                </div>
                                <div className="progress-bar">
                                    <div className="progress-fill" style={{ width: `${line.progress}%`, backgroundColor: line.status === 'Warning' ? '#FF3D00' : '#00E5FF' }}></div>
                                </div>
                            </div>
                            <div className="line-actions">
                                <button className="icon-btn"><Pause size={14} /></button>
                                <button className="icon-btn"><Play size={14} /></button>
                                <button className="text-btn">LOGS</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="content-row">
                 <div className="card-panel half">
                    <h3 className="panel-title">Maintenance Schedule</h3>
                    <div className="schedule-list">
                        <div className="schedule-item">
                            <div className="date-box">12 APR</div>
                            <div className="task">PLC Firmware Update</div>
                        </div>
                        <div className="schedule-item">
                            <div className="date-box">15 APR</div>
                            <div className="task">Vacuum Pump Servicing</div>
                        </div>
                    </div>
                 </div>
                 <div className="card-panel half">
                    <h3 className="panel-title">Production Alerts</h3>
                    <div className="alert-item error">
                        <AlertTriangle size={16} />
                        <span>Low pressure detected in Line D pneumatic manifold.</span>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default Manufacturing;
