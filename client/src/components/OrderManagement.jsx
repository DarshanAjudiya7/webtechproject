import React, { useState } from 'react';
import { Plus, ShoppingCart, Clock, CheckCircle, XCircle, Truck, Edit2, MoreHorizontal } from 'lucide-react';

const orders = [
  { order_id: 'ORD-2201', cust: 'Rajesh Industries', product: '2-Module Touch Switch', qty: 50,  total: 24000, status: 'Dispatched', date: 'Oct 24' },
  { order_id: 'ORD-2200', cust: 'Meena Electricals',  product: 'Fan Regulator Touch',  qty: 20,  total: 13000, status: 'Processing', date: 'Oct 23' },
  { order_id: 'ORD-2199', cust: 'Vijay Tech Ltd.',    product: 'Smart Home Hub Unit',  qty: 5,   total: 16000, status: 'Pending',    date: 'Oct 23' },
  { order_id: 'ORD-2198', cust: 'Rajesh Industries',  product: '4-Module Dimmer Panel',qty: 10,  total: 12000, status: 'Delivered',  date: 'Oct 21' },
  { order_id: 'ORD-2197', cust: 'Vijay Tech Ltd.',    product: '6-Gang Power Outlet',  qty: 30,  total: 26700, status: 'Cancelled',  date: 'Oct 20' },
];

const statusColor   = { 'Pending': 'badge-warning', 'Processing': 'badge-info', 'Dispatched': 'badge-info', 'Delivered': 'badge-success', 'Cancelled': 'badge-danger' };
const statusIcon    = { 'Pending': Clock, 'Processing': ShoppingCart, 'Dispatched': Truck, 'Delivered': CheckCircle, 'Cancelled': XCircle };

export default function OrderManagement() {
  const [filter, setFilter] = useState('All');
  const statuses = ['All', 'Pending', 'Processing', 'Dispatched', 'Delivered', 'Cancelled'];
  const filtered = filter === 'All' ? orders : orders.filter(o => o.status === filter);

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Order Management</h1>
          <p className="page-subtitle">CUSTOMER ORDERS · ORDER DETAILS · LIVE STATUS TRACKING</p>
        </div>
        <button className="btn-obsidian-primary"><Plus size={14} style={{marginRight:6}} />NEW ORDER</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Total Orders',     value: orders.length,                                          color: '#38b2ac' },
          { label: 'Pending',          value: orders.filter(o=>o.status==='Pending').length,          color: '#f1c40f' },
          { label: 'In Progress',      value: orders.filter(o=>['Processing','Dispatched'].includes(o.status)).length, color: '#3498db' },
          { label: 'Delivered',        value: orders.filter(o=>o.status==='Delivered').length,        color: '#2ecc71' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <span className="stat-inline-label">{c.label}</span>
            <span style={{ fontSize: 30, fontWeight: 800, color: c.color }}>{c.value}</span>
          </div>
        ))}
      </div>

      {/* Filter Chips */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 20, flexWrap: 'wrap' }}>
        {statuses.map(s => (
          <button key={s} onClick={() => setFilter(s)}
            style={{ padding: '6px 16px', borderRadius: 20, fontWeight: 700, fontSize: 12, border: 'none', cursor: 'pointer',
              background: filter === s ? '#2d3748' : '#edf2f7',
              color: filter === s ? '#fff' : 'var(--text-secondary)' }}>
            {s}
          </button>
        ))}
      </div>

      <div className="obsidian-card">
        <div className="flex-split mb-20">
          <h3 className="panel-title-obs">Order Registry</h3>
          <span style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{filtered.length} orders shown</span>
        </div>
        <div className="table-container-obs">
          <table className="table-obs">
            <thead><tr>
              <th>ORDER ID</th><th>CUSTOMER</th><th>PRODUCT</th><th>QTY</th><th>TOTAL (₹)</th><th>DATE</th><th>STATUS</th><th>ACTION</th>
            </tr></thead>
            <tbody>
              {filtered.map(o => {
                const Icon = statusIcon[o.status];
                return (
                  <tr key={o.order_id}>
                    <td style={{ color: '#3182ce', fontWeight: 800 }}>{o.order_id}</td>
                    <td style={{ fontWeight: 700 }}>{o.cust}</td>
                    <td style={{ fontSize: 13 }}>{o.product}</td>
                    <td style={{ fontWeight: 700 }}>{o.qty}</td>
                    <td style={{ fontWeight: 800 }}>₹{o.total.toLocaleString()}</td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{o.date}</td>
                    <td>
                      <span className={`badge-obs ${statusColor[o.status]}`} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                        <Icon size={11} /> {o.status}
                      </span>
                    </td>
                    <td>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><Edit2 size={13} /></button>
                        <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
