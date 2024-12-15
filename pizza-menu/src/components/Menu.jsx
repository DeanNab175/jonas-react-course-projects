import Pizza from "./Pizza";
import pizzaData from "../../public/data";

function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>

      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
    </main>
  );
}

export default Menu;
