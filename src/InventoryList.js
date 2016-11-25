import React from 'react'

const InventoryList = (props) => {
  // render() {
    return(
      <div>
        <ul>
          {props.inventoryItems.map(item => <li>item: {item.description}, quantity: {item.quantity}</li>)}
        </ul>
      </div>
    )
  // }
}

export default InventoryList
