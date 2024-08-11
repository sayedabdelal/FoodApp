
import Meals from "./component/Meals.jsx";
import { CartContextProvider } from './store/cartContext.jsx';
import Header from "./component/Header.jsx";




function App() {
  
  
  
  return (
    <>
      <CartContextProvider>
        <Header />
        <Meals />
        
      </CartContextProvider>

        
      
    </>
  );
}

export default App;

// algorism ..> cart 
/**
 *  need to a acess (Header , Meals)
 */
