export default function inventoryItemsReducer(state = [], action) {
  switch (action.type) {
    case 'GET_INVENTORY_LIST_ITEMS':
      return action.payload
    case 'ADD_INVENTORY_LIST_ITEM':
      return [...items, action.payload]
    default:
      return state

  }
}
