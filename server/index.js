const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Expanded Mock Data
const dashboardStats = {
  revenue: "$124,000",
  activeOrders: 42,
  inventoryHealth: "98%",
  pendingRepairs: 12,
  revenueChange: "+12.4%",
  activeOrdersDetail: "8 Priority express",
  pendingRepairsDetail: "4 High urgency"
};

const inventoryItems = [
  { id: 1, name: 'Cortex Core v2', desc: 'High-precision AI Controller', sku: 'SKU-882-X9', category: 'Electronics', price: 1240, stock: 142, status: 'IN STOCK', color: '#00E676', img: '/product1.png' },
  { id: 2, name: 'Titanium Drive Gear', desc: 'Grade 5 Aerospace Alloy', sku: 'SKU-241-TR', category: 'Raw Materials', price: 450, stock: 12, status: 'LOW STOCK', color: '#FFB300', img: '/product2.png' },
  { id: 3, name: 'Optic Sensor Array', desc: 'Lidar-ready IR modules', sku: 'SKU-902-OP', category: 'Precision Tools', price: 2800, stock: 0, status: 'OUT OF STOCK', color: '#FF3D00', img: '/product1.png' },
  { id: 4, name: 'Hydro-Press Valve', desc: 'Pneumatic safety component', sku: 'SKU-551-HV', category: 'Heavy Machinery', price: 325, stock: 42, status: 'IN STOCK', color: '#00E676', img: '/product2.png' },
];

const qcTelemetry = [
  { id: 'QC-01', type: 'error', label: 'Batch #KF-902 Failure', desc: 'Resonance deviation detected in line 4.', time: '2m ago' },
  { id: 'QC-02', type: 'warning', label: 'Voltage Surge Incident', desc: 'Unit 441 exceeded 240V during stress test.', time: '14m ago' },
  { id: 'QC-03', type: 'info', label: 'Seal Integrity Compromised', desc: 'Moisture ingress detected in IP65 series batch.', time: '1h ago' }
];

const manufacturingLines = [
  { id: 'ALPHA', name: 'Assembly Line A', status: 'ACTIVE', efficiency: '94%', currentBatch: 'BT-2024-01', workerCount: 12 },
  { id: 'BETA', name: 'PCB Solder Line B', status: 'FAULT', efficiency: '0%', currentBatch: 'N/A', workerCount: 0 },
  { id: 'GAMMA', name: 'QC Testing Line C', status: 'ACTIVE', efficiency: '88%', currentBatch: 'BT-2024-02', workerCount: 8 },
  { id: 'DELTA', name: 'Packaging Line D', status: 'IDLE', efficiency: '0%', currentBatch: 'N/A', workerCount: 4 },
];

const activeBatches = [
  { id: 'BT-2024-01', product: 'Elite Switchboard v2', progress: 85, dueDate: '2024-04-10', units: 500 },
  { id: 'BT-2024-02', product: 'Standard Touchboard', progress: 40, dueDate: '2024-04-12', units: 1000 },
  { id: 'BT-2024-03', product: 'Capacitive IC Set', progress: 15, dueDate: '2024-04-15', units: 2500 },
];

// API Routes
app.get('/api/stats', (req, res) => res.json(dashboardStats));
app.get('/api/inventory', (req, res) => res.json(inventoryItems));
app.get('/api/qc', (req, res) => res.json(qcTelemetry));
app.get('/api/manufacturing', (req, res) => res.json({ lines: manufacturingLines, batches: activeBatches }));

app.get('/', (req, res) => res.send('Obsidian Forge API Running...'));

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

