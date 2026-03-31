import React, { useState } from 'react';
import { CreditCard, TrendingUp, IndianRupee, CheckCircle, Clock, AlertCircle, MoreHorizontal } from 'lucide-react';

const customerPayments = [
  { txn_id: 'TXN-5501', order: 'ORD-2198', customer: 'Rajesh Industries', amount: 12000, status: 'Paid',    date: 'Oct 21' },
  { txn_id: 'TXN-5500', order: 'ORD-2200', customer: 'Meena Electricals',  amount: 13000, status: 'Pending', date: 'Oct 23' },
  { txn_id: 'TXN-5499', order: 'ORD-2201', customer: 'Vijay Tech Ltd.',    amount: 16000, status: 'Paid',    date: 'Oct 24' },
];

const vendorPayments = [
  { pay_id: 'VP-201', po: 'PO-881', vendor: 'Rajkot Wire Co.',     amount: 24500, status: 'Paid',    date: 'Oct 22' },
  { pay_id: 'VP-200', po: 'PO-879', vendor: 'Ahmedabad PCB Works', amount: 45000, status: 'Paid',    date: 'Oct 20' },
  { pay_id: 'VP-199', po: 'PO-878', vendor: 'Vadodara Glass Fab',  amount: 32000, status: 'Pending', date: 'Oct 25' },
  { pay_id: 'VP-198', po: 'PO-880', vendor: 'Gujarat Plastics Ltd.',amount: 18000, status: 'Pending', date: 'Oct 26' },
];

export default function Finance() {
  const [tab, setTab] = useState('customer');

  const totalRevenue  = customerPayments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0);
  const totalPending  = customerPayments.filter(p => p.status === 'Pending').reduce((s, p) => s + p.amount, 0);
  const vendorPaid    = vendorPayments.filter(p => p.status === 'Paid').reduce((s, p) => s + p.amount, 0);
  const vendorPending = vendorPayments.filter(p => p.status === 'Pending').reduce((s, p) => s + p.amount, 0);

  return (
    <div className="obsidian-view">
      <div className="obsidian-view-header">
        <div>
          <h1 className="page-title">Finance & Payment Management</h1>
          <p className="page-subtitle">ACCOUNTS FINANCE · VENDOR PAYMENTS · CUSTOMER TRANSACTIONS</p>
        </div>
        <button className="btn-obsidian-primary"><CreditCard size={14} style={{marginRight:6}} />RECORD PAYMENT</button>
      </div>

      <div className="grid-4 mb-20">
        {[
          { label: 'Revenue Collected', value: `₹${(totalRevenue/1000).toFixed(0)}K`, color: '#2ecc71', icon: TrendingUp },
          { label: 'Customer Pending',  value: `₹${(totalPending/1000).toFixed(0)}K`,  color: '#f1c40f', icon: Clock },
          { label: 'Vendor Paid Out',   value: `₹${(vendorPaid/1000).toFixed(0)}K`,   color: '#3498db', icon: CreditCard },
          { label: 'Vendor Pending',    value: `₹${(vendorPending/1000).toFixed(0)}K`,color: '#e74c3c', icon: AlertCircle },
        ].map(c => {
          const Icon = c.icon;
          return (
            <div key={c.label} className="obsidian-card" style={{ borderTop: `3px solid ${c.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
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

      <div style={{ display: 'flex', gap: 8, marginBottom: 20 }}>
        {['customer', 'vendor'].map(t => (
          <button key={t} onClick={() => setTab(t)}
            style={{ padding: '8px 20px', borderRadius: 10, fontWeight: 700, fontSize: 13, border: 'none', cursor: 'pointer',
              background: tab === t ? '#2d3748' : '#edf2f7',
              color: tab === t ? '#fff' : 'var(--text-secondary)' }}>
            {t === 'customer' ? '💳 Customer Payments' : '🏭 Vendor Payments'}
          </button>
        ))}
      </div>

      <div className="obsidian-card">
        <h3 className="panel-title-obs mb-20">
          {tab === 'customer' ? 'Customer Transaction Ledger' : 'Vendor Payment Ledger'}
        </h3>
        <div className="table-container-obs">
          <table className="table-obs">
            {tab === 'customer' ? (
              <>
                <thead><tr><th>TXN ID</th><th>ORDER REF</th><th>CUSTOMER</th><th>AMOUNT (₹)</th><th>STATUS</th><th>DATE</th><th>ACTION</th></tr></thead>
                <tbody>
                  {customerPayments.map(p => (
                    <tr key={p.txn_id}>
                      <td style={{ color: '#3182ce', fontWeight: 800 }}>{p.txn_id}</td>
                      <td style={{ fontSize: 13 }}>{p.order}</td>
                      <td style={{ fontWeight: 700 }}>{p.customer}</td>
                      <td style={{ fontWeight: 800 }}>₹{p.amount.toLocaleString()}</td>
                      <td><span className={`badge-obs ${p.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{p.status}</span></td>
                      <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{p.date}</td>
                      <td><button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </>
            ) : (
              <>
                <thead><tr><th>PAY ID</th><th>PO REF</th><th>VENDOR</th><th>AMOUNT (₹)</th><th>STATUS</th><th>DUE DATE</th><th>ACTION</th></tr></thead>
                <tbody>
                  {vendorPayments.map(p => (
                    <tr key={p.pay_id}>
                      <td style={{ color: '#3182ce', fontWeight: 800 }}>{p.pay_id}</td>
                      <td style={{ fontSize: 13 }}>{p.po}</td>
                      <td style={{ fontWeight: 700 }}>{p.vendor}</td>
                      <td style={{ fontWeight: 800 }}>₹{p.amount.toLocaleString()}</td>
                      <td><span className={`badge-obs ${p.status === 'Paid' ? 'badge-success' : 'badge-warning'}`}>{p.status}</span></td>
                      <td style={{ color: 'var(--text-secondary)', fontSize: 13 }}>{p.date}</td>
                      <td><button style={{ border: 'none', background: '#f7fafc', padding: '6px 8px', borderRadius: 6, cursor: 'pointer' }}><MoreHorizontal size={13} /></button></td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
