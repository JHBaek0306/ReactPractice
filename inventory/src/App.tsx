import React, { useState } from "react";
import { useInventory } from "./hooks/useInventory";
import InventoryForm from "./components/InventoryForm";
import InventoryFilter from "./components/InventoryFilter";
import InventoryList from "./components/InventoryList";

const App = () => {
  const { state, dispatch } = useInventory();

  const handleAddItem = (name: string, category: string, quantity: number) => {
    dispatch({
      type: "ADD_ITEM",
      payload: { id: Date.now(), name, category, quantity },
    });
  };

  const handleRemoveItme = (id: number) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id });
  };

  const handleUpdatItem = (id: number, quantity: number) => {
    dispatch({ type: 'UPDATE_ITEM', payload: { id, quantity } });
  };

  const handleFilterChange = (filter: string) => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <div>
      <h1>Inventory Management System</h1>
      <InventoryForm onAdd={handleAddItem} />
      <InventoryFilter filter={state.filter} onFilterChange={handleFilterChange} />
      <InventoryList items={state.items} filter={state.filter} onRemove={handleRemoveItme} onUpdate={handleUpdatItem} />
    </div>
  );
};

export default App;
