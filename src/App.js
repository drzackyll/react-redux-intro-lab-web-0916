import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {addInventoryListItems} from './actions/inventoryItemsActions';
import {getInventoryListItems} from './actions/inventoryItemsActions';
import InventoryList from './InventoryList'
import NewInventoryItem from './NewInventoryItem'


class App extends Component {
  componentWillMount() {
    getInventoryListItems()
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Flatiron Bakery</h2>
          <div>
            <InventoryList inventoryItems={this.props.inventoryItems}/>
            <NewInventoryItem />
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return({inventoryItems: state.items})
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateItem: addInventoryListItems, getItem: getInventoryListItems}, dispatch)
}

const connector = connect(mapStateToProps, mapDispatchToProps)
const connectedComponent = connector(App)

export default connectedComponent;
