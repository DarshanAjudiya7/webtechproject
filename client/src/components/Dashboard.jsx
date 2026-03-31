import React from 'react';
import { Package, AlertCircle, Zap, Info } from 'lucide-react';

const StatCard = ({ label, value, diff, color, icon }) => (
  <div className="stat-card">
    <div className="stat-main">
        <div className="stat-info">
            <span className="stat-label">{label}</span>
            <h3 className="stat-value">{value}</h3>
            <p className="stat-diff" style={{ color }}>{diff}</p>
        </div>
        <div className="stat-icon-bg">
           {icon}
        </div>
    </div>
  </div>
);

const Dashboard = () => (
  <div className="dashboard-content">
    <div className="header">
      <div className="title-section">
        <h1>System Core</h1>
        <p>Real-time Telemetry Dashboard</p>
      </div>
      <div className="status-badge">
        <span className="dot pulse"></span> NETWORK STABLE
      </div>
    </div>

    <div className="stat-grid">
      <StatCard label="Total Revenue" value="$124,000" diff="↗ 12.4% vs last month" color="#00E676" />
      <StatCard label="Active Orders" value="42" diff="⏰ 8 Priority express" color="#FFB300" />
      <StatCard label="Inventory Health" value="98%" diff="Stable" color="#00E5FF" />
      <StatCard label="Pending Repairs" value="12" diff="⚠️ 4 High urgency" color="#FF3D00" />
    </div>

    <div className="content-row">
      <div className="card-panel">
        <div className="panel-header">
            <h3 className="panel-title">Revenue Performance</h3>
            <span className="year-pill">2024</span>
        </div>
        <div className="chart-placeholder">
           <div className="revenue-chart">
              <div className="chart-bars">
                 <div className="bar" style={{height: '30%'}}></div>
                 <div className="bar" style={{height: '45%'}}></div>
                 <div className="bar" style={{height: '35%'}}></div>
                 <div className="bar highlighted" style={{height: '75%'}}></div>
                 <div className="bar" style={{height: '55%'}}></div>
                 <div className="bar" style={{height: '65%'}}></div>
              </div>
              <div className="chart-labels">
                 <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
           </div>
        </div>
      </div>
      
      <div className="card-panel">
        <h3 className="panel-title">Distribution</h3>
        <div className="distribution-ring">
           <div className="ring-content">
              <span className="ring-val">64%</span>
              <span className="ring-label">TOUCHELITE</span>
           </div>
        </div>
        <div className="dist-legend">
           <div className="legend-item">
               <div className="legend-left">
                    <span className="dot" style={{backgroundColor: '#00E5FF'}}></span> 
                    <span>Elite Series</span>
               </div>
               <span>64%</span>
           </div>
           <div className="legend-item">
               <div className="legend-left">
                    <span className="dot" style={{backgroundColor: '#FF61D2'}}></span> 
                    <span>Standard</span>
               </div>
               <span>28%</span>
           </div>
           <div className="legend-item">
               <div className="legend-left">
                    <span className="dot" style={{backgroundColor: '#8B949E'}}></span> 
                    <span>Legacy</span>
               </div>
               <span>8%</span>
           </div>
        </div>
      </div>
    </div>

    <div className="content-row">
      <div className="card-panel">
        <div className="panel-header">
            <h3 className="panel-title">Inventory Critical</h3>
            <Package size={16} color="var(--accent-yellow)" />
        </div>
        <div className="inventory-list">
          <div className="inventory-item">
            <div className="item-info">
              <h4>Copper Contact Pins</h4>
              <span className="item-count">120 units left</span>
              <div className="progress-bar"><div className="progress-fill" style={{width: '15%', backgroundColor: '#FF61D2'}}></div></div>
            </div>
          </div>
          <div className="inventory-item">
             <div className="item-info">
              <h4>Tempered Glass Panels (Black)</h4>
              <span className="item-count">450 units left</span>
              <div className="progress-bar"><div className="progress-fill" style={{width: '45%', backgroundColor: '#FFB300'}}></div></div>
            </div>
          </div>
          <div className="inventory-item">
             <div className="item-info">
              <h4>Capacitive Touch ICs</h4>
              <span className="item-count">890 units left</span>
              <div className="progress-bar"><div className="progress-fill" style={{width: '70%', backgroundColor: '#FFB300'}}></div></div>
            </div>
          </div>
        </div>
      </div>

      <div className="card-panel">
        <div className="panel-header">
            <h3 className="panel-title">Failed QC Telemetry</h3>
            <span className="action-link">VIEW ALL</span>
        </div>
        <div className="qc-list">
           <div className="qc-item">
              <div className="qc-icon-box" style={{ backgroundColor: 'rgba(255, 61, 0, 0.1)', color: '#FF3D00' }}>
                 <AlertCircle size={18} />
              </div>
              <div className="qc-text">
                 <h4>Batch #KF-902 Failure</h4>
                 <p>Resonance deviation detected in line 4.</p>
                 <span className="qc-time">2m ago</span>
              </div>
           </div>
           <div className="qc-item">
              <div className="qc-icon-box" style={{ backgroundColor: 'rgba(255, 215, 64, 0.1)', color: '#FFB300' }}>
                 <Zap size={18} />
              </div>
              <div className="qc-text">
                 <h4>Voltage Surge Incident</h4>
                 <p>Unit 441 exceeded 240V during stress test.</p>
                 <span className="qc-time">14m ago</span>
              </div>
           </div>
           <div className="qc-item">
              <div className="qc-icon-box" style={{ backgroundColor: 'rgba(255, 97, 210, 0.1)', color: '#FF61D2' }}>
                 <Info size={18} />
              </div>
              <div className="qc-text">
                 <h4>Seal Integrity Compromised</h4>
                 <p>Moisture ingress detected in IP65 series batch.</p>
                 <span className="qc-time">1h ago</span>
              </div>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
