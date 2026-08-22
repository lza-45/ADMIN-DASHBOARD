import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const salesData = [
  { month: "Jan", sales: 4000 },
  { month: "Feb", sales: 5200 },
  { month: "Mar", sales: 4800 },
  { month: "Apr", sales: 6500 },
  { month: "May", sales: 7200 },
  { month: "Jun", sales: 8500 },
];

function SalesChart() {
  return (
    <div className="sales-section">

      <h2>Sales Overview</h2>

      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={salesData}>

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis dataKey="month" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="sales"
              stroke="#2563eb"
              strokeWidth={3}
            />

          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
}

export default SalesChart;