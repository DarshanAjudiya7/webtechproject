import React from 'react';
import { ShieldCheck, CheckCircle, AlertCircle, RefreshCcw, Eye, Search } from 'lucide-react';

const QualityControl = () => {
    const findings = [
        { id: 'QC-7721', batch: '#KF-902', product: 'Elite Touch 4G', finding: 'Capacitance offset +5%', severity: 'Minor', action: 'Re-calibrate' },
        { id: 'QC-7722', batch: '#KF-902', product: 'Elite Touch 4G', finding: 'Surface scratch on G1', severity: 'Reject', action: 'Discard Glass' },
        { id: 'QC-7723', batch: '#LF-112', product: 'Standard 2G', finding: 'Voltage Leak @ 220V', severity: 'Critical', action: 'Full Batch Isolation' },
        { id: 'QC-7722', batch: '#KF-902', product: 'Elite Touch 4G', finding: 'LED mismatch in line 4', severity: 'Minor', action: 'Rework' },
    ];

    return (
        <div className="qc-view">
            <div className="header">
                 <div className="title-section">
                    <h1>Quality Control</h1>
                    <p>Validation Metrics & Inspection Logs</p>
                </div>
                <div className="status-badge valid">
                   <ShieldCheck size={14} /> QUALITY INDEX: 98.4%
                </div>
            </div>

            <div className="stat-grid">
               <div className="stat-card">
                  <span className="stat-label">BATTED INSPECTED</span>
                  <div className="stat-value">1,245 Units</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>↗ 12% today</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">REJECTION RATE</span>
                  <div className="stat-value">0.82%</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>↘ 0.2% improvement</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">STRESS TEST FAILURES</span>
                  <div className="stat-value">14 Units</div>
                  <p className="stat-diff" style={{ color: '#FF3D00' }}>⚠️ Overheating issues</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">AVG INSPECTION TIME</span>
                  <div className="stat-value">4.2 min</div>
                  <p className="stat-diff">Standard: 5.0 min</p>
               </div>
            </div>

            <div className="card-panel">
                <div className="panel-header">
                    <h3 className="panel-title">Inspection Findings</h3>
                    <div className="search-mini">
                        <Search size={14} />
                        <input type="text" placeholder="Filter batch..." />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="qc-table">
                        <thead>
                            <tr>
                                <th>TEST ID</th>
                                <th>BATCH</th>
                                <th>PRODUCT</th>
                                <th>FINDING</th>
                                <th>SEVERITY</th>
                                <th>ACTION</th>
                                <th>DETAILS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {findings.map((f, i) => (
                                <tr key={i}>
                                    <td className="test-id">#{f.id}</td>
                                    <td className="batch-id">{f.batch}</td>
                                    <td>{f.product}</td>
                                    <td className="finding">{f.finding}</td>
                                    <td><span className={`severity-tag ${f.severity.toLowerCase()}`}>{f.severity}</span></td>
                                    <td>{f.action}</td>
                                    <td><button className="icon-btn"><Eye size={14} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="content-row">
                 <div className="card-panel">
                    <h3 className="panel-title">Recent Batch Validations</h3>
                    <div className="batch-status-list">
                         <div className="batch-status-item">
                            <span className="batch-label">Batch #KF-902</span>
                            <div className="batch-progress-bar pass" style={{ width: '92%' }}></div>
                            <span className="batch-result pass">PASSED</span>
                         </div>
                         <div className="batch-status-item">
                            <span className="batch-label">Batch #LF-112</span>
                            <div className="batch-progress-bar fail" style={{ width: '30%' }}></div>
                            <span className="batch-result fail">FAILED</span>
                         </div>
                    </div>
                 </div>
            </div>
        </div>
    );
};

export default QualityControl;
