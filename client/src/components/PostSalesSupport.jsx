import React, { useState } from 'react';
import { Headphones, Wrench, MessageSquare, CheckCircle2, Clock, AlertCircle, Plus, MoreHorizontal } from 'lucide-react';

const supportQueries = [
  { q_id: 'QRY-301', customer: 'Meena Electricals',  query: 'Product not responding after installation', handler: 'Dev Rathore',  status: 'Resolved',  date: 'Oct 24' },
  { q_id: 'QRY-300', customer: 'Rajesh Industries',  query: 'Requesting replacement for defective unit',  handler: 'Priya Shah',   status: 'Open',      date: 'Oct 23' },
  { q_id: 'QRY-299', customer: 'Vijay Tech Ltd.',    query: 'Dimmer panel flickers at low brightness',   handler: 'Dev Rathore',  status: 'In Review', date: 'Oct 22' },
];

const repairRequests = [
  { rep_id: 'REP-101', customer: 'Rajesh Industries', product: '4-Module Dimmer Panel', issue: 'Flickering issue', status: 'Under Repair', received: 'Oct 20' },
  { rep_id: 'REP-100', customer: 'Meena Electricals', product: '2-Module Touch Switch', issue: 'No response',       status: 'Repaired',    received: 'Oct 15' },
  { rep_id: 'REP-099', customer: 'Vijay Tech Ltd.',   product: 'Smart Home Hub Unit',   issue: 'Wi-Fi disconnect', status: 'Pending',     received: 'Oct 24' },
];

const statusBadge = { 'Resolved': 'badge-success', 'Open': 'badge-danger', 'In Review': 'badge-warning', 'Under Repair': 'badge-info', 'Repaired': 'badge-success', 'Pending': 'badge-warning' };

export default function PostSalesSupport() {
  const [tab, setTab] = useState('support');

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Post-Sales & Support</h1>
          <p className="page-subtitle">SALES SUPPORT QUERIES · REPAIR TRACKING · RESOLUTION STATUS</p>
        </div>
        <button className="btn-obsidian-primary"><Plus size={14} style={{marginRight:6}} />LOG NEW QUERY</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Open Queries',    value: supportQueries.filter(q=>q.status==='Open').length,          color: '#e74c3c', icon: AlertCircle },
          { label: 'In Review',       value: supportQueries.filter(q=>q.status==='In Review').length,      color: '#f1c40f', icon: Clock },
          { label: 'Resolved',        value: supportQueries.filter(q=>q.status==='Resolved').length,       color: '#2ecc71', icon: CheckCircle2 },
          { label: 'Active Repairs',  value: repairRequests.filter(r=>r.status==='Under Repair').length,   color: '#3498db', icon: Wrench },
        ].map(c => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{ width: 32, height: 32, borderRadius: 8, background: `${c.color}22`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: c.color }}>
                  <Icon size={16} />
                </div>
                <span className="stat-inline-label">{c.label}</span>
              </div>
              <span style={{ fontSize: 28, fontWeight: 800, color: c.color }}>{c.value}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['support', 'repairs'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '8px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
              background: tab === t ? '#2d3748' : '#edf2f7',
              color: tab === t ? '#fff' : 'var(--text-secondary)' }}>
            {t === 'support' ? '💬 Support Queries' : '🔧 Repair Tracker'}
          </button>
        ))}
      </div>

      {tab === 'support' && (
        <div className="obsidian-card">
          <h3 className="panel-title-obs mb-20">Sales Support Query Log</h3>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>QUERY ID</th><th>CUSTOMER</th><th>QUERY</th><th>HANDLED BY</th><th>STATUS</th><th>DATE</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {supportQueries.map(q => (
                  <tr key={q.q_id}>
                    <td style={{ color: '#3182ce', fontWeight: 800 }}>{q.q_id}</td>
                    <td style={{ fontWeight: 700 }}>{q.customer}</td>
                    <td style={{ fontSize: 13, color: 'var(--text-secondary)', maxWidth: 220 }}>{q.query}</td>
                    <td>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div className="avatar-obs" style={{ width: 26, height: 26, backgroundImage: `url(https://api.dicebear.com/7.x/initials/svg?seed=${q.handler})` }} />
                        <span style={{ fontSize: 13, fontWeight: 600 }}>{q.handler}</span>
                      </div>
                    </td>
                    <td><span className={`badge-obs ${statusBadge[q.status]}`}>{q.status}</span></td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{q.date}</td>
                    <td><button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'repairs' && (
        <div className="obsidian-card">
          <h3 className="panel-title-obs mb-20">Repair Request Tracker</h3>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>REPAIR ID</th><th>CUSTOMER</th><th>PRODUCT</th><th>ISSUE</th><th>STATUS</th><th>RECEIVED</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {repairRequests.map(r => (
                  <tr key={r.rep_id}>
                    <td style={{ color: '#3182ce', fontWeight: 800 }}>{r.rep_id}</td>
                    <td style={{ fontWeight: 700 }}>{r.customer}</td>
                    <td style={{ fontSize: 13 }}>{r.product}</td>
                    <td style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{r.issue}</td>
                    <td><span className={`badge-obs ${statusBadge[r.status]}`}>{r.status}</span></td>
                    <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{r.received}</td>
                    <td><button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
