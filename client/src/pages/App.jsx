import "./App.css"
import CardPromo from "../components/cards/cardPromo/cardPromo"
import Container from "../components/container/container";
import Subtitle from "../components/forms/subtitle/subtitle";
import Nav from "../components/nav/Nav";

const App = () => {
    return (
      <div>
        <Nav />
  
        <Container>
          <Subtitle>promoções</Subtitle>
          <div className="saleContainer">
            <CardPromo
              title={"League of Legends"}
              fullPrice={149.90}
              discount={30}
            />
            <CardPromo title={"Dota 2"} fullPrice={199.99} discount={75} />
            <CardPromo title={"Valorant"} fullPrice={50} discount={15} />
          </div>
        </Container>
      </div>
    );
  };
  
  export default App;
  