import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const { count } = useSelector((state) => state);

  const navData = [
    "Home",
    "Product",
    "Form",
    "About us",
    "Contact us",
    "Blogs",
  ];
  const navigate = useNavigate();
  const handleNavMenu = (value) => {
    console.log(value?.target?.innerHTML);
    switch (value.target.innerHTML) {
      case "Home":
        navigate("/");
        break;
      case "Product":
        navigate("/product");
        break;
      case "About us":
        navigate("/about-us");
        break;
      case "Contact us":
        navigate("/contact-us");
        break;
      case "Form":
        navigate("/form");
        break;
      default:
        break;
    }
  };

  return (
    <div className="nav_container">
      {count}
      {navData?.map((item, id) => {
        return <p onClick={(value) => handleNavMenu(value)}>{item}</p>;
      })}
    </div>
  );
};
export default Navbar;
