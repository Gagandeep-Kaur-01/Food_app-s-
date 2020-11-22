import React from 'react'


const CreateOrder = ({onChangeForm, createOrder }) => {


    return(
        <div className="container">
            <div className="row">
                <div className="col-md-7 mrgnbtm">
                <h2 style={{ marginBottom: 40 }}>Create Order</h2>
                <form>
                    <div className="row">
                        <div className="form-group col-md-6">
                            <label>Select food item</label>
                            <select 
                            onChange={(e) => onChangeForm(e)}
                            className="form-control" 
                            name="item" id="item" placeholder="Select food item"
                            >
                                <option value="item">Select</option>
                                <option value="Sahi Paneer">Sahi Paneer</option>
                                <option value="Malayi Koppta">Malayi Koppta</option>
                                <option value="Sarso da Saag">Sarso da Saag</option>
                                <option value="Veg Burger">Veg Burger</option>
                                <option value="Noodles">Noodles</option>
                                <option value="Manchurian">Manchurian</option>
                                <option value="Chat Papri">Chat Papri</option>
                                <option value="French Fries">French Fries</option>
                                </select> 
                        </div>
                        <div className="form-group col-md-6">
                        <label>Quantity</label>
                            <input type="text" onChange={(e) => onChangeForm(e)} className="form-control" name="quantity" id="quantity" placeholder="Quantity" autoComplete="off"/>
                        </div>
                    </div>
                    
                    <button type="button" onClick= {(e) => createOrder()} className="btn btn-success orderButton">Order Now</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default CreateOrder