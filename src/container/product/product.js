import { useEffect, useState } from "react";
import { CiSquareMinus, CiSquarePlus } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Product = (props) => {
  console.log(props);

  const navigate = useNavigate();

  const handleNavigate = (item) => {
    navigate("/product/1", { state: { data: item } });
  };
  //props = {data:[]}

  const { data } = props;

  const [product, setPorduct] = useState(data);

  // [{ name: "", count: "" }];
  const copyProduct = [...product];

  const handleCountValue = (action, id) => {
    console.log(id, "id");

    if (action === "minus") {
      console.log("minus icon is clicked");
      if (product[id].count != 0) {
        copyProduct[id].count--;
      }

      setPorduct(copyProduct);
    }
    if (action === "plus") {
      console.log("plus icon is clicked");
      copyProduct[id].count++;
      setPorduct(copyProduct);
    }
    if (action === "liked") {
      // if (product[id].isLiked === true) {
      //   copyProduct[id].isLiked = false;

      //   setPorduct(copyProduct);
      // } else {
      //   copyProduct[id].isLiked = true;
      //   setPorduct(copyProduct);
      // }

      copyProduct[id].isLiked = !copyProduct[id].isLiked;
      setPorduct(copyProduct);
    }
  };

  const handleLiked = (id) => {
    // const copyProduct = [...product];
    // debugger;
    if (product[id].isLiked === true) {
      copyProduct[id].isLiked = false;

      setPorduct(copyProduct);
    } else {
      copyProduct[id].isLiked = true;
      setPorduct(copyProduct);
    }

    // setPorduct(copyProduct);
    // copyProduct[id].isLiked = !copyProduct[id].isLiked;
  };

  const [total, setTotal] = useState();

  const totalPrice = () => {
    let sum = 0;

    product.map((element, id) => {
      return (sum = sum + element?.price * element.count);
    });
    setTotal(sum);
  };

  useEffect(() => {
    totalPrice();
    // handl eLiked()
  }, [product]);

  //react fragment <></>

  return (
    <div>
      <div style={{ display: "flex", gap: "20px" }}>
        {product?.map((item, id) => {
          return (
            <div
              onClick={() => handleNavigate(item)}
              style={{
                border: "1px solid black",
                width: "200px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: item?.backgroundColor,
              }}
            >
              <img src={item.image} alt="/" width={200} height={200} />
              <p>{item.price}</p>
              <p>{item?.name}</p>
              <FaHeart
                onClick={() => handleCountValue("liked", id)}
                style={{ color: item?.isLiked === true ? "red" : "black" }}
              />
              <div style={{ display: "flex", alignItems: "center" }}>
                <CiSquareMinus onClick={() => handleCountValue("minus", id)} />
                {item.count}
                <CiSquarePlus onClick={() => handleCountValue("plus", id)} />
              </div>
            </div>
          );
        })}
      </div>
      <br />
      <div
        style={{
          border: "1px solid green",
          width: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: "500px",
          background: "red",
        }}
      >
        <table>
          <tr style={{ border: "solid green 2px" }}>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>

          {product.map((item, id) => {
            return (
              <tr>
                <td style={{ border: "solid green 2px" }}>{item?.name}</td>
                <td style={{ border: "solid green 2px" }}>{item?.price}</td>
                <td style={{ border: "solid green 2px" }}>{item?.count}</td>
                <td style={{ border: "solid green 2px" }}>
                  {item?.price * item?.count}
                </td>
              </tr>
            );
          })}
        </table>
        <p style={{ border: "solid green 2px" }}>Total price: {total}</p>
      </div>
    </div>
  );
};
export default Product;
