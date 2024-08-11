import { createContext, useContext, useReducer } from "react";

const CartContext = createContext({
    items: [],
    addItem: (item) => {},
    removeItem: (id) => {},
})

// function to handle state changes based on actions.
function cartReducer(state, action) {
        if (action.type === 'ADD_ITEM') {
            // Find if the item already exists in the cart.
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.item.id
            );
            // Create a copy of the current items array.
            const updatedItems = [...state.items];
        
            if (existingCartItemIndex > -1) {
                // If the item exists, update its quantity.
                const existingItem = state.items[existingCartItemIndex];
                const updatedItem = {
                ...existingItem,
                quantity: existingItem.quantity + 1,
                };
                // Replace the existing item with the updated item.
                updatedItems[existingCartItemIndex] = updatedItem;
            } else {
                 // If the item doesn't exist, add it to the cart with a quantity of 1
                updatedItems.push({ ...action.item, quantity: 1 });
            }
                // Return the new state with the updated items array.
            return { ...state, items: updatedItems };
        }
  
        if (action.type === 'REMOVE_ITEM') {
             // Find the item to be removed in the cart.
            const existingCartItemIndex = state.items.findIndex(
                (item) => item.id === action.id
            );
            // item that need to delet it
            const existingCartItem = state.items[existingCartItemIndex];
            // Create a copy of the current items array.
            const updatedItems = [...state.items];

            if (existingCartItem.quantity === 1) {
                    // If the item quantity is 1, remove the item from the cart.
                    // 1 , so only the item at existingCartItemIndex will be removed.
                updatedItems.splice(existingCartItemIndex, 1);
            } else {
                // If the item quantity is more than 1, decrease its quantity by 1.
                const updatedItem = {
                ...existingCartItem,
                quantity: existingCartItem.quantity - 1,
                };
                updatedItems[existingCartItemIndex] = updatedItem;
            }
        
            return { ...state, items: updatedItems };
        }
  
    return state;
  }
export function CartContextProvider({ children }) {
    const [cart, dispatchCartAction] = useReducer(cartReducer, { items: [] });

    function addItem(item) {
        dispatchCartAction({ type: 'ADD_ITEM', item });
    }
    
    function removeItem(id) {
        dispatchCartAction({ type: 'REMOVE_ITEM', id });
    }
    
     // Define the context value, including the cart state and dispatch functions
    const cartContext = {
        items: cart.items,
        addItem,
        removeItem
    };
    console.log(cartContext)

    return (
        <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
    )
}

export default CartContext;

/*
Algorithm for Building a Shopping Cart Web Application
Initialize the Project:

Set up a new React project using Create React App or a similar tool.
Create Context for Cart State Management:

Define a CartContext to provide and consume the cart state throughout the application.
Use useReducer to manage cart state, with actions for adding and removing items.
Set Up State Management with useReducer:

Create a cartReducer function to handle state changes based on actions (ADD_ITEM and REMOVE_ITEM).
Initialize the cart state with an empty items array.
Define Context Provider:

Implement a CartContextProvider component to wrap the application and provide the cart state and dispatch functions.
Create Header Component:

Create a Header component to display the total number of items in the cart.
Use useContext to access the cart state.
Create Meals Component:

Create a Meals component to display a list of meals with buttons to add or remove items from the cart.
Use useContext to dispatch actions to add or remove items.
Create Cart Component:

Create a Cart component to display the items in the cart.
Use useContext to access the cart state.
Integrate Components:

In the main App component, wrap the application with the CartContextProvider.
Render the Header, Meals, and Cart components.
Detailed Steps:
Initialize the Project:

Run npx create-react-app shopping-cart to create a new React project.
Create Context for Cart State Management:

Define CartContext using createContext.
Define default values for items, addItem, and removeItem.
Set Up State Management with useReducer:

Define the cartReducer function:
For ADD_ITEM: Check if the item exists in the cart, update its quantity if it does, or add it to the cart if it doesn’t.
For REMOVE_ITEM: Check if the item exists in the cart, decrease its quantity if more than 1, or remove it from the cart if quantity is 1.
Initialize the cart state with an empty items array.
Define Context Provider:

Implement the CartContextProvider:
Use useReducer to manage the cart state.
Define addItem and removeItem functions to dispatch actions.
Provide the cart state and functions to the context.
Create Header Component:

Implement Header to display the total number of items in the cart:
Use useContext to consume the cart state.
Calculate the total number of items by summing up the quantities.
Create Meals Component:

Implement Meals to display a list of meals:
Use useContext to dispatch actions for adding and removing items.
Display each meal with buttons to add or remove the item from the cart.
Create Cart Component:

Implement Cart to display items in the cart:
Use useContext to consume the cart state.
Display each item with its name, price, and quantity.
Integrate Components:

In the main App component:
Wrap the application with the CartContextProvider.
Render Header, Meals, and Cart.
Summary of Algorithm Steps:
Initialize Project
Create Context
Set Up Reducer
Define Provider
Create Header
Create Meals
Create Cart
Integrate Components

 */