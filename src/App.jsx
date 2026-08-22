import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Orders from "./components/Orders";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import OrdersTable from "./components/OrdersTable";
import SalesChart from "./components/SalesChart";
import Products from "./components/Products";
import Customers from "./components/Customers";
import Analytics from "./components/Analytics";
import Settings from "./components/Settings";


function Dashboard() {
  return (
    <section className="dashboard-content">

      <h2>Welcome back, Admin! 👋</h2>
      <p>Here's what's happening with your store today.</p>

      {/* Statistics Cards */}
      <div className="stats-container">

        <StatsCard
          title="Total Sales"
          value="$24,580"
          icon="💰"
        />

        <StatsCard
          title="Total Orders"
          value="342"
          icon="🛒"
        />

        <StatsCard
          title="Customers"
          value="1,240"
          icon="👥"
        />

        <StatsCard
          title="Products"
          value="86"
          icon="📦"
        />

      </div>

      {/* Sales Chart */}
      <SalesChart />

      {/* Recent Orders */}
      <OrdersTable />

    </section>
  );
}

function App() {
  return (
    <BrowserRouter>

      <div className="app">

        <Sidebar />

        <main className="main-content">

          <Navbar />

          <Routes>

  <Route
    path="/"
    element={<Navigate to="/dashboard" />}
  />

  <Route
    path="/dashboard"
    element={<Dashboard />}
  />

  <Route
    path="/products"
    element={<Products />}
  />

  <Route
    path="/orders"
    element={<Orders />}
  />
  <Route
  path="/customers"
  element={<Customers />}
/>
<Route
  path="/analytics"
  element={<Analytics />}
/>
<Route
path="/settings"
element={<Settings/>}
/>

</Routes>

        </main>

      </div>

    </BrowserRouter>
  );
}

export default App;