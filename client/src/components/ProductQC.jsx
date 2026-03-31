import React, { useState } from 'react';
import { Plus, ShieldCheck, ShieldAlert, CheckCircle, AlertTriangle, Edit2, Trash2 } from 'lucide-react';

const products = [
  { id: 'P-001', name: '2-Module Touch Switch',  type: 'Switch',    price: 480,  qcStatus: 'Passed', testDate: 'Oct 24, 2025', result: 'PASS' },
  { id: 'P-002', name: '4-Module Dimmer Panel',  type: 'Dimmer',    price: 1200, qcStatus: 'Failed', testDate: 'Oct 23, 2025', result: 'FAIL' },
  { id: 'P-003', name: 'Fan Regulator Touch',    type: 'Regulator', price: 650,  qcStatus: 'Passed', testDate: 'Oct 22, 2025', result: 'PASS' },
  { id: 'P-004', name: 'Smart Home Hub Unit',    type: 'IoT',       price: 3200, qcStatus: 'Pending',testDate: '—',            result: 'PENDING' },
  { id: 'P-005', name: '6-Gang Power Outlet',    type: 'Outlet',    price: 890,  qcStatus: 'Passed', testDate: 'Oct 20, 2025', result: 'PASS' },
];

export default function ProductQC() {
  const [showForm, setShowForm] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: '', type: '', price: '' });

  const passed  = products.filter(p => p.result === 'PASS').length;
  const failed  = products.filter(p => p.result === 'FAIL').length;
  const pending = products.filter(p => p.result === 'PENDING').length;

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Product & QC Management</h1>
          <p className="page-subtitle">PRODUCT CATALOG · QUALITY CONTROL LOGS · TEST RESULTS</p>
        </div>
        <button className="btn-obsidian-primary" onClick={() => setShowForm(!showForm)}>
          <Plus size={14} style={{marginRight:6}} />ADD PRODUCT
        </button>
      </div>

      {/* Add Product Form */}
      {showForm && (
        <div className="obsidian-card mb-20" style={{ borderLeft: '4px solid #38b2ac' }}>
          <h3 className="panel-title-obs mb-20">New Product Entry</h3>
          <div className="grid-3" style={{ gap: 16 }}>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>PRODUCT NAME</label>
              <input value={newProduct.name} onChange={e => setNewProduct({...newProduct, name: e.target.value})}
                placeholder="e.g. 2-Module Switch"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border-light)', fontSize: 14 }} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>TYPE</label>
              <input value={newProduct.type} onChange={e => setNewProduct({...newProduct, type: e.target.value})}
                placeholder="e.g. Switch, Dimmer…"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border-light)', fontSize: 14 }} />
            </div>
            <div>
              <label style={{ fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)', display: 'block', marginBottom: 6 }}>PRICE (₹)</label>
              <input value={newProduct.price} onChange={e => setNewProduct({...newProduct, price: e.target.value})}
                placeholder="e.g. 480"
                style={{ width: '100%', padding: '10px 14px', borderRadius: 10, border: '1px solid var(--border-light)', fontSize: 14 }} />
            </div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 16 }}>
            <button className="btn-obsidian-primary" onClick={() => setShowForm(false)}>SAVE PRODUCT</button>
            <button onClick={() => setShowForm(false)} style={{ padding: '10px 20px', borderRadius: 10, border: '1px solid var(--border-light)', background: 'none', fontWeight: 700, cursor: 'pointer' }}>Cancel</button>
          </div>
        </div>
      )}

      {/* Stats */}
      <div className="grid-4 mb-20">
        {[
          { label: 'Total Products', value: products.length, color: '#38b2ac' },
          { label: 'QC Passed',      value: passed,          color: '#2ecc71' },
          { label: 'QC Failed',      value: failed,          color: '#e74c3c' },
          { label: 'Pending Test',   value: pending,         color: '#f1c40f' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <span className="stat-inline-label">{c.label}</span>
            <span style={{ fontSize: 30, fontWeight: 800, color: c.color }}>{c.value}</span>
          </div>
        ))}
      </div>

      {/* Product Table */}
      <div className="obsidian-card">
        <h3 className="panel-title-obs mb-20">Product Catalog with QC Status</h3>
        <div className="table-container-obs">
          <table className="table-obs">
            <thead><tr>
              <th>PRODUCT ID</th><th>PRODUCT NAME</th><th>TYPE</th><th>PRICE</th><th>QC STATUS</th><th>TEST DATE</th><th>RESULT</th><th>ACTIONS</th>
            </tr></thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id}>
                  <td style={{ color: '#3182ce', fontWeight: 800 }}>{p.id}</td>
                  <td style={{ fontWeight: 700 }}>{p.name}</td>
                  <td><span className="badge-obs badge-info">{p.type}</span></td>
                  <td style={{ fontWeight: 700 }}>₹{p.price.toLocaleString()}</td>
                  <td>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {p.result === 'PASS'    && <CheckCircle size={14} color="#2ecc71" />}
                      {p.result === 'FAIL'    && <ShieldAlert size={14} color="#e74c3c" />}
                      {p.result === 'PENDING' && <AlertTriangle size={14} color="#f1c40f" />}
                      <span style={{ fontWeight: 700 }}>{p.qcStatus}</span>
                    </div>
                  </td>
                  <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{p.testDate}</td>
                  <td>
                    <span className={`badge-obs ${p.result==='PASS'?'badge-success':p.result==='FAIL'?'badge-danger':'badge-warning'}`}>
                      {p.result}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><Edit2 size={13} /></button>
                      <button style={{ border: 'none', background: '#fff0f0', padding: '6px 8px', borderRadius: 6, cursor: 'pointer', color: '#e74c3c' }}><Trash2 size={13} /></button>
                    </div>
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
