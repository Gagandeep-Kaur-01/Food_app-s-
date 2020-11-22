import React from 'react'

export const Orders = ({orders, foodDetails}) => {

    console.log('orders length:::', orders.length)
    if (orders.length === 0) return null

    const OrderRow = (order,index, food) => {

        return(
              <tr key = {index} className={index%2 === 0?'odd':'even'}>
                  <td>{index + 1}</td>
                  <td>{order.item}</td>
                  <td>{order.quantity}</td>
                  <td>{foodDetails.rate}
                  </td>
              </tr>
          )
    }

    const orderTable = orders.map((order,index) => OrderRow(order,index))

    return(
        <div className="container orderDetail">
            <h2 style={{ marginBottom: 40 }}>Order(s) detail</h2>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>Order Id</th>
                    <th>Food Item</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Total Price</th>
                </tr>
                </thead>
                <tbody className="tableBody">
                    {orderTable}
                </tbody>
            </table>
        </div>
    )
}