import React from 'react'

const InventoryList = (props) => {
  // render() {
    return(
      <div>
        <ul>
          {props.items.map(item => <li>Description: {item.description} <br> Quantity: item.quantity}</li>)}
        </ul>
      </div>
    )
  // }
}

export default InventoryList
