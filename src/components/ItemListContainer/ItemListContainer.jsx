import { useEffect, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import ItemList from "../ItemList/ItemList"
import "../ItemListContainer/ItemListContainer.css"
import { mFetch } from "../../helpers/mFetch"

const ItemListContainer = ( {greeting} ) => {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    mFetch()
    .then (res => setProducts(res))
    .catch(error => console.log(error))
    .finally(() => setIsLoading(false))
  }, [])

  console.log(products)
  return (
    <div className='contenedor'>
      {greeting}
      <ItemCount stock="3" initial="1"/>
      {isLoading ? <h2>Loading products...</h2>
      : <ItemList items={products}/>
      }
    </div>
  )
}

export default ItemListContainer