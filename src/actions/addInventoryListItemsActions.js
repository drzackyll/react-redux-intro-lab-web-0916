export function addInventoryListItems(quantity, description) {
  const newItem = {quantity: quantity, description: description}
  return {type: 'ADD_INVENTORY_LIST_ITEM', payload: newItem}
}
