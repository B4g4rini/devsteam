import styles from "./Nav.module.css";
import logo from "../../assets/logo.svg";
import cart from "../../assets/cart.svg";
import Button2 from "../forms/button2/button2";

const Nav = () => {
  return (
    <div className={styles.bar}>
      <div>
        <img src={logo} alt="logo da devSteam" width={"72"} />
        DevSteam
      </div>
      <input type="text" placeholder="Buscar" />
      <Button2><img src={cart} alt="icone de carrinho de compra" width={"46"}/> </Button2>
    </div>
  );
};

export default Nav;