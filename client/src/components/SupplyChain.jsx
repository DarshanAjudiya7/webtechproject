import React, { useState } from 'react';
import { Plus, Truck, Package, IndianRupee, Edit2, MoreHorizontal } from 'lucide-react';

const vendors = [
  { vendor_id: 'V-001', name: 'Rajkot Wire Co.',       contact: '91234-00001', material: 'Copper Wire',        city: 'Rajkot' },
  { vendor_id: 'V-002', name: 'Gujarat Plastics Ltd.',  contact: '91234-00002', material: 'ABS Plastic Casing', city: 'Surat' },
  { vendor_id: 'V-003', name: 'Ahmedabad PCB Works',   contact: '91234-00003', material: 'PCB Boards',         city: 'Ahmedabad' },
  { vendor_id: 'V-004', name: 'Vadodara Glass Fab',    contact: '91234-00004', material: 'Tempered Glass',     city: 'Baroda' },
];

const purchaseOrders = [
  { po_id: 'PO-881', vendor: 'Rajkot Wire Co.',      material: 'Copper Wire 50m',     cost: 24500, date: 'Oct 24', status: 'Delivered' },
  { po_id: 'PO-880', vendor: 'Gujarat Plastics Ltd.',material: 'ABS Casing x200',     cost: 18000, date: 'Oct 23', status: 'In Transit' },
  { po_id: 'PO-879', vendor: 'Ahmedabad PCB Works',  material: 'PCB Blank x500',      cost: 45000, date: 'Oct 21', status: 'Delivered' },
  { po_id: 'PO-878', vendor: 'Vadodara Glass Fab',   material: 'Temp. Glass Sheets x100',cost: 32000, date: 'Oct 19', status: 'Pending' },
];

export default function SupplyChain() {
  const [tab, setTab] = useState('vendors');

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Supply Chain Management</h1>
          <p className="page-subtitle">VENDOR REGISTRY · PURCHASE ORDERS · MATERIAL TRACKING</p>
        </div>
        <button className="btn-obsidian-primary"><Plus size={14} style={{marginRight:6}} />NEW PURCHASE ORDER</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Active Vendors',    value: vendors.length,                                             color: '#38b2ac' },
          { label: 'Open POs',          value: purchaseOrders.filter(p=>p.status==='Pending').length,      color: '#f1c40f' },
          { label: 'In Transit',        value: purchaseOrders.filter(p=>p.status==='In Transit').length,   color: '#3498db' },
          { label: 'Total Spend (Oct)', value: '₹1.19L',                                                   color: '#9b59b6' },
        ].map(c => (
          <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
            <span className="stat-inline-label">{c.label}</span>
            <span style={{ fontSize: 28, fontWeight: 800, color: c.color }}>{c.value}</span>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['vendors', 'purchase'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '8px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
              background: tab === t ? '#2d3748' : '#edf2f7',
              color: tab === t ? '#fff' : 'var(--text-secondary)' }}>
            {t === 'vendors' ? '🏭 Vendor Registry' : '📦 Purchase Orders'}
          </button>
        ))}
      </div>

      {tab === 'vendors' && (
        <div className="obsidian-card">
          <div className="flex-split mb-20">
            <h3 className="panel-title-obs">Vendor List</h3>
            <button className="btn-obsidian-primary" style={{ fontSize: 12 }}><Plus size={12} style={{marginRight:4}} />ADD VENDOR</button>
          </div>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>VENDOR ID</th><th>NAME</th><th>MATERIAL SUPPLIED</th><th>CITY</th><th>CONTACT</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {vendors.map(v => (
                  <tr key={v.vendor_id}>
                    <td style={{ color: '#3182ce', fontWeight: 800 }}>{v.vendor_id}</td>
                    <td style={{ fontWeight: 700 }}>{v.name}</td>
                    <td><span className="badge-obs badge-info">{v.material}</span></td>
                    <td style={{ color: 'var(--text-secondary)' }}>{v.city}</td>
                    <td style={{ fontSize: 13 }}>{v.contact}</td>
                    <td>
                      <div style={{ display: 'flex', gap: 8 }}>
                        <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><Edit2 size={13} /></button>
                        <button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {tab === 'purchase' && (
        <div className="obsidian-card">
          <h3 className="panel-title-obs mb-20">Purchase Orders</h3>
          <div className="table-container-obs">
            <table className="table-obs">
              <thead><tr>
                <th>PO ID</th><th>VENDOR</th><th>MATERIAL</th><th>COST (₹)</th><th>DATE</th><th>STATUS</th><th>ACTION</th>
              </tr></thead>
              <tbody>
                {purchaseOrders.map(p => (
                  <tr key={p.po_id}>
                    <td style={{ color: '#3182ce', fontWeight: 800 }}>{p.po_id}</td>
                    <td style={{ fontWeight: 700 }}>{p.vendor}</td>
                    <td style={{ fontSize: 13, color: 'var(--text-secondary)' }}>{p.material}</td>
                    <td style={{ fontWeight: 800 }}>₹{p.cost.toLocaleString()}</td>
                    <td style={{ fontSize: 13 }}>{p.date}</td>
                    <td>
                      <span className={`badge-obs ${p.status==='Delivered'?'badge-success':p.status==='In Transit'?'badge-info':'badge-warning'}`}>
                        {p.status}
                      </span>
                    </td>
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
