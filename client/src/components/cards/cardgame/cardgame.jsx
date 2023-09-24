import styles from "../CardGame/cardGame.module.css";
import Button from "../../forms/button/button";

import cs from "../../../assets/products/Counter Strike.png";





const CardGame = () => {
  return (
    <div className={styles.CardGame}>
          <div className={styles.game}>
          <h2>Counter strike: Global offensive</h2>
            <div className={styles.categorias}>
            <h4>Ação, estratégia, multijogador.</h4>
            </div>
          </div>
      <img
        src={cs}
        alt="Imagem do jogo CounterStrike"
        width="270"
        height="270"
      />
          <div className={styles.CardGame}>
            <Button>Adicionar ao carrinho
          <img src="/src/assets/cart-plus.svg" alt="icone de carrinho e compra" width="24" height="22" >

          </img>
        </Button>
            </div>
          </div>
       
    );
  };
;
  
  export default CardGame;