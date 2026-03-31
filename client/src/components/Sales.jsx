import React from 'react';
import { DollarSign, TrendingUp, ShoppingCart, Users, MoreHorizontal } from 'lucide-react';

const orders = [
  { id: '#ORD-9982', customer: 'Rajesh Industries', value: '₹45,280', status: 'Delivered', date: 'Oct 24' },
  { id: '#ORD-9981', customer: 'Meena Electricals',  value: '₹12,400', status: 'Processing', date: 'Oct 23' },
  { id: '#ORD-9980', customer: 'Vijay Tech Ltd.',    value: '₹88,900', status: 'Shipped',  date: 'Oct 23' },
  { id: '#ORD-9979', customer: 'Apollo Tech',        value: '₹4,500',  status: 'Cancelled', date: 'Oct 22' },
];

const statusClass = {
  Delivered: 'badge-success', Processing: 'badge-warning', Shipped: 'badge-info', Cancelled: 'badge-danger',
};

export default function Sales() {
  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Sales Analytics</h1>
          <p className="page-subtitle">REVENUE STREAM & ORDER PIPELINE METRICS</p>
        </div>
        <button className="btn-obsidian-primary">GENERATE REPORT</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Quarterly Revenue', value: '₹12.4L', color: '#38b2ac', icon: DollarSign },
          { label: 'Open Orders',       value: '24',     color: '#9b59b6', icon: ShoppingCart },
          { label: 'New Customers',     value: '12',     color: '#3498db', icon: Users },
          { label: 'Avg Order Value',   value: '₹4,280', color: '#e74c3c', icon: TrendingUp },
        ].map(c => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${c.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color }}>
                  <Icon size={18} />
                </div>
                <span className="stat-inline-label">{c.label}</span>
              </div>
              <span style={{ fontSize: 26, fontWeight: 800, color: c.color }}>{c.value}</span>
            </div>
          );
        })}
      </div>

      <div className="grid-2">
        <div className="obsidian-card">
          <h3 className="panel-title-obs mb-20">Recent Orders</h3>
          <table className="table-obs">
            <thead>
              <tr>
                <th>ORDER ID</th>
                <th>CUSTOMER</th>
                <th>VALUE</th>
                <th>STATUS</th>
                <th>DATE</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, i) => (
                <tr key={i}>
                  <td style={{ color: '#3182ce', fontWeight: 800 }}>{order.id}</td>
                  <td style={{ fontWeight: 600 }}>{order.customer}</td>
                  <td style={{ fontWeight: 700 }}>{order.value}</td>
                  <td><span className={`badge-obs ${statusClass[order.status]}`}>{order.status}</span></td>
                  <td style={{ color: 'var(--text-secondary)' }}>{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="obsidian-card">
          <h3 className="panel-title-obs">Monthly Revenue Chart</h3>
          <div style={{ height: 220, display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', marginTop: 20, padding: '0 10px' }}>
            {[60, 80, 50, 90, 70, 100, 110, 80, 70, 90, 95, 115].map((h, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6 }}>
                <div style={{ height: `${h * 1.8}px`, width: 18, background: i === 6 ? '#38b2ac' : '#e2e8f0', borderRadius: 4, transition: 'all 0.3s' }}></div>
                <span style={{ fontSize: 10, color: 'var(--text-secondary)' }}>{['J','F','M','A','M','J','J','A','S','O','N','D'][i]}</span>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 16 }}>
            <span style={{ fontSize: 16, fontWeight: 800 }}>+12% projected growth</span>
            <p style={{ fontSize: 12, color: 'var(--text-secondary)', marginTop: 4 }}>vs last quarter</p>
          </div>
        </div>
      </div>
    </div>
  );
}
