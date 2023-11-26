import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";

import { Loading } from "../Loading/Loading";
import {ItemDetail} from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
  const {pid} = useParams()
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() =>{
    const dbFirestore = getFirestore()
    const queryDoc = doc(dbFirestore, 'products', pid)
    getDoc(queryDoc)
    .then(resp => setProduct({id: resp.id, ...resp.data()}))
    .catch(error => console.log(error))
    .finally(() => setIsLoading(false))
  },[])

  return (
    <>
      {isLoading ?
        <Loading />
      : 
        <ItemDetail item={product} />}
    </>
  );
};

export default ItemDetailContainer;