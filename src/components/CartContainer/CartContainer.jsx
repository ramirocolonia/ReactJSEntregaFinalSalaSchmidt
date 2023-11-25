import { Link } from "react-router-dom"
import { useCartContext } from "../../contexts/CartContext"
import { addDoc, collection, getFirestore,  } from "firebase/firestore"
import { useState } from "react"

export const CartContainer = () => {

    const { cartList, resetCart, totalPrice, removeProduct } = useCartContext()
    const [orderId, setorderId] = useState(0)

    const createOrder = () => {
        const order = {}
        order.buyer = {name:'pepe el pistolero', phone: '12345678', email: 'pepe@gmail.com'}
        order.items = cartList.map(({ id, price, title, cant }) => ({id: id, price: price, title: title, cant: cant}))
        order.total = totalPrice()
        order.date = new Date()

        const dbFirestore = getFirestore()
        const queryCollection = collection(dbFirestore, 'orders')

        addDoc(queryCollection, order)
        .then(({ id }) => setorderId(id))
        .then(resetCart)
        .catch(error => console.log(error))

    }

    // const updateStock = (documents,db)=>{
    //     const ids = documents.map(({ id }) => doc(db, 'products', id))
    //     // const queryFilter = query(queryCollection, where("category", "==", cid));
    //     // const batch = writeBatch(db)
    //     let query = ""
    //     documents.forEach(item => {
    //         query = doc(db, 'products', item.id)
    //         console.log('query ', query.data)
    //         query.update({
    //             stock: Firestore.FieldValue.increment(-1)
    //         });
    //     });

    //     console.log('actualizando stocks')
    // }

    return(
        <div className="w-100 text-center">
            {cartList.length > 0 ? (
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
                            {" "}X{" "}
                            </button>
                            <hr />
                        </div>
                    ))}
                    <h3>Precio Total: {totalPrice()}</h3>
                    <br /> 
                    <button className="btn btn-warning" onClick={resetCart}>Vaciar Carrito</button>
                    <button className="btn btn-warning" onClick={createOrder}>Finalizar Compra</button>
                </>
            )
            :
            (orderId == 0 ?(
                    <>
                        <h1>No hay productos en el carrito</h1>
                        <Link className="mx-2 btn btn-warning" to='/'>
                            Volver al inicio
                        </Link>
                    </>)
                :(
                    <>
                        <h1>Compra realizada con éxito</h1>
                        <h3>id de compra: {orderId}</h3>
                        <Link className="mx-2 btn btn-warning" to='/'>
                            Volver al inicio
                        </Link>
                    </>
                ))
            }
        </div>
    )
}