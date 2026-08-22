import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const analyticsData = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6500 },
  { month: "May", revenue: 7200 },
  { month: "Jun", revenue: 8500 },
  { month: "Jul", revenue: 9200 },
];

function Analytics() {
  return (
    <section className="analytics-page">

      <div className="page-header">
        <div>
          <h2>Analytics</h2>
          <p>Track your store performance.</p>
        </div>
      </div>

      {/* Analytics Cards */}

      <div className="analytics-cards">

        <div className="analytics-card">
          <p>Total Revenue</p>
          <h2>$46,280</h2>
          <span>↑ 12.5% from last month</span>
        </div>

        <div className="analytics-card">
          <p>Average Order</p>
          <h2>$67.78</h2>
          <span>↑ 8.2% from last month</span>
        </div>

        <div className="analytics-card">
          <p>Conversion Rate</p>
          <h2>4.8%</h2>
          <span>↑ 2.4% from last month</span>
        </div>

      </div>

      {/* Revenue Chart */}

      <div className="analytics-chart">

        <h2>Revenue Overview</h2>

        <div className="analytics-chart-container">

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={analyticsData}>

              <CartesianGrid strokeDasharray="3 3" />

              <XAxis dataKey="month" />

              <YAxis />

              <Tooltip />

              <Line
                type="monotone"
                dataKey="revenue"
                stroke="#2563eb"
                strokeWidth={3}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </section>
  );
}

export default Analytics;