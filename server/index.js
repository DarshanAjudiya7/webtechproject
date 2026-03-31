const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Mock Data
const inventory = [
  { name: 'Cortex Core v2', desc: 'High-precision AI Controller', sku: 'SKU-882-X9', category: 'Electronics', price: '$1,240.00', stock: 142, status: 'IN STOCK', statusColor: '#00E676', progress: 70, progressColor: '#00E676', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=100' },
  { name: 'Titanium Drive Gear', desc: 'Grade 5 Aerospace Alloy', sku: 'SKU-241-TR', category: 'Raw Materials', price: '$450.00', stock: 12, status: 'LOW STOCK', statusColor: '#FFB300', progress: 15, progressColor: '#FF61D2', img: 'https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=100' },
  { name: 'Optic Sensor Array', desc: 'Lidar-ready IR modules', sku: 'SKU-902-OP', category: 'Precision Tools', price: '$2,800.00', stock: 0, status: 'OUT OF STOCK', statusColor: '#FF3D00', progress: 0, progressColor: '#FF3D00', img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=100' },
];

const dashboardStats = {
  revenue: "$124,000",
  orders: 42,
  inventoryHealth: "98%",
  repairs: 12
};

app.get('/api/inventory', (req, res) => res.json(inventory));
app.get('/api/stats', (req, res) => res.json(dashboardStats));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
