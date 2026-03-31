import React, { useState } from 'react';
import { Send, PackageCheck, MapPin, Calendar, Hash, MoreHorizontal, Edit2 } from 'lucide-react';

const dispatches = [
  { disp_id: 'DSP-401', order_id: 'ORD-2201', customer: 'Rajesh Industries', product: '2-Module Touch Switch x50', dispatch_date: 'Oct 24, 2025', tracking_no: 'DTDC-9821234', status: 'In Transit' },
  { disp_id: 'DSP-400', order_id: 'ORD-2198', customer: 'Rajesh Industries', product: '4-Module Dimmer Panel x10', dispatch_date: 'Oct 21, 2025', tracking_no: 'BLUEDART-441289', status: 'Delivered' },
  { disp_id: 'DSP-399', order_id: 'ORD-2197', customer: 'Vijay Tech Ltd.',   product: '6-Gang Power Outlet x30',  dispatch_date: '—',           tracking_no: '—',             status: 'Cancelled' },
  { disp_id: 'DSP-398', order_id: 'ORD-2196', customer: 'Meena Electricals', product: 'Fan Regulator Touch x15',  dispatch_date: 'Oct 18, 2025', tracking_no: 'FEDEX-7731200', status: 'Delivered' },
];

export default function Dispatch() {
  const [editId, setEditId] = useState(null);

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Dispatch Management</h1>
          <p className="page-subtitle">APPROVED ORDERS · DISPATCH DATES · TRACKING NUMBERS</p>
        </div>
        <button className="btn-obsidian-primary"><Send size={14} style={{marginRight:6}} />CREATE DISPATCH</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Total Dispatched', value: dispatches.filter(d => d.status !== 'Cancelled').length, color: '#38b2ac' },
          { label: 'In Transit',       value: dispatches.filter(d => d.status === 'In Transit').length, color: '#3498db' },
          { label: 'Delivered',        value: dispatches.filter(d => d.status === 'Delivered').length,  color: '#2ecc71' },
          { label: 'Cancelled',        value: dispatches.filter(d => d.status === 'Cancelled').length,  color: '#e74c3c' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <span className="stat-inline-label">{c.label}</span>
            <span style={{ fontSize: 30, fontWeight: 800, color: c.color }}>{c.value}</span>
          </div>
        ))}
      </div>

      <div className="obsidian-card">
        <h3 className="panel-title-obs mb-20">Dispatch Records</h3>
        <div className="table-container-obs">
          <table className="table-obs">
            <thead><tr>
              <th>DISPATCH ID</th><th>ORDER REF</th><th>CUSTOMER</th><th>PRODUCT</th>
              <th><Calendar size={12} style={{marginRight:4,display:'inline'}} />DISPATCH DATE</th>
              <th><Hash size={12} style={{marginRight:4,display:'inline'}} />TRACKING NO.</th>
              <th>STATUS</th><th>ACTION</th>
            </tr></thead>
            <tbody>
              {dispatches.map(d => (
                <tr key={d.disp_id}>
                  <td style={{ color: '#3182ce', fontWeight: 800 }}>{d.disp_id}</td>
                  <td style={{ fontSize: 13 }}>{d.order_id}</td>
                  <td style={{ fontWeight: 700 }}>{d.customer}</td>
                  <td style={{ fontSize: 12, color: 'var(--text-secondary)', maxWidth: 180 }}>{d.product}</td>
                  <td style={{ fontSize: 13 }}>{d.dispatch_date}</td>
                  <td>
                    {d.tracking_no !== '—' ? (
                      <span style={{ background: '#edf2f7', padding: '4px 10px', borderRadius: 6, fontSize: 12, fontWeight: 700, fontFamily: 'monospace' }}>
                        {d.tracking_no}
                      </span>
                    ) : <span style={{ color: '#a0aec0' }}>—</span>}
                  </td>
                  <td>
                    <span className={`badge-obs ${d.status==='Delivered'?'badge-success':d.status==='In Transit'?'badge-info':'badge-danger'}`}>
                      {d.status}
                    </span>
                  </td>
                  <td>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <button onClick={() => setEditId(d.disp_id === editId ? null : d.disp_id)}
                        style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}>
                        <Edit2 size={13} />
                      </button>
                      <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button>
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
