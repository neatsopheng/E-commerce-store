import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const ProductDetailPage = () => {
  const  {id}  = useParams();
  const { data, isLoading, error } = useProduct();
  const PDetail = data?.find((d) => d.id === parseInt(id!));
  // console.log(id);
  // console.log(PDetail?.id)


  if (isLoading) return <p>Loading</p>
  if (error) return <p>Data not found</p>

  return (
    <div className="bg-slate-500 md:w-[100%] md:ml-[16rem]">
      <p className="text-whtie text-4xl font-bold">{PDetail?.title}</p>
      <img src={PDetail?.image} className="w-44 h-auto p-5" />
      <p>{PDetail?.description}</p>
      <p>{PDetail?.price}</p>
      <p>Rating {PDetail?.rating.rate} by {PDetail?.rating.count} people</p>
    </div>
  );
};

export default ProductDetailPage;
