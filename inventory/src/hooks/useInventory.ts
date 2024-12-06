import React, { useEffect, useReducer } from "react";
import { InventoryState, InventoryAction, Item } from '../types/InventoryTypes'

const initialState: InventoryState = {
    items: [],
    filter: "",
    lowStockThreshold: 5,
};

const inventoryReducer = (state: InventoryState, action: InventoryAction) => {
    switch (action.type) {
        case "ADD_ITEM":
            return { ...state, items: [...state.items, action.payload] };
        case "REMOVE_ITEM":
            return { ...state, items: state.items.filter((item) => item.id !== action.payload) };
        case "UPDATE_ITEM":
            return {
                ...state,
                items: state.items.map((item) =>
                    item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
                ),
            };
        case "SET_FILTER":
            return { ...state, filter: action.payload };
        case "SET_LOW_STOCK_THRESHOLD":
            return { ...state, lowStockThreshold: action.payload };
        default:
            return state;
    }
}

export const useInventory = () => {
    const [state, dispatch] = useReducer(inventoryReducer, initialState);

    useEffect(() => {
        const lowStockItems = state.items.filter(
            (item) => item.quantity < state.lowStockThreshold
        );
        if (lowStockItems.length > 0) {
            alert("Item is runnign out!");
        }
    }, [state.items, state.lowStockThreshold]);

    return { state, dispatch };
};