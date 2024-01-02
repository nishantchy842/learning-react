const Navbar = () => {
  const navData = ["Home", "Product", "About us", "Contact us", "Blogs"];

  const handleNavMenu = (value) => {
    switch (value.target.innerHTML) {
      case "Home":
        console.log("home is clicked");
        break;
      case "About us":
        console.log("About us is clicked");
        break;
      case "Contact us":
        console.log("contact us is clicked");
        break;
      default:
        break;
    }
  };

  return (
    <div className="nav_container">
      {navData?.map((item, id) => {
        return <p onClick={(value) => handleNavMenu(value)}>{item}</p>;
      })}
    </div>
  );
};
export default Navbar;
