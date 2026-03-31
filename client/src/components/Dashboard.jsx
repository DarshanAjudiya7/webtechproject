import React, { useState, useEffect } from 'react';
import { 
  DollarSign, 
  ShoppingCart, 
  Box, 
  Wrench, 
  AlertCircle, 
  Zap, 
  Info,
  Calendar,
  ChevronRight,
  Edit3
} from 'lucide-react';

const StatCard = ({ label, value, diff, icon: Icon, color, negative }) => (
  <div className="stat-card-base">
    <div className="stat-card-header">
      <span className="stat-label-text">{label}</span>
      <div className="stat-card-icon-box" style={{ color }}><Icon size={18} /></div>
    </div>
    <div className="stat-card-body">
      <h3 className="stat-value-text">{value}</h3>
      <div className={`stat-diff-text ${negative ? 'negative' : 'positive'}`}>
        <span>{diff}</span>
      </div>
    </div>
  </div>
);

const Dashboard = ({ name }) => {
  // Use local mock data instead of server
  const [stats] = useState({
    revenue: "$12,896",
    orders: "1,874",
    inventoryHealth: "75%",
    repairs: "1,204"
  });

  return (
  <div className="dashboard-obsidian">
    <div className="obsidian-view-header">
      <h1 className="panel-title-obs" style={{ fontSize: '28px' }}>Dashboard</h1>
      <div className="view-all-obs">Thursday, July 2</div>
    </div>

    <div className="obsidian-stat-grid">
      <StatCard label="Total Revenue" value={stats.revenue} diff="↘ 3.47%" color="#38b2ac" icon={DollarSign} negative />
      <StatCard label="Total Expense" value="$6,886" diff="↘ -3.47%" color="#38b2ac" icon={ShoppingCart} negative />
      <StatCard label="Total Reservations" value={stats.orders} diff="↗ +2.54%" color="#2d3748" icon={Box} />
      <StatCard label="Occupied Table" value={stats.inventoryHealth} diff="↘ -2.37%" color="#38b2ac" icon={Wrench} negative />
    </div>

    <div className="obsidian-content-row">
      <div className="obsidian-card-panel">
        <div className="panel-header-obs">
            <h3 className="panel-title-obs">Current Reservations</h3>
            <span className="view-all-obs">View All</span>
        </div>
        <div className="qc-list-obs">
           {[
             { name: 'Michelle Rivera', time: '17:40', party: '4/4', p: '4 People', status: 'Confirmed' },
             { name: 'Arlene McCoy', time: '17:40', party: '1/3', p: '3 People', status: 'Confirmed' },
             { name: 'Savannah Nguyen', time: '17:40', party: '4/5', p: '5 People', status: 'Confirmed' }
           ].map((item, i) => (
             <div key={i} className="qc-item-obs">
                <div className="qc-avatar-obs" style={{ backgroundImage: `url(https://api.dicebear.com/7.x/avataaars/svg?seed=${item.name})` }}></div>
                <div className="qc-info-obs">
                   <h4>{item.name}</h4>
                   <p>{item.time} • {item.party} • {item.p}</p>
                </div>
                <span className="qc-status-pill confirmed">{item.status}</span>
                <Edit3 size={14} style={{ color: '#718096', marginLeft: '12px' }} />
             </div>
           ))}
        </div>
      </div>
      
      <div className="obsidian-card-panel">
        <h3 className="panel-title-obs">Average Check Size (USD)</h3>
        <div className="chart-container-obs">
            <div className="obsidian-chart-placeholder" style={{ height: '220px', alignItems: 'flex-end', justifyContent: 'space-around' }}>
               {[40, 60, 30, 80, 50, 90, 70].map((h, i) => (
                 <div key={i} className="bar-wrapper-obs" style={{ width: '12px', background: 'linear-gradient(to bottom, #9b59b6, rgba(155, 89, 182, 0.1))', height: `${h}%`, borderRadius: '6px' }}></div>
               ))}
            </div>
        </div>
      </div>
    </div>

    <div className="obsidian-content-row">
      <div className="obsidian-card-panel">
        <h3 className="panel-title-obs">Reservations Per Day</h3>
        <div className="chart-container-obs">
           <div className="chart-bars-obs" style={{ gap: '12px', padding: '0 20px' }}>
              {[80, 40, 100, 60, 90, 50, 70].map((h, i) => (
                <div key={i} className="bar-obs" style={{ height: `${h}%`, width: '18px', background: '#38b2ac', opacity: 0.8, borderRadius: '4px' }}></div>
              ))}
           </div>
        </div>
      </div>

      <div className="obsidian-card-panel">
        <h3 className="panel-title-obs">Most Popular Menu Items</h3>
        <div className="qc-list-obs" style={{ marginTop: '20px' }}>
           {[
             { name: 'Grilled Salmon With Lemon', price: '$55', rev: '4,500$' },
             { name: 'Pad Thai With Chicken And Shrimp', price: '$44', rev: '4,500$' },
             { name: 'Lobster Bisque With Garlic Butter', price: '$33', rev: '4,500$' }
           ].map((item, i) => (
             <div key={i} className="qc-item-obs">
                <div className="qc-avatar-obs" style={{ backgroundImage: `url(https://source.unsplash.com/random/100x100?food&${i})`, borderRadius: '10px' }}></div>
                <div className="qc-info-obs">
                   <h4>{item.name}</h4>
                </div>
                <div style={{ textAlign: 'right' }}>
                   <div style={{ fontWeight: 700 }}>{item.price}</div>
                   <div style={{ fontSize: '12px', color: '#718096' }}>{item.rev}</div>
                </div>
             </div>
           ))}
        </div>
      </div>
    </div>
  </div>
  );
};

export default Dashboard;
