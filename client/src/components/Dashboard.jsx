import React from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  Box, 
  Wrench, 
  AlertCircle, 
  Zap, 
  Info,
  Calendar,
  ChevronRight
} from 'lucide-react';

const StatCard = ({ label, value, diff, icon: Icon, color, progress }) => (
  <div className="stat-card-base">
    <div className="stat-card-header">
      <span className="stat-label-text">{label}</span>
      <div className="stat-card-icon-box"><Icon size={16} /></div>
    </div>
    <div className="stat-card-body">
      <h3 className="stat-value-text">{value}</h3>
      {progress !== undefined ? (
        <div className="stat-progress-bar">
           <div className="progress-fill" style={{ width: `${progress}%`, backgroundColor: color }}></div>
        </div>
      ) : (
        <p className="stat-diff-text" style={{ color }}>{diff}</p>
      )}
    </div>
  </div>
);

const Dashboard = () => (
  <div className="dashboard-obsidian">
    <div className="obsidian-view-header">
      <div className="header-title-section">
        <h1>System Core</h1>
        <p>REAL-TIME TELEMETRY DASHBOARD</p>
      </div>
      <div className="status-badge-network">
        <span className="dot pulse"></span> NETWORK STABLE
      </div>
    </div>

    <div className="obsidian-stat-grid">
      <StatCard label="TOTAL REVENUE" value="$124,000" diff="↗ 12.4% vs last month" color="#00E676" icon={DollarSign} />
      <StatCard label="ACTIVE ORDERS" value="42" diff="⏰ 8 Priority express" color="#FFB300" icon={ShoppingCart} />
      <StatCard label="INVENTORY HEALTH" value="98%" progress={98} color="#00E5FF" icon={Box} />
      <StatCard label="PENDING REPAIRS" value="12" diff="⚠️ 4 High urgency" color="#FF3D00" icon={Wrench} />
    </div>

    <div className="obsidian-content-row">
      <div className="obsidian-card-panel flex-2">
        <div className="panel-header-obs">
            <h3 className="panel-title-obs">Revenue Performance</h3>
            <span className="year-pill-obs">2024</span>
        </div>
        <div className="obsidian-chart-placeholder">
           {/* Chart visualization */}
           <div className="chart-bars-obs">
              {[30, 45, 35, 75, 55, 65].map((h, i) => (
                <div key={i} className="bar-wrapper-obs">
                  <div className="bar-obs" style={{ height: `${h}%` }}></div>
                  <span className="bar-label-obs">{['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'][i]}</span>
                </div>
              ))}
           </div>
        </div>
      </div>
      
      <div className="obsidian-card-panel flex-1">
        <h3 className="panel-title-obs">Distribution</h3>
        <div className="distribution-ring-obs">
           <div className="ring-content-obs">
              <span className="ring-val-obs">64%</span>
              <span className="ring-label-obs">TOUCHELITE</span>
           </div>
           <svg className="ring-svg" viewBox="0 0 100 100">
             <circle className="ring-bg" cx="50" cy="50" r="45"></circle>
             <circle className="ring-fill" cx="50" cy="50" r="45" style={{ strokeDasharray: '282.7', strokeDashoffset: '101.7' }}></circle>
           </svg>
        </div>
        <div className="dist-legend-obs">
           <div className="legend-item-obs">
               <span className="dot" style={{backgroundColor: '#00E5FF'}}></span> 
               <span>Elite Series</span>
               <span className="legend-val">64%</span>
           </div>
           <div className="legend-item-obs">
               <span className="dot" style={{backgroundColor: '#FF61D2'}}></span> 
               <span>Standard</span>
               <span className="legend-val">28%</span>
           </div>
           <div className="legend-item-obs">
               <span className="dot" style={{backgroundColor: '#8B949E'}}></span> 
               <span>Legacy</span>
               <span className="legend-val">8%</span>
           </div>
        </div>
      </div>
    </div>

    <div className="obsidian-content-row">
      <div className="obsidian-card-panel flex-1">
        <div className="panel-header-obs">
            <h3 className="panel-title-obs">Inventory Critical</h3>
            <Box size={16} color="var(--accent-yellow)" />
        </div>
        <div className="inventory-list-obs">
          <div className="inventory-item-obs">
             <div className="item-labels-obs">
               <h4>Copper Contact Pins</h4>
               <span className="item-count-obs">120 units left</span>
             </div>
             <div className="progress-bar-obs"><div className="progress-fill-obs" style={{width: '20%', backgroundColor: '#FF61D2'}}></div></div>
          </div>
          <div className="inventory-item-obs">
             <div className="item-labels-obs">
               <h4>Tempered Glass Panels (Black)</h4>
               <span className="item-count-obs">450 units left</span>
             </div>
             <div className="progress-bar-obs"><div className="progress-fill-obs" style={{width: '45%', backgroundColor: '#FFB300'}}></div></div>
          </div>
          <div className="inventory-item-obs">
             <div className="item-labels-obs">
               <h4>Capacitive Touch ICs</h4>
               <span className="item-count-obs">890 units left</span>
             </div>
             <div className="progress-bar-obs"><div className="progress-fill-obs" style={{width: '70%', backgroundColor: '#FFB300'}}></div></div>
          </div>
        </div>
      </div>

      <div className="obsidian-card-panel flex-1">
        <div className="panel-header-obs">
            <h3 className="panel-title-obs">Failed QC Telemetry</h3>
            <span className="view-all-obs">VIEW ALL</span>
        </div>
        <div className="qc-list-obs">
           <div className="qc-item-obs red">
              <div className="qc-icon-box-obs">
                 <AlertCircle size={18} />
              </div>
              <div className="qc-text-obs">
                 <h4>Batch #KF-902 Failure</h4>
                 <p>Resonance deviation detected in line 4.</p>
              </div>
              <span className="qc-time-obs">2m ago</span>
           </div>
           <div className="qc-item-obs yellow">
              <div className="qc-icon-box-obs">
                 <Zap size={18} />
              </div>
              <div className="qc-text-obs">
                 <h4>Voltage Surge Incident</h4>
                 <p>Unit 441 exceeded 240V during stress test.</p>
              </div>
              <span className="qc-time-obs">14m ago</span>
           </div>
           <div className="qc-item-obs pink">
              <div className="qc-icon-box-obs">
                 <Info size={18} />
              </div>
              <div className="qc-text-obs">
                 <h4>Seal Integrity Compromised</h4>
                 <p>Moisture ingress detected in IP65 series batch.</p>
              </div>
              <span className="qc-time-obs">1h ago</span>
           </div>
        </div>
      </div>
    </div>
  </div>
);

export default Dashboard;
