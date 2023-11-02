import { useEffect, useState } from "react";
import { mFetch } from "../../helpers/mFetch";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const {pid} = useParams()
  const [product, setProduct] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    mFetch()
      .then((res) => setProduct(res.find(({id}) => id==pid)))
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      {isLoading ? <h2>Loading product...</h2> : <ItemDetail item={product} />}
    </>
  );
};

export default ItemDetailContainer;
