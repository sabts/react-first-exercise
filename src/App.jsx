import BegoMarker from "./components/bego-marker/BegoMarker";
import Camilacalls from "./components/camila-calls/Camilacalls";
import CamilaCandies from "./components/camila-candies/CamilaCandies";
import MacarenaApples from "./components/macarena-apples/MacarenaApples";
import SabrinaRuns from "./components/sabrina-runs/SabrinaRuns";

const App = () => {
  return (
    <>
      <h1>Ejercicios componentes</h1>
      <p>1. Camila responde 150 correos en 5 horas. ¿Cuántos correos responde por hora? </p>
      <Camilacalls calls ={150} hours={5}></Camilacalls>

      <p>2.Bego compró 6 cajas de marcadores. Cada caja tiene 10 marcadores. ¿Cuántos marcadores tiene en total?</p>
      <BegoMarker boxes={6}unitperbox={10}></BegoMarker>

      <p>3.Camila tiene 34 caramelos y quiere repartirlos en grupos de 5. ¿Cuántos caramelos le sobrarán?</p>
      <CamilaCandies candies={34} groups={5}></CamilaCandies>

      <p>4.Sabrina recorre 120 kilómetros en 4 horas. ¿Cuántos kilómetros recorre en 1 hora?
      Crea un componente que reciba distancia y tiempo como props y calcule la velocidad por hora.</p>
      <SabrinaRuns hours={4} kilometers={120}></SabrinaRuns>

      <p>5. Macarena recogió 320 manzanas y las va a poner en 10 cajas. ¿Cuántas manzanas tendrá cada caja?
      Crea un componente que reciba la cantidad total y cajas como props y muestre cuántas por caja.</p>
      <MacarenaApples apples= {320} boxes={10}></MacarenaApples>
    </>
  );
};

export default App;
