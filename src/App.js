import "./App.css"
import ProductInventory from "./ProductInventory"
import ShoppingCart from "./ShoppingCart"
import {inventoryDB} from "./content"

function App() {

  return (
    <div className="App">
      <ShoppingCart />
      <ProductInventory inventoryDB={inventoryDB} />
    </div>
  );
}

export default App;
