import "../styles/Cart.css";

export default function Cart() {
  const plants = [
    { name: "Monstera", price: 8 },
    { name: "Lierre", price: 10 },
    { name: "Bouquet de fleurs", price: 15 },
  ];

  function totalPrice() {
    var total = 0;
    for (var i = 0; i < plants.length; i++) {
      total += plants[i].price;
    }
    return total;
  }
  return (
    <div className="lmj-cart">
      <h2>Panier</h2>
      {plants.map((plant, i) => (
        <ul key={i}>
          {plant.name}: {plant.price}€
        </ul>
      ))}
      Total: {totalPrice()}€
    </div>
  );
}
