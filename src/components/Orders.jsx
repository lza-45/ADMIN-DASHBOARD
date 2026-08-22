const orders = [
  {
    id: "#1001",
    customer: "Sarah Khan",
    product: "Summer Dress",
    amount: "$49.99",
    status: "Completed",
  },
  {
    id: "#1002",
    customer: "John Smith",
    product: "Casual Shirt",
    amount: "$29.99",
    status: "Pending",
  },
  {
    id: "#1003",
    customer: "Emma Wilson",
    product: "Handbag",
    amount: "$79.99",
    status: "Shipped",
  },
  {
    id: "#1004",
    customer: "Ali Ahmed",
    product: "Sneakers",
    amount: "$89.99",
    status: "Completed",
  },
  {
    id: "#1005",
    customer: "Maya Brown",
    product: "Jacket",
    amount: "$119.99",
    status: "Cancelled",
  },
];

function Orders() {
  return (
    <section className="orders-page">

      <div className="page-header">
        <div>
          <h2>Orders</h2>
          <p>Manage all customer orders.</p>
        </div>
      </div>

      <div className="orders-table-container">

        <table>

          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Product</th>
              <th>Amount</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>

                <td>{order.id}</td>

                <td>{order.customer}</td>

                <td>{order.product}</td>

                <td>{order.amount}</td>

                <td>
                  <span
                    className={`status ${order.status
                      .toLowerCase()
                      .replaceAll(" ", "-")}`}
                  >
                    {order.status}
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

export default Orders;