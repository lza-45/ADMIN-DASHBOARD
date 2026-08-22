function StatsCard({ title, value, icon }) {
  return (
    <div className="stats-card">
      <div>
        <p className="stats-title">{title}</p>
        <h2>{value}</h2>
      </div>

      <div className="stats-icon">
        {icon}
      </div>
    </div>
  );
}

export default StatsCard;