import React, { useState, useEffect } from 'react';
import { Upload, FileText, Plus, MoreVertical, ChevronLeft, ChevronRight } from 'lucide-react';

const Inventory = () => {
    const [inventory, setInventory] = useState([]);

    useEffect(() => {
        setInventory([
            { name: 'Elite Touch Panel 4G', desc: '4-Gang Capacitive Touch Board', sku: 'TH-4G-WHT', category: 'Finished Goods', price: '$85.00', stock: 142, status: 'IN STOCK', color: '#00E676', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=100' },
            { name: 'Tempered Glass V2', desc: 'Shatter-proof transparent glass', sku: 'GL-V2-CLR', category: 'Raw Materials', price: '$12.50', stock: 12, status: 'LOW STOCK', color: '#FFB300', img: 'https://images.unsplash.com/photo-1590674151745-f0169992d9d1?w=100' },
            { name: 'Smart Relay 10A', desc: 'High-voltage control unit', sku: 'RL-10A-SR', category: 'Electronics', price: '$4.20', stock: 890, status: 'IN STOCK', color: '#00E676', img: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=100' },
            { name: 'Copper Pins', desc: 'Precision contact connectors', sku: 'CP-PIN-78', category: 'Raw Materials', price: '$0.15', stock: 0, status: 'OUT OF STOCK', color: '#FF3D00', img: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=100' },
        ]);
    }, []);

    return (
        <div className="inventory-ledger">
            <div className="header">
                <div className="title-section">
                    <h1>Inventory Ledger</h1>
                    <p>Global Asset Telemetry & Management</p>
                </div>
                <div className="header-actions">
                    <button className="btn-secondary"><Upload size={14} /> BULK UPLOAD</button>
                    <button className="btn-secondary"><FileText size={14} /> REPORT</button>
                    <button className="btn-primary"><Plus size={14} /> ADD PRODUCT</button>
                </div>
            </div>

            <div className="card-panel filters-panel">
               <div className="filters-left">
                  <div className="filter-item">
                     <span className="filter-label">CATEGORY</span>
                     <select className="filter-select"><option>All Categories</option></select>
                  </div>
                  <div className="filter-item">
                     <span className="filter-label">STATUS</span>
                     <select className="filter-select"><option>All Status</option></select>
                  </div>
                  <div className="filter-item">
                     <span className="filter-label">WAREHOUSE LOCATION</span>
                     <select className="filter-select"><option>Global View</option></select>
                  </div>
               </div>
               <button className="reset-btn">RESET ALL</button>
            </div>

            <table className="inventory-table">
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
                            <td className="product-cell">
                                <div className="product-img" style={{ backgroundImage: `url(${p.img})` }}></div>
                                <div className="product-info">
                                    <div className="product-name">{p.name}</div>
                                    <div className="product-desc">{p.desc}</div>
                                </div>
                            </td>
                            <td className="sku-cell">{p.sku}</td>
                            <td><span className="category-tag">{p.category}</span></td>
                            <td className="price-cell">{p.price}</td>
                            <td className="stock-cell">
                                <div className="stock-num">{p.stock}</div>
                                <div className="progress-bar mini"><div className="progress-fill" style={{ width: p.stock > 100 ? '70%' : (p.stock > 0 ? '20%' : '0%'), backgroundColor: p.status === 'IN STOCK' ? '#00E676' : (p.status === 'LOW STOCK' ? '#FFB300' : '#FF3D00') }}></div></div>
                            </td>
                            <td><span className="status-badge-inline" style={{ color: p.color }}>● {p.status}</span></td>
                            <td><button className="action-btn"><MoreVertical size={16} /></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <div className="table-footer">
               <div className="showing-text">SHOWING 1 TO 4 OF 284 ASSETS</div>
               <div className="pagination">
                  <button className="page-btn"><ChevronLeft size={16}/></button>
                  <button className="page-btn active">1</button>
                  <button className="page-btn">2</button>
                  <button className="page-btn">3</button>
                  <span>...</span>
                  <button className="page-btn"><ChevronRight size={16}/></button>
               </div>
            </div>

            <div className="ledger-footer-stats">
               <div className="stat-card minimal">
                  <span className="stat-label">TOTAL VALUATION</span>
                  <div className="stat-value">$1.2M</div>
                  <div className="stat-diff" style={{ color: '#00E676' }}>↗ 12.4% from last quarter</div>
               </div>
               <div className="stat-card minimal">
                  <span className="stat-label">CRITICAL LOW STOCK</span>
                  <div className="stat-value">18</div>
                  <div className="stat-diff" style={{ color: '#FFB300' }}>⏰ Procurement recommended</div>
               </div>
               <div className="stat-card minimal">
                  <span className="stat-label">INCOMING SHIPMENTS</span>
                  <div className="stat-value">06</div>
                  <div className="stat-diff" style={{ color: '#FF61D2' }}>🚚 2 arriving today</div>
               </div>
               <div className="stat-card minimal">
                  <span className="stat-label">SPACE UTILIZATION</span>
                  <div className="stat-value">82%</div>
                  <div className="progress-bar"><div className="progress-fill" style={{ width: '82%', backgroundColor: '#00E5FF' }}></div></div>
               </div>
            </div>
        </div>
    );
};

export default Inventory;
