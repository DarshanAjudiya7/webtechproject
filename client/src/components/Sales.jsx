import React from 'react';
import { Search, Calendar, ChevronLeft, ChevronRight, FileOutput, MoreVertical } from 'lucide-react';

const Sales = () => {
    const orders = [
        { id: '#ORD-99210', customer: 'Apex Logistics Corp.', initials: 'AL', timestamp: 'Oct 24, 2023 | 14:32', value: '$12,450.00', status: 'PROCESSING', statusColor: '#00E5FF', progress: 45 },
        { id: '#ORD-99198', customer: 'NeoTech Systems', initials: 'NT', timestamp: 'Oct 23, 2023 | 09:15', value: '$8,120.45', status: 'PENDING', statusColor: '#FFB300', progress: 15 },
        { id: '#ORD-99185', customer: 'Sinter Industries', initials: 'SI', timestamp: 'Oct 22, 2023 | 16:45', value: '$45,900.00', status: 'DELIVERED', statusColor: '#00E676', progress: 100 },
        { id: '#ORD-99172', customer: 'Heavy Vulcan Foundry', initials: 'HV', timestamp: 'Oct 21, 2023 | 11:20', value: '$2,300.12', status: 'SHIPPED', statusColor: '#00E5FF', progress: 75 },
    ];

    return (
        <div className="obsidian-view">
            <div className="obsidian-view-header">
                 <div className="header-title-section">
                    <h1>Order Management</h1>
                    <p>MONITORING REAL-TIME PROCUREMENT CYCLES AND FULFILLMENT TELEMETRY ACROSS ALL INDUSTRIAL SECTORS.</p>
                </div>
                <button className="btn-obsidian-secondary"><FileOutput size={16} /> EXPORT MANIFEST</button>
            </div>

            <div className="obsidian-filters-bar order-filters">
                <div className="search-group-obs">
                    <Search size={16} />
                    <input type="text" placeholder="Search by Order ID or Customer..." />
                </div>
                <div className="filter-group-obs">
                   <div className="filter-item-obs">
                      <span>STATUS FILTER</span>
                      <select><option>All Statuses</option></select>
                   </div>
                   <div className="filter-item-obs">
                      <span>DATE RANGE</span>
                      <div className="date-input-obs">
                         <input type="text" value="mm/dd/yyyy" readOnly />
                         <span>to</span>
                         <input type="text" value="mm/dd/yyyy" readOnly />
                         <Calendar size={14} />
                      </div>
                   </div>
                </div>
            </div>

            <div className="obsidian-table-container">
                <table className="obsidian-data-table sales-table">
                   <thead>
                      <tr>
                         <th>ORDER ID</th>
                         <th>CUSTOMER ENTITY</th>
                         <th>TIMESTAMP</th>
                         <th>NET VALUE</th>
                         <th>FULFILLMENT STATUS</th>
                         <th>ACTION</th>
                      </tr>
                   </thead>
                   <tbody>
                      {orders.map((o, i) => (
                         <tr key={i}>
                            <td className="order-id-cell">{o.id}</td>
                            <td className="customer-cell">
                               <div className="customer-avatar" style={{ backgroundColor: `rgba(255, 255, 255, 0.05)`, border: `1px solid rgba(255, 255, 255, 0.1)` }}>{o.initials}</div>
                               <span className="customer-name-text">{o.customer}</span>
                            </td>
                            <td className="timestamp-cell">{o.timestamp}</td>
                            <td className="value-cell">{o.value}</td>
                            <td className="status-cell">
                               <div className="status-viz">
                                  <div className="status-progress-circle">
                                     <svg viewBox="0 0 36 36">
                                        <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#222" strokeWidth="2.5" />
                                        <path className="circle-fill" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke={o.statusColor} strokeWidth="2.5" strokeDasharray={`${o.progress}, 100`} />
                                     </svg>
                                  </div>
                                  <span className="status-text-obs" style={{ color: o.statusColor }}>{o.status}</span>
                               </div>
                            </td>
                            <td><button className="btn-action-obs"><MoreVertical size={16} /></button></td>
                         </tr>
                      ))}
                   </tbody>
                </table>
            </div>

            <div className="obsidian-table-footer">
               <span className="footer-stats-text">Showing 1 to 4 of 128 orders</span>
               <div className="obsidian-pagination">
                  <button className="page-nav-btn"><ChevronLeft size={16} /></button>
                  <button className="page-num-btn active">1</button>
                  <button className="page-num-btn">2</button>
                  <button className="page-num-btn">3</button>
                  <span className="page-dots">...</span>
                  <button className="page-num-btn">12</button>
                  <button className="page-nav-btn"><ChevronRight size={16} /></button>
               </div>
            </div>

            <div className="obsidian-ledger-stats">
               <div className="ledger-stat-card flex-between">
                  <div className="stat-group-obs">
                     <span className="l-stat-label">AVG CYCLE TIME</span>
                     <div className="l-stat-value">1.4 <span className="unit-text">days</span></div>
                  </div>
               </div>
               <div className="ledger-stat-card flex-between">
                  <div className="stat-group-obs">
                     <span className="l-stat-label">GLOBAL ORDER VOLUME</span>
                     <div className="l-stat-value">1,204 <span className="l-stat-diff positive">↗ +12%</span></div>
                  </div>
                  <div className="mini-chart-bars-obs">
                    {[10, 30, 20, 40, 60, 100, 40].map((h, i) => (
                      <div key={i} className="mini-bar-obs" style={{ height: `${h}%`, backgroundColor: i === 5 ? 'var(--accent-cyan)' : 'rgba(255, 255, 255, 0.1)' }}></div>
                    ))}
                  </div>
               </div>
            </div>
        </div>
    );
};

export default Sales;
