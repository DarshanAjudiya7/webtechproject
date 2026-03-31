import React, { useState } from 'react';
import { Plus, RefreshCw, Warehouse, AlertTriangle, PackageCheck, MapPin } from 'lucide-react';

const stockItems = [
  { stock_id: 'STK-001', product: '2-Module Touch Switch',  location: 'Warehouse A - Shelf 3', qty: 142, min_qty: 30,  status: 'In Stock'   },
  { stock_id: 'STK-002', product: '4-Module Dimmer Panel',  location: 'Warehouse A - Shelf 7', qty: 12,  min_qty: 20,  status: 'Low Stock'  },
  { stock_id: 'STK-003', product: 'Fan Regulator Touch',    location: 'Warehouse B - Shelf 1', qty: 0,   min_qty: 15,  status: 'Out of Stock'},
  { stock_id: 'STK-004', product: 'Smart Home Hub Unit',    location: 'Warehouse B - Shelf 4', qty: 88,  min_qty: 10,  status: 'In Stock'   },
  { stock_id: 'STK-005', product: '6-Gang Power Outlet',    location: 'Warehouse A - Shelf 2', qty: 47,  min_qty: 25,  status: 'In Stock'   },
];

const warehouses = [
  { name: 'Warehouse A', location: 'Surat Main Plant', items: 3, utilization: 74 },
  { name: 'Warehouse B', location: 'Baroda Depot',     items: 2, utilization: 45 },
];

const statusColor = { 'In Stock': 'badge-success', 'Low Stock': 'badge-warning', 'Out of Stock': 'badge-danger' };

export default function InventoryManagement() {
  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Inventory Management</h1>
          <p className="page-subtitle">REAL-TIME STOCK LEVELS · STORE LOCATIONS · AUTO-UPDATE ON ORDERS</p>
        </div>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn-obsidian-primary" style={{ background: '#edf2f7', color: '#2d3748' }}><RefreshCw size={14} style={{marginRight:6}} />SYNC STOCK</button>
          <button className="btn-obsidian-primary"><Plus size={14} style={{marginRight:6}} />ADD TO STOCK</button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid-4 mb-20">
        {[
          { label: 'Total SKUs',      value: stockItems.length,                                          color: '#38b2ac' },
          { label: 'In Stock',        value: stockItems.filter(s=>s.status==='In Stock').length,         color: '#2ecc71' },
          { label: 'Low Stock Alert', value: stockItems.filter(s=>s.status==='Low Stock').length,        color: '#f1c40f' },
          { label: 'Out of Stock',    value: stockItems.filter(s=>s.status==='Out of Stock').length,     color: '#e74c3c' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <span className="stat-inline-label">{c.label}</span>
            <span style={{ fontSize: 30, fontWeight: 800, color: c.color }}>{c.value}</span>
          </div>
        ))}
      </div>

      {/* Warehouse Overview */}
      <div className="grid-2 mb-20">
        {warehouses.map(w => (
          <div key={w.name} className="obsidian-card">
            <div className="flex-split mb-20">
              <div>
                <h3 style={{ fontWeight: 800 }}>{w.name}</h3>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, color: 'var(--text-secondary)', fontSize: 13 }}>
                  <MapPin size={13} />{w.location}
                </div>
              </div>
              <span className="badge-obs badge-info">{w.items} Products</span>
            </div>
            <div className="flex-split mb-20">
              <span className="stat-inline-label">SPACE UTILIZATION</span>
              <span style={{ fontWeight: 800 }}>{w.utilization}%</span>
            </div>
            <div className="progress-container-obs">
              <div className="progress-bar-obs" style={{ width: `${w.utilization}%`, background: w.utilization > 80 ? '#e74c3c' : w.utilization > 60 ? '#f1c40f' : '#2ecc71' }}></div>
            </div>
          </div>
        ))}
      </div>

      {/* Stock Table */}
      <div className="obsidian-card">
        <div className="flex-split mb-20">
          <h3 className="panel-title-obs">Stock Item Registry</h3>
          <span style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Auto-updated on order confirmation</span>
        </div>
        <div className="table-container-obs">
          <table className="table-obs">
            <thead><tr>
              <th>STOCK ID</th><th>PRODUCT</th><th>LOCATION</th><th>CURRENT QTY</th><th>MIN QTY</th><th>STATUS</th><th>ACTION</th>
            </tr></thead>
            <tbody>
              {stockItems.map(s => (
                <tr key={s.stock_id}>
                  <td style={{ color: '#3182ce', fontWeight: 800 }}>{s.stock_id}</td>
                  <td style={{ fontWeight: 700 }}>{s.product}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{s.location}</td>
                  <td>
                    <span style={{ fontWeight: 800, color: s.qty === 0 ? '#e74c3c' : s.qty < s.min_qty ? '#f1c40f' : '#2ecc71' }}>
                      {s.qty}
                    </span>
                  </td>
                  <td style={{ color: 'var(--text-secondary)' }}>{s.min_qty}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {s.status === 'Low Stock' && <AlertTriangle size={13} color="#f1c40f" />}
                      {s.status === 'In Stock' && <PackageCheck size={13} color="#2ecc71" />}
                      <span className={`badge-obs ${statusColor[s.status]}`}>{s.status}</span>
                    </div>
                  </td>
                  <td>
                    <button className="btn-obsidian-primary" style={{ fontSize: 11, padding: '6px 12px' }}>UPDATE</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
