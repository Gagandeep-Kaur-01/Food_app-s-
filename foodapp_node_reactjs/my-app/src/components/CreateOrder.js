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
                                <option value="item">select</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
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