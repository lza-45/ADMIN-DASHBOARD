import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">

      <h2>AdminPanel</h2>

      <ul>

        <li>
          <NavLink to="/dashboard">
            🏠 Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="/products">
            📦 Products
          </NavLink>
        </li>

        <li>
          <NavLink to="/orders">
            🛒 Orders
          </NavLink>
        </li>

        <li>
          <NavLink to="/customers">
            👥 Customers
          </NavLink>
        </li>

        <li>
          <NavLink to="/analytics">
            📊 Analytics
          </NavLink>
        </li>

        <li>
          <NavLink to="/settings">
            ⚙️ Settings
          </NavLink>
        </li>

      </ul>

    </aside>
  );
}

export default Sidebar;