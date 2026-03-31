import React from 'react';
import { ShieldCheck, Plus, FileText, ChevronLeft, ChevronRight, Zap, Target, Eye, MoreHorizontal, Filter, Upload } from 'lucide-react';

const QualityControl = () => {
    const logs = [
        { id: '#B-88291', product: 'Iridium Core Plate', inspector: 'A. Mitchell', inspectorInitials: 'AM', date: 'Oct 24, 08:30', result: 'PASS', resultColor: '#00E676' },
        { id: '#B-88290', product: 'Kinetic Actuator V4', inspector: 'J. Kovic', inspectorInitials: 'JK', date: 'Oct 23, 16:45', result: 'FAIL', resultColor: '#FF3D00' },
        { id: '#B-88289', product: 'Modular Rail Housing', inspector: 'S. Patel', inspectorInitials: 'SP', date: 'Oct 23, 14:12', result: 'PASS', resultColor: '#00E676' },
        { id: '#B-88288', product: 'Flux Capacitor Seal', inspector: 'A. Mitchell', inspectorInitials: 'AM', date: 'Oct 23, 11:55', result: 'PASS', resultColor: '#00E676' },
        { id: '#B-88287', product: 'Neural Interface Link', inspector: 'J. Kovic', inspectorInitials: 'JK', date: 'Oct 22, 16:30', result: 'FAIL', resultColor: '#FF3D00' },
    ];

    return (
        <div className="obsidian-view">
            <div className="obsidian-view-header">
                 <div className="header-title-section">
                    <h1>Quality Assurance Registry</h1>
                    <p>REAL-TIME TELEMETRY AND STRUCTURAL VALIDATION LOGS</p>
                </div>
                <button className="btn-obsidian-primary"><ShieldCheck size={16} /> LOG NEW QC TEST</button>
            </div>

            <div className="qc-analytics-grid">
               <div className="qc-main-card">
                  <span className="qc-sub-label">PASS/FAIL GLOBAL RATIO</span>
                  <div className="qc-gauge-section">
                     <h2 className="qc-gauge-val">98.4% <span className="diff-p">↗ +1.2%</span></h2>
                     <div className="qc-gauge-bar-container">
                        <div className="qc-gauge-fill" style={{ width: '98.4%' }}></div>
                     </div>
                  </div>
                  <div className="qc-gauge-footer">
                     <div className="qc-meta-item"><span>TOTAL PASS</span><h4>14,209</h4></div>
                     <div className="qc-meta-item"><span>REJECTIONS</span><h4>231</h4></div>
                  </div>
               </div>

               <div className="qc-side-card">
                  <h4 className="side-card-title">FAILURE DIAGNOSTICS</h4>
                  <div className="diagnostic-list">
                     <div className="diag-item">
                        <div className="diag-label"><span>Structural Stress</span><span>42%</span></div>
                        <div className="diag-progress"><div className="diag-fill pink" style={{ width: '42%' }}></div></div>
                     </div>
                     <div className="diag-item">
                        <div className="diag-label"><span>Thermal Tolerance</span><span>31%</span></div>
                        <div className="diag-progress"><div className="diag-fill yellow" style={{ width: '31%' }}></div></div>
                     </div>
                     <div className="diag-item">
                        <div className="diag-label"><span>Surface Finish</span><span>27%</span></div>
                        <div className="diag-progress"><div className="diag-fill cyan" style={{ width: '27%' }}></div></div>
                     </div>
                  </div>
                  <p className="diag-note">Optimization suggested: Increase cooling cycle by 12 seconds on the primary forge line to mitigate thermal drift.</p>
               </div>
            </div>

            <div className="obsidian-card-panel">
               <div className="panel-header-obs">
                  <h3 className="panel-title-obs">Recent Logs</h3>
                  <div className="panel-actions-obs">
                     <Filter size={14} />
                     <Upload size={14} />
                  </div>
               </div>
               
               <table className="obsidian-data-table logs-table">
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
                     {logs.map((log, i) => (
                        <tr key={i}>
                           <td className="batch-id-cell">{log.id}</td>
                           <td className="p-name-cell">{log.product}</td>
                           <td className="inspector-cell">
                              <div className="inspector-avatar" style={{ backgroundColor: i % 2 === 0 ? 'var(--accent-pink)' : 'var(--accent-yellow)' }}>{log.inspectorInitials}</div>
                              <span>{log.inspector}</span>
                           </td>
                           <td className="date-cell">{log.date}</td>
                           <td>
                              <div className="badge-result" style={{ borderColor: `${log.resultColor}44`, color: log.resultColor }}>
                                 <span className="badge-dot" style={{ backgroundColor: log.resultColor }}></span>
                                 {log.result}
                              </div>
                              {log.result === 'FAIL' && <button className="btn-retest">RE-TEST</button>}
                           </td>
                           <td><button className="btn-action-obs"><MoreHorizontal size={16} /></button></td>
                        </tr>
                     ))}
                  </tbody>
               </table>

               <div className="obsidian-table-footer">
                  <span className="footer-stats-text">Showing 5 of 1,248 entries</span>
                  <div className="obsidian-pagination">
                     <button className="page-nav-btn"><ChevronLeft size={16} /></button>
                     <button className="page-num-btn active">1</button>
                     <button className="page-num-btn">2</button>
                     <button className="page-num-btn">3</button>
                     <button className="page-nav-btn"><ChevronRight size={16} /></button>
                  </div>
               </div>
            </div>

            <div className="obsidian-content-row">
               <div className="obsidian-insight-card purple">
                  <div className="insight-header">
                     <Zap size={16} /> <span>AI Predictive Insight</span>
                  </div>
                  <p>Based on the last 48 hours of telemetry, Batch #B-88290 failure suggests a 14% deviation in the argon pressure stability of Forge Unit 4. Maintenance is recommended within 24 operational hours.</p>
                  <button className="insight-action">VIEW MAINTENANCE LOG</button>
               </div>
               <div className="obsidian-insight-card cyan">
                  <div className="insight-header">
                     <Target size={16} /> <span>Efficiency Score</span>
                  </div>
                  <div className="efficiency-viz">
                     <div className="eff-circle">
                        <div className="eff-fill" style={{ width: '80%' }}></div>
                        <span className="eff-val">80%</span>
                     </div>
                     <p>Validation cycle time has decreased by 14.2s per unit. Throughput is currently optimized for high-volume manufacturing.</p>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default QualityControl;
