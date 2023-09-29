import styles from "../CardGame/cardGame.module.css";
import Button from "../../forms/button/button";

import cs from "../../../assets/products/Counter Strike.png";

const CardGame = () => {
  return (
    <div className={styles.CardGame}>
      <div className={styles.game}>
        <h2>Counter strike: Global offensive</h2>
      <h1>99,90</h1>
      </div>
      <div className={styles.Categorias}>
        <h3>Ação, estratégia, multijogador</h3>

        <Button>
          Adicionar ao carrinho
          <img
            src="/src/assets/cart-plus.svg"
            alt="icone de carrinho e compra"
            width="24"
            height="22"
          ></img>
        </Button>
      </div>

      <img src={cs} alt="Imagem do jogo CounterStrike" />
    </div>
  );
};
export default CardGame;
