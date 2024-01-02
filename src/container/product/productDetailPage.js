import { useLocation } from "react-router-dom";

const ProductDetailsPage = () => {
  let location = useLocation();

  console.log(location, "location");

  const { data } = location?.state;
  return (
    <div>
      <img src={data?.image} alt="/" width={200} height={200} />
      <p>{data?.name}</p>
    </div>
  );
};

export default ProductDetailsPage;
