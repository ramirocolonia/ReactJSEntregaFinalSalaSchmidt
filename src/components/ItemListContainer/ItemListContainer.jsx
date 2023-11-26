import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";

import ItemList from "../ItemList/ItemList";
import { Loading } from "../Loading/Loading";

const ItemListContainer = () => {
  const { cid } = useParams();
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "products");
    const queryFilter = cid
      ? query(queryCollection, where("category", "==", cid))
      : queryCollection;
    getDocs(queryFilter)
      .then(setIsLoading(true))
      .then((resp) =>
        setProducts(resp.docs.map((prod) => ({ id: prod.id, ...prod.data() })))
      )
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [cid]);

  return <>{isLoading ? <Loading /> : <ItemList items={products} />}</>;
};

export default ItemListContainer;