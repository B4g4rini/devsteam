import Button from "../../forms/button/button";
import styles from "./cardPromo.module.css";

const CardPromo = ({ discount, fullPrice, title }) => {
  return (
    <div className={styles.CardPromo}>
      <img
        src={`/src/assets/products/${title}.png`}
        alt=""
        width={250}
        height={300}
      />
      <div className={styles.info}>
        <h3>Oferta Exclusiva</h3>
        <div className={styles.priceCard}>
          <div>-{discount}%</div>
          <div>
            <p>R${fullPrice}</p>
            <h4>R${(fullPrice - fullPrice * (discount / 100)).toFixed(2)}</h4>
          </div>
        </div>
        <Button>Adicionar ao carrinho

          <img src="/src/assets/cart-plus.svg" alt="icone de carrinho e compra" width="24" height="22">
          </img>
        </Button>
        
      
      </div>
    </div>
  );
};
CardPromo.defaultProps = {
  discount: "50",
  fullPrice: "199.90",
  title: "league of legends",
};

export default CardPromo;

