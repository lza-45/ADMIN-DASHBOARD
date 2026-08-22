import { useEffect, useState } from "react";
import { supabase } from "../supabase";

function Products() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const [editingProduct, setEditingProduct] = useState(null);

  // FETCH PRODUCTS
  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .order("id", { ascending: true });

    if (error) {
      console.log("Error fetching products:", error);
      return;
    }

    setProducts(data || []);
  };

  // LOAD PRODUCTS
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);

      await fetchProducts();

      setLoading(false);
    };

    loadProducts();
  }, []);

  // DELETE PRODUCT
  const deleteProduct = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?"
    );

    if (!confirmDelete) {
      return;
    }

    const { error } = await supabase
      .from("products")
      .delete()
      .eq("id", id);

    if (error) {
      console.log("Error deleting product:", error);
      alert("Error deleting product");
      return;
    }

    alert("Product deleted successfully");

    fetchProducts();
  };

  // OPEN EDIT FORM
  const handleEdit = (product) => {
    setEditingProduct({
      id: product.id,
      name: product.name || "",
      category: product.category || "",
      price: product.price || "",
    });
  };

  // UPDATE PRODUCT
  const handleUpdate = async (e) => {
    e.preventDefault();

    const { error } = await supabase
      .from("products")
      .update({
        name: editingProduct.name,
        category: editingProduct.category,
        price: Number(editingProduct.price),
      })
      .eq("id", editingProduct.id);

    if (error) {
      console.log("Error updating product:", error);
      alert("Error updating product");
      return;
    }

    alert("Product updated successfully");

    setEditingProduct(null);

    fetchProducts();
  };

  // SEARCH PRODUCTS
  const filteredProducts = products.filter((product) =>
    product.name
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <div className="products-page">

      {/* PAGE TITLE */}

      <h1>Products</h1>

      {/* SEARCH */}

      <div className="products-top">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

      </div>

      {/* PRODUCTS TABLE */}

      {loading ? (

        <p>Loading products...</p>

      ) : (

        <div className="table-container">

          <table className="products-table">

            <thead>

              <tr>
                <th>ID</th>
                <th>Product Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Actions</th>
              </tr>

            </thead>

            <tbody>

              {filteredProducts.length === 0 ? (

                <tr>
                  <td colSpan="5">
                    No products found
                  </td>
                </tr>

              ) : (

                filteredProducts.map((product) => (

                  <tr key={product.id}>

                    <td>
                      {product.id}
                    </td>

                    <td>
                      {product.name}
                    </td>

                    <td>
                      {product.category}
                    </td>

                    <td>
                      ${product.price}
                    </td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(product)}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => deleteProduct(product.id)}
                      >
                        Delete
                      </button>

                    </td>

                  </tr>

                ))

              )}

            </tbody>

          </table>

        </div>

      )}

      {/* EDIT PRODUCT POPUP */}

      {editingProduct && (

        <div className="edit-overlay">

          <div className="edit-box">

            <h2>Edit Product</h2>

            <form onSubmit={handleUpdate}>

              {/* PRODUCT NAME */}

              <label>
                Product Name
              </label>

              <input
                type="text"
                value={editingProduct.name}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    name: e.target.value,
                  })
                }
                required
              />

              {/* CATEGORY */}

              <label>
                Category
              </label>

              <input
                type="text"
                value={editingProduct.category}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    category: e.target.value,
                  })
                }
                required
              />

              {/* PRICE */}

              <label>
                Price
              </label>

              <input
                type="number"
                value={editingProduct.price}
                onChange={(e) =>
                  setEditingProduct({
                    ...editingProduct,
                    price: e.target.value,
                  })
                }
                required
              />

              {/* BUTTONS */}

              <div className="edit-buttons">

                <button
                  type="submit"
                  className="save-btn"
                >
                  Save Changes
                </button>

                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setEditingProduct(null)}
                >
                  Cancel
                </button>

              </div>

            </form>

          </div>

        </div>

      )}

    </div>
  );
}

export default Products;