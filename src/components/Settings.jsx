import { useState } from "react";

function Settings() {
  const [storeName, setStoreName] = useState("My Fashion Store");
  const [email, setEmail] = useState("admin@example.com");
  const [location, setLocation] = useState("Toronto, Canada");
  const [currency, setCurrency] = useState("USD");
  const [notifications, setNotifications] = useState(true);

  const handleSave = (event) => {
    event.preventDefault();

    alert("Settings saved successfully!");
  };

  return (
    <section className="settings-page">

      <div className="page-header">
        <div>
          <h2>Settings</h2>
          <p>Manage your store settings.</p>
        </div>
      </div>

      <form className="settings-form" onSubmit={handleSave}>

        <div className="form-group">
          <label>Store Name</label>

          <input
            type="text"
            value={storeName}
            onChange={(event) => setStoreName(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Admin Email</label>

          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Store Location</label>

          <input
            type="text"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Currency</label>

          <select
            value={currency}
            onChange={(event) => setCurrency(event.target.value)}
          >
            <option value="USD">USD - US Dollar</option>
            <option value="CAD">CAD - Canadian Dollar</option>
            <option value="PKR">PKR - Pakistani Rupee</option>
            <option value="GBP">GBP - British Pound</option>
          </select>
        </div>

        <div className="notification-setting">

          <div>
            <h3>Email Notifications</h3>
            <p>Receive notifications about new orders.</p>
          </div>

          <input
            type="checkbox"
            checked={notifications}
            onChange={(event) => setNotifications(event.target.checked)}
          />

        </div>

        <button type="submit" className="save-btn">
          Save Settings
        </button>

      </form>

    </section>
  );
}

export default Settings;