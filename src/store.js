import React, { useReducer, useContext } from "react";

export const initialState = {
  selectedItems: [],
  products: [
    {
      id: "1",
      title: "Shoes"
    },
    {
      id: "2",
      title: "T-shirt"
    },
    {
      id: "3",
      title: "Pants"
    },
    {
      id: "4",
      title: "Hat"
    },
    {
      id: "5",
      title: "Scarve"
    },
    {
      id: "6",
      title: "Socks"
    },
    {
      id: "7",
      title: "Gloves"
    },
    {
      id: "8",
      title: "Jacket"
    },
    {
      id: "9",
      title: "Coat"
    }
  ]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const items = state.selectedItems.filter(
        item => item.id === action.payload.id
      );
      if (items.length) {
        return {
          ...state,
          selectedItems: state.selectedItems.map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity + 1
              };
            }
            return item;
          })
        };
      } else {
        return {
          ...state,
          selectedItems: [
            ...state.selectedItems,
            { ...action.payload, quantity: 1 }
          ]
        };
      }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        selectedItems: state.selectedItems
          .map(item => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                quantity: item.quantity - 1
              };
            }
            return item;
          })
          .filter(item => item.quantity !== 0)
      };
    default:
      return state;
  }
};

const Store = React.createContext();

export const useStore = () => useContext(Store);

export const StoreProvider = props => (
  <Store.Provider value={useReducer(reducer, initialState)}>
    {props.children}
  </Store.Provider>
);
