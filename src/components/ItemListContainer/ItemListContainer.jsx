import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import "../ItemListContainer/ItemListContainer.css";
import { mFetch } from "../../helpers/mFetch";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
  const { cid } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (cid) {
      mFetch()
        .then((res) => setProducts(res.filter(product => product.category === cid)))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    } else {
      mFetch()
        .then((res) => setProducts(res))
        .catch((error) => console.log(error))
        .finally(() => setIsLoading(false));
    }
  }, [cid]);

  return (
    <div className="d-flex justify-content-center align-items-strech">
      {/* {greeting} */}
      {/* <ItemCount stock="3" initial="1"/> */}
      {isLoading ? <h2>Loading products...</h2> : <ItemList items={products} />}
    </div>
  );
};

export default ItemListContainer;
