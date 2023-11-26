import { Link } from "react-router-dom";
import {
  addDoc,
  collection,
  doc,
  getFirestore,
  writeBatch,
} from "firebase/firestore";
import { useState } from "react";
import { Form } from "react-bootstrap";

import { useCartContext } from "../../contexts/CartContext";
import { Loading } from "../Loading/Loading";

export const CartContainer = () => {
  const { cartList, resetCart, totalPrice, removeProduct } = useCartContext();
  const [orderId, setorderId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    repeatEmail: "",
  });

  const handleOnChange = (evt) => {
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  };

  const createOrder = () => {
    if (
      formData.name != "" &&
      formData.phone != "" &&
      formData.email != "" &&
      formData.repeatEmail != ""
    ) {
      if (formData.email === formData.repeatEmail) {
        const order = {};
        order.buyer = formData;
        order.items = cartList.map(({ id, price, title, cant, stock }) => ({
          id: id,
          price: price,
          title: title,
          cant: cant,
          stock: stock,
        }));
        order.total = totalPrice();
        order.date = new Date();

        const dbFirestore = getFirestore();
        const queryCollection = collection(dbFirestore, "orders");

        addDoc(queryCollection, order)
          .then(setIsLoading(true))
          .then(({ id }) => setorderId(id))
          .then(updateStock(order.items, dbFirestore))
          .then(resetCart)
          .catch((error) => console.log(error))
          .finally(() => setIsLoading(false));
      }else{
        alert("No coinciden las direcciones de correo")
      }
    }else{
      alert("todos los campos del formulario son obligatorios")
    }
  };

  const updateStock = (documents, db) => {
    const batch = writeBatch(db);
    let newStock;
    let query;
    documents.forEach((prod) => {
      query = doc(db, "products", prod.id);
      newStock = prod.stock - prod.cant;
      batch.update(query, {
        stock: newStock,
      });
    });
    batch.commit();
  };

  return (
    <div className="w-100 text-center">
      {isLoading ? (
        <Loading />
      ) : cartList.length > 0 ? (
        <>
          {cartList.map((product) => (
            <div key={product.id}>
              <img className="w-25" src={product.pictureUrl} alt="image" />
              Producto: {product.title} - Precio: {product.price} - Cantidad:{" "}
              {product.cant}
              <button
                onClick={() => removeProduct(product.id)}
                className="btn btn-outline-danger"
              >
                {" "}
                X{" "}
              </button>
              <hr />
            </div>
          ))}
          <h3>Precio Total: {totalPrice()}</h3>
          <br />
          <button className="btn btn-warning" onClick={resetCart}>
            Vaciar Carrito
          </button>
          <Form className="mt-2">
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="ingrese nombre"
                name="name"
                required
                onChange={handleOnChange}
                value={formData.name}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control
                type="phone"
                placeholder="ingrese teléfono"
                name="phone"
                required
                onChange={handleOnChange}
                value={formData.phone}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="ingrese correo eléctronico"
                name="email"
                required
                onChange={handleOnChange}
                value={formData.email}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Repetir Correo</Form.Label>
              <Form.Control
                type="email"
                placeholder="ingrese nuevamente correo eléctronico"
                name="repeatEmail"
                required
                onChange={handleOnChange}
                value={formData.repeatEmail}
              />
            </Form.Group>
          </Form>
          <button className="btn btn-warning" onClick={createOrder}>
            Finalizar Compra
          </button>
        </>
      ) : orderId == 0 ? (
        <>
          <h1>No hay productos en el carrito</h1>
          <Link className="mx-2 btn btn-warning" to="/">
            Volver al inicio
          </Link>
        </>
      ) : (
        <>
          <h1>Compra realizada con éxito</h1>
          <h3>id de compra: {orderId}</h3>
          <Link className="mx-2 btn btn-warning" to="/">
            Volver al inicio
          </Link>
        </>
      )}
    </div>
  );
};
