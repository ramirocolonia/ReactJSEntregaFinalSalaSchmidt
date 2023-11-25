import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import {ItemDetail} from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = () => {
  const {pid} = useParams()
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   mFetch()
  //     .then((res) => setProduct(res.find(({id}) => id==pid)))
  //     .catch((error) => console.log(error))
  //     .finally(() => setIsLoading(false));
  // }, []);

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
