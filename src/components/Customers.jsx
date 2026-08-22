const customers = [
  {
    id: 1,
    name: "Sarah Khan",
    email: "sarah@example.com",
    location: "Toronto, Canada",
    orders: 12,
    spent: "$580.50",
    status: "Active",
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    location: "New York, USA",
    orders: 8,
    spent: "$320.75",
    status: "Active",
  },
  {
    id: 3,
    name: "Emma Wilson",
    email: "emma@example.com",
    location: "London, UK",
    orders: 15,
    spent: "$920.00",
    status: "Active",
  },
  {
    id: 4,
    name: "Ali Ahmed",
    email: "ali@example.com",
    location: "Lahore, Pakistan",
    orders: 3,
    spent: "$145.25",
    status: "Inactive",
  },
  {
    id: 5,
    name: "Maya Brown",
    email: "maya@example.com",
    location: "Vancouver, Canada",
    orders: 20,
    spent: "$1,240.90",
    status: "Active",
  },
];

function Customers() {
  return (
    <section className="customers-page">

      <div className="page-header">
        <div>
          <h2>Customers</h2>
          <p>Manage your store customers.</p>
        </div>
      </div>

      <div className="customers-table-container">

        <table>

          <thead>
            <tr>
              <th>Customer</th>
              <th>Email</th>
              <th>Location</th>
              <th>Orders</th>
              <th>Total Spent</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <tr key={customer.id}>

                <td>{customer.name}</td>

                <td>{customer.email}</td>

                <td>{customer.location}</td>

                <td>{customer.orders}</td>

                <td>{customer.spent}</td>

                <td>
                  <span
                    className={`customer-status ${customer.status.toLowerCase()}`}
                  >
                    {customer.status}
                  </span>
                </td>

              </tr>
            ))}
          </tbody>

        </table>

      </div>

    </section>
  );
}

export default Customers;