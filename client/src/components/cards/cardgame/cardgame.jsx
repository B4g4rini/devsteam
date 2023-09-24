import styles from "../CardGame/cardGame.module.css";
import Button from "../../forms/button/button";

import cs from "../../../assets/products/Counter Strike.png";





const CardGame = () => {
    return (
      <div className={styles.CardGame}>
        <img
          src={cs}
          alt="Imagem do jogo CounterStrike"
          width={250}
          height={150}
        />
          <h3>Counter strike: Global offensive</h3>
          <div className={styles.CardGame}>
            </div>
            <Button>Adicionar ao carrinho
          <img src="/src/assets/cart-plus.svg" alt="icone de carrinho e compra" width="24" height="22" >

          </img>
        </Button>
          </div>
       
    );
  };
;
  
  export default CardGame;