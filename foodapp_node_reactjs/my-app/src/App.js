import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Header } from './components/Header'
import { Orders } from './components/Orders'
import { DisplayBoard } from './components/DisplayBoard'
import CreateOrder from './components/CreateOrder'
import { getAllOrders, createOrder } from './services/OrderService'

class App extends Component {

  state = {
    order: {},
    orders: [],
    numberOfOrders: 0
  }

  createOrder = (e) => {
      createOrder(this.state.order)
        .then(response => {
          console.log(response);
          this.setState({numberOfOrders: this.state.numberOfOrders + 1})
      });
  }

  getAllOrders = () => {
    getAllOrders()
      .then(orders => {
        console.log(orders)
        this.setState({orders: orders, numberOfOrders: orders.length})
      });
  }

  onChangeForm = (e) => {
      let order = this.state.order
      if (e.target.name === 'item') {
          order.item = e.target.value;
      } else if (e.target.name === 'quantity') {
          order.quantity = e.target.value;
      }
      this.setState({order})
  }

  render() {
    
    return (
      <div className="App">
        <Header></Header>
        <div className="container mrgnbtm">
          <div className="row">
            <div className="col-md-8">
                <CreateOrder 
                  order={this.state.order}
                  onChangeForm={this.onChangeForm}
                  createOrder={this.createOrder}
                  >
                </CreateOrder>
            </div>
            <div className="col-md-4">
                <DisplayBoard
                  numberOfOrders={this.state.numberOfOrders}
                  getAllOrders={this.getAllOrders}
                >
                </DisplayBoard>
            </div>
          </div>
        </div>
        <div className="row mrgnbtm">
          <Orders orders={this.state.orders}></Orders>
        </div>
      </div>
    );
  }
}

export default App;
