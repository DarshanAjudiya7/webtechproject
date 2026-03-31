import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import StaffManagement from './components/StaffManagement';
import ProductQC from './components/ProductQC';
import SupplyChain from './components/SupplyChain';
import InventoryManagement from './components/InventoryManagement';
import OrderManagement from './components/OrderManagement';
import Finance from './components/Finance';
import Dispatch from './components/Dispatch';
import PostSalesSupport from './components/PostSalesSupport';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':   return <Dashboard name="Admin" />;
      case 'staff':       return <StaffManagement />;
      case 'products':    return <ProductQC />;
      case 'supplychain': return <SupplyChain />;
      case 'inventory':   return <InventoryManagement />;
      case 'orders':      return <OrderManagement />;
      case 'finance':     return <Finance />;
      case 'dispatch':    return <Dispatch />;
      case 'support':     return <PostSalesSupport />;
      default:            return <Dashboard name="Admin" />;
    }
  };

  return (
    <div className="dashboard-container">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="main-wrapper">
        <Topbar />
        <main className="main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
