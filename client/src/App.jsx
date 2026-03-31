import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Dashboard from './components/Dashboard';
import Inventory from './components/Inventory';
import Manufacturing from './components/Manufacturing';
import QualityControl from './components/QualityControl';
import Sales from './components/Sales';
import Staff from './components/Staff';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'inventory':
        return <Inventory />;
      case 'manufacturing':
        return <Manufacturing />;
      case 'quality':
        return <QualityControl />;
      case 'sales':
        return <Sales />;
      case 'staff':
        return <Staff />;
      default:
        return <Dashboard />;
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
