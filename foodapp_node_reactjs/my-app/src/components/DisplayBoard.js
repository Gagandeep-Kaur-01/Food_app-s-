import React from 'react'

export const DisplayBoard = ({numberOfOrders, getAllOrders}) => {
    
    return(
        <div className="display-board">
            <h4>Orders Created</h4>
            <div className="number">
            {numberOfOrders}
            </div>
            <div className="btn">
                <button type="button" onClick={(e) => getAllOrders()} className="btn btn-primary">Get all Orders</button>
            </div>
        </div>
    )
}