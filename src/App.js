import { useEffect, useState } from "react";
import "./App.css";
import ConfirmOrder from "./components/ConfirmOrder";

function App() {
  const [menu, setMenu] = useState([
    {
      id: 1,
      name: "veg momo",
      price: 120,
    },
    {
      id: 2,
      name: "chicken momo",
      price: 150,
    },
    {
      id: 3,
      name: "mushroom pizza",
      price: 320,
    },
  ]);

  const [selectedItem, setSelectedItem] = useState([]);
  const [showConfirmOrder, setShowConfirmOrder] = useState(false);

  // function to add items to order
  const addToOrder = (item) => {
    localStorage.setItem(
      "selectedItems",
      JSON.stringify([...selectedItem, item])
    );
    setSelectedItem([...selectedItem, item]);
  };

  //function to render menu cards
  const renderMenu = () => {
    return menu.map((item, i) => (
      <div className="menuCard" key={item.id}>
        <h4>{item.name}</h4>
        <h4>{item.price}</h4>
        <button onClick={() => addToOrder(item)}>Add</button>
      </div>
    ));
  };

  // function to render selectedItems
  const renderSelectedItem = () => {
    return selectedItem.map((item, i) => (
      <div key={item.id}>
        <h5>{item.name}</h5>
      </div>
    ));
  };

  //function to conform order
  const conformOrder = () => {
    setShowConfirmOrder(true);
  };

  // set selectedItems from localstorage to persist on reload
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("selectedItems")) !== null) {
      setSelectedItem(JSON.parse(localStorage.getItem("selectedItems")));
    }
  }, []);

  return (
    <div className="App">
      <h3>Foodly Restro</h3>
      <div className="menuItems">{renderMenu()}</div>
      {selectedItem.length > 0 && (
        <div className="selectedItems">
          <h3>Your order:</h3>
          <div>
            <div>{renderSelectedItem()}</div>
            <button onClick={conformOrder}>Confrim Order</button>
          </div>
        </div>
      )}
      {showConfirmOrder && (
        <ConfirmOrder
          setSelectedItem={setSelectedItem}
          selectedItem={selectedItem}
          setShowConfirmOrder={setShowConfirmOrder}
        />
      )}
    </div>
  );
}

export default App;
