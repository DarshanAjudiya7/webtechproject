import React, { useState } from 'react';
import { Upload, Plus, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const Inventory = () => {
    const [inventory] = useState([
        { name: 'Cortex Core v2', desc: 'High-precision AI Controller', sku: 'SKU-882-X9', category: 'Electronics', price: '$1,240.00', stock: 142, status: 'IN STOCK', statusColor: '#2ecc71', progress: 70, progressColor: '#2ecc71', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100' },
        { name: 'Titanium Drive Gear', desc: 'Grade 5 Aerospace Alloy', sku: 'SKU-241-TR', category: 'Raw Materials', price: '$450.00', stock: 12, status: 'LOW STOCK', statusColor: '#ffc107', progress: 15, progressColor: '#ffc107', img: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=100' },
        { name: 'Optic Sensor Array', desc: 'Lidar-ready IR modules', sku: 'SKU-902-OP', category: 'Precision Tools', price: '$2,800.00', stock: 0, status: 'OUT OF STOCK', statusColor: '#e74c3c', progress: 0, progressColor: '#e74c3c', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100' },
        { name: 'Hydro-Press Valve', desc: 'Pneumatic safety component', sku: 'SKU-551-HV', category: 'Heavy Machinery', price: '$325.00', stock: 42, status: 'IN STOCK', statusColor: '#2ecc71', progress: 30, progressColor: '#ffc107', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=100' },
    ]);

    return (
        <div className="obsidian-view">
            <div className="obsidian-view-header">
                <div className="header-title-section">
                    <h1 className="panel-title-obs" style={{ fontSize: '28px' }}>Inventory Ledger</h1>
                    <p className="view-all-obs">Global Asset Telemetry & Management</p>
                </div>
                <div className="header-actions-obsidian">
                    <button className="btn-obsidian-primary" style={{ marginRight: '10px' }}><Upload size={14} /> BULK UPLOAD</button>
                    <button className="btn-obsidian-primary"><Plus size={14} /> ADD PRODUCT</button>
                </div>
            </div>

            <div className="obsidian-filters-bar">
               <div className="filters-label-group">
                  <span className="filters-title">ACTIVE FILTERS:</span>
               </div>
               <div className="filters-select-group">
                  <div className="filter-select-item">
                     <span>CATEGORY</span>
                     <select><option>All Categories</option></select>
                  </div>
                  <div className="filter-select-item">
                     <span>STATUS</span>
                     <select><option>All Status</option></select>
                  </div>
                  <div className="filter-select-item">
                     <span>WAREHOUSE LOCATION</span>
                     <select><option>Global View</option></select>
                  </div>
               </div>
               <button className="btn-reset-filters">RESET ALL</button>
            </div>

            <div className="obsidian-table-container">
                <table className="obsidian-data-table">
                    <thead>
                        <tr>
                            <th>PRODUCT NAME</th>
                            <th>SKU</th>
                            <th>CATEGORY</th>
                            <th>PRICE</th>
                            <th>STOCK LEVEL</th>
                            <th>STATUS</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {inventory.map((p, i) => (
                            <tr key={i}>
                                <td className="p-cell">
                                    <div className="p-img" style={{ backgroundImage: `url(${p.img})` }}></div>
                                    <div className="p-info">
                                        <div className="p-name">{p.name}</div>
                                        <div className="p-desc">{p.desc}</div>
                                    </div>
                                </td>
                                <td className="sku-cell-obs">{p.sku}</td>
                                <td><span className="category-tag-obs">{p.category}</span></td>
                                <td className="price-cell-obs">{p.price}</td>
                                <td className="stock-cell-obs">
                                    <div className="stock-num-obs">{p.stock}</div>
                                    <div className="stock-progress-obs">
                                       <div className="progress-fill-obs" style={{ width: `${p.progress}%`, backgroundColor: p.progressColor }}></div>
                                    </div>
                                </td>
                                <td><span className="status-badge-obs" style={{ color: p.statusColor }}>● {p.status}</span></td>
                                <td><button className="btn-action-obs"><MoreVertical size={16} /></button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div className="obsidian-table-footer">
               <span className="footer-stats-text">SHOWING 1 TO 4 OF 284 ASSETS</span>
               <div className="obsidian-pagination">
                  <button className="page-nav-btn"><ChevronLeft size={16} /></button>
                  <button className="page-num-btn active">1</button>
                  <button className="page-num-btn">2</button>
                  <button className="page-num-btn">3</button>
                  <span className="page-dots">...</span>
                  <button className="page-nav-btn"><ChevronRight size={16} /></button>
               </div>
            </div>

            <div className="obsidian-ledger-stats">
               <div className="ledger-stat-card">
                  <span className="l-stat-label">TOTAL VALUATION</span>
                  <div className="l-stat-value">$4.2M</div>
                  <div className="l-stat-diff positive">↗ +12.4% from last quarter</div>
               </div>
               <div className="ledger-stat-card">
                  <span className="l-stat-label">CRITICAL LOW STOCK</span>
                  <div className="l-stat-value">18</div>
                  <div className="l-stat-diff alert">⏰ Procurement recommended</div>
               </div>
               <div className="ledger-stat-card">
                  <span className="l-stat-label">INCOMING SHIPMENTS</span>
                  <div className="l-stat-value">06</div>
                  <div className="l-stat-diff info">🚚 2 arriving today</div>
               </div>
               <div className="ledger-stat-card">
                  <span className="l-stat-label">SPACE UTILIZATION</span>
                  <div className="l-stat-value">82%</div>
                  <div className="l-stat-progress">
                    <div className="progress-fill-obs" style={{ width: '82%', backgroundColor: 'var(--accent-cyan)' }}></div>
                  </div>
               </div>
            </div>
        </div>
    );
};

export default Inventory;
