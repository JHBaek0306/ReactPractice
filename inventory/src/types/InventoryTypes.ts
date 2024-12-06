export interface Item {
    id: number;
    name: string;
    category: string;
    quantity: number;
}

export interface InventoryState {
    items: Item[];
    filter: string;
    lowStockThreshold: number;
}


export type InventoryAction =
    | { type: "ADD_ITEM"; payload: Item }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "UPDATE_ITEM"; payload: { id: number; quantity: number } }
    | { type: "SET_FILTER"; payload: string }
    | { type: "SET_LOW_STOCK_THRESHOLD"; payload: number };