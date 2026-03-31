import React from 'react';
import { DollarSign, TrendingUp, TrendingDown, Clock, Search, MoreHorizontal } from 'lucide-react';

const Sales = () => {
    const orders = [
        { id: 'ORD-9912', client: 'Green Homes AI', amount: '$42,000.00', status: 'Payment Pending', date: '2024-03-31', item: 'Elite Touch 4G x 500' },
        { id: 'ORD-9913', client: 'Luxe Hotels NYC', amount: '$12,450.00', status: 'In Production', date: '2024-03-31', item: 'Standard 2G x 250' },
        { id: 'ORD-9914', client: 'Retail Direct', amount: '$1,200.00', status: 'Shipped', date: '2024-03-30', item: 'Elite Touch 4G x 12' },
        { id: 'ORD-9915', client: 'Industrial Hub', amount: '$5,800.00', status: 'Completed', date: '2024-03-30', item: 'Smart Relay 10A x 140' },
    ];

    return (
        <div className="sales-view">
            <div className="header">
                 <div className="title-section">
                    <h1>Sales & Orders</h1>
                    <p>Financial Telemetry & Commercial Activity</p>
                </div>
                <div className="status-badge revenue">
                   <TrendingUp size={14} /> REVENUE: $124K (+14%)
                </div>
            </div>

            <div className="stat-grid">
               <div className="stat-card">
                  <span className="stat-label">GROSS MARGIN</span>
                  <div className="stat-value">64.2%</div>
                  <p className="stat-diff" style={{ color: '#00E676' }}>↗ 1.4% this quarter</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">AVERAGE ORDER VALUE</span>
                  <div className="stat-value">$14,240</div>
                  <p className="stat-diff" style={{ color: '#FF3D00' }}>↘ 5% vs Average</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">OUTSTANDING PAYMENTS</span>
                  <div className="stat-value">$42,900</div>
                  <p className="stat-diff" style={{ color: '#FFB300' }}>⚠️ 8 Invoices past due</p>
               </div>
               <div className="stat-card">
                  <span className="stat-label">CONVERSION RATE</span>
                  <div className="stat-value">22.4%</div>
                  <p className="stat-diff">Standard: 18.0%</p>
               </div>
            </div>

            <div className="card-panel">
                <div className="panel-header">
                    <h3 className="panel-title">Active Orders</h3>
                    <div className="search-mini">
                        <Search size={14} />
                        <input type="text" placeholder="Search order ID..." />
                    </div>
                </div>
                <div className="table-responsive">
                    <table className="orders-table">
                        <thead>
                            <tr>
                                <th>ORDER ID</th>
                                <th>CLIENT</th>
                                <th>ITEMS</th>
                                <th>AMOUNT</th>
                                <th>STATUS</th>
                                <th>DATE</th>
                                <th>ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((o, i) => (
                                <tr key={i}>
                                    <td className="order-id">#{o.id}</td>
                                    <td className="client-name">{o.client}</td>
                                    <td>{o.item}</td>
                                    <td className="amount">{o.amount}</td>
                                    <td><span className={`status-pill ${o.status.toLowerCase().replace(' ', '-')}`}>{o.status}</span></td>
                                    <td className="date">{o.date}</td>
                                    <td><button className="icon-btn"><MoreHorizontal size={14} /></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="content-row">
                 <div className="card-panel">
                    <h3 className="panel-title">Revenue by Region</h3>
                    <div className="region-bars">
                        <div className="region-bar-item">
                            <span className="region-name">NORTH AMERICA</span>
                            <div className="region-progress-bar" style={{ width: '65%' }}></div>
                            <span className="region-percent">65%</span>
                        </div>
                        <div className="region-bar-item">
                            <span className="region-name">EUROPE</span>
                            <div className="region-progress-bar" style={{ width: '22%' }}></div>
                            <span className="region-percent">22%</span>
                        </div>
                        <div className="region-bar-item">
                            <span className="region-name">ASIA PACIFIC</span>
                            <div className="region-progress-bar" style={{ width: '13%' }}></div>
                            <span className="region-percent">13%</span>
                        </div>
                    </div>
                 </div>
            </div>

        </div>
    );
};

export default Sales;
