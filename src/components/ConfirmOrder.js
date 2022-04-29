const ConfirmOrder = ({
  selectedItem,
  setSelectedItem,
  setShowConfirmOrder,
}) => {
  // function to render selectedItems
  const renderSelectedItem = () => {
    return selectedItem.map((item, i) => (
      <div key={item.id}>
        <h5>{item.name}</h5>
      </div>
    ));
  };

  const createOrder = () => {
    localStorage.clear("selectedItems");
    setSelectedItem([]);
    setShowConfirmOrder(false);
  };

  const showTotalPrice = () => {
    console.log("selected", selectedItem);

    let totalPrice = 0;

    for (let i = 0; i < selectedItem.length; i++) {
      totalPrice += selectedItem[i].price;
    }

    return `${totalPrice}`;
  };

  return (
    <div className="conformOrder">
      <h1>Confirm Order</h1>
      {renderSelectedItem()}
      <div>Price: {showTotalPrice()}</div>
      <button onClick={createOrder}>Create Order</button>
    </div>
  );
};

export default ConfirmOrder;
