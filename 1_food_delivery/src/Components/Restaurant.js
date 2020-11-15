import React, {Component} from 'react';
import { Input, Select, Row, Col, Form, Button } from "antd";
import { InputNumber } from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import './Restaurant.css';
const FormItem = Form.Item;
const Option = Select.Option;


class Restaurant extends Component {
  constructor(props){
  super(props);
  this.state= {
    punjabi: [
      { id: 'sahi_paneer', count:0, dish: 'Sahi Paneer', rate: '150' },
      { id: 'malayi_koppta', count:0, dish: 'Malayi Koppta', rate: '200' },
      { id: 'sarso_saag', count:0, dish: 'Sarso da Saag', rate: '170' }
    ],
    chinese: [
      { id: 'veg_burger', count:0, dish: 'Veg Burger', rate: '150' },
      { id: 'noodles', count:0, dish: 'Noodles', rate: '100' },
      { id:'manchurian', count:0, dish: 'Manchurian', rate: '170' }
    ],
    green: [
      { dish: 'Chat Papri', rate: '150/-' },
      { dish: 'Veg Burger', rate: '120/-' },
      { dish: 'French Fries', rate: '170/-' }
    ],
    restaurants:[
      { id:'punjabi', name: 'Punjabi Tadka',  
      food_items: [
        { id: 'sahi_paneer', dish: 'Sahi Paneer', rate: '150/-' },
        { id: 'malayi_koppta', dish: 'Malayi Koppta', rate: '200/-' },
        { id: 'sarso_saag', dish: 'Sarso da Saag', rate: '170/-' }
      ]},
      { id:'chinese', name: 'Chinese Tadka', food_items: ['Veg Burger', 'Noodles', 'Manchurian']},
      { id:'green', name: 'Green Chily', food_items: ['Chat Papri', 'Veg Burger', 'French Fries']}
    ],
    restPunjabi: false,
    restChinese: false,
   // value: 'Select',
    selectedItems: [],
    submit: false,
    quantity: 1,
    foodItem: '',
    value: []
  };
  this.quantityChange = this.quantityChange.bind(this);
  this.handleChange = this.handleChange.bind(this);
  this.handleSubmit = this.handleSubmit.bind(this);
}

  onSelectRestaurant = e => {
    //check if Punjabi Takda restaurant is selected
    if(e == "punjabi") {
      this.setState({ restPunjabi: true, restChinese: false });
    } 
    else if (e == "chinese") {
      this.setState({ restChinese: true,  restPunjabi: false });
    }
    /*else {
      this.setState({ restPunjabi: false });
    }*/
  }

  onChange = (index, val) => {  
    this.setState({
      punjabi: this.state.punjabi.map((product, i) => (
      i === index ? {...product, count: val} : product        
      )),
    })    
  }

  onSelectChinese = (ind, va) => {
    this.setState({
      chinese: this.state.chinese.map((chiFood, chi) => (
      chi === ind ? {...chiFood, count: va} : chiFood        
       )),  
    })
  }

  quantityChange = (event) => {
    const nextValue = Number(event);
    this.setState({quantity:event.target.value})    
   //this.setState({quantity: nextValue});
  }

 /*handleChange = (e) => {
    this.setState({foodItem: e.target.value})
  }*/
  handleChange(event) {
    let newVal = event.target.value
    let stateVal = this.state.value

    console.log(stateVal)
    console.log(newVal)

    stateVal.indexOf(newVal) === -1
      ? stateVal.push(newVal)
      : stateVal.length === 1
        ? (stateVal = [])
        : stateVal.splice(stateVal.indexOf(newVal), 1)

    this.setState({ foodItem: stateVal })
  }

  handleSubmit = event => {    
  alert('Submitting Details:- Food Item: ' + this.state.foodItem + ';' +
                              'Quantity: '+ this.state.quantity );
   event.preventDefault();
  }

  
    render(){
      const { selectedItems } = this.state;
      
      const PunjabiList = ({ punjabi, onChange }) => (
        <ul>
          {punjabi.map((product, i) => (
            <li key={i}>
              {product.dish}
              <label><b className= "quantity">Qty:-</b></label>              
          <input 
            type="text"
            className= "inputQuantityField"
            value={product.count}
            onChange={e => onChange(i, parseInt(e.target.value) || 0)}
          />
          <label><b className= "quantity">Rate:-</b></label> {product.rate}
          </li>
          ))}    
        </ul>
      );
      const PunjabiTotal = ({ punjabi }) => (
        <h3>
          Price: 
          {punjabi.reduce((sum,i) => (
            sum += i.count * i.rate
          ), 0)}
         
        </h3>
      )
   
      const ChineseTotal = ({ chinese }) => (
        <h3>
          Price: 
          {chinese.reduce((sum,chi) => (
            sum += chi.count * chi.rate
          ), 0)}
         
        </h3>
      ) 
      const onFinish = values => {
        console.log('Received values of form:', values);
      };

          
        return(
        <div >
          <h2 className="topHeading"> Select name of Restaurant</h2>
          
          <Form style={{ width: "100%", marginRight: "10px" }} onFinish={onFinish} autoComplete="off">
         
            <Row justify="start">
              <Col md={8} xs={24} className="appForm">
                <Form.Item label="Select" rules={[{ required: true, message: 'Please select restaurant' }]}>              
                  <Select 
                  name="restaurant" 
                  id="restaurant" showSearch 
                  optionFilterProp="children"
                  getPopupContainer={trigger => trigger.parentNode}
                  onChange={this.onSelectRestaurant}
                  placeholder="Select Restaurant"
                  bordered={false}
                  className="select">
                  {/*<Option value="" >Select Restaurant</Option>
                   {this.state.restaurants.map(option => (
                          <Option value={option.id} key={option.id}>
                            {option.name}
                          </Option>
                  ))} */}
                  <Option value="punjabi">Punjabi Tadka</Option>
                  <Option value="chinese">Chinese Tadka</Option>
                  {/*<Option value="green">Green Chilly</Option> */}
                  </Select>              
                </Form.Item>
              </Col>
            </Row>  
         
          {/*if user select Punjabi Tadka restaurant: displayed in list format*/}
            {this.state.restPunjabi && (
            <div>
              <h2 className="RestHeading">Punjabi Tadka</h2>
              <Row justify="start">
                <Col md={8} xs={24} className="appForm">               
                  <FormItem hasFeedback>
                    
                    <PunjabiList punjabi={this.state.punjabi} onChange = {this.onChange} />
                    <PunjabiTotal punjabi={this.state.punjabi} />
                    
                  </FormItem>               
                </Col>
              </Row>
            </div>  
            )} 

          {/*if user select Chinese Tadka restaurant: displayed in dropdown format*/}
            {this.state.restChinese && (
            <div>
              <h2 className="RestHeading">Chinese Tadka</h2>
              <Form.List name="dishes">
              {(fields, { add, remove }) => (
              <>
                {fields.map(field => (
         
                 <Row justify="start">              
                   <Col md={4} xs={12} className="appForm">        
                    <FormItem rules={[{ required: true, message: 'Please food item' }]}>
                      <select 
                       // mode="multiple"
                        id="foodItems"
                        name="foodItems"
                        className="select"
                        name="chinese" 
                        id="chinese" 
                        //allowClear                    
                        placeholder="Select food item(s)"
                        value={this.state.foodItem}
                        onChange={this.handleChange}
                        bordered={false}                          
                       >
                       {this.state.chinese.map(option => (
                          <option value={option.id} key={option.id}>
                           {option.dish}                            
                          </option>                       
                       ))}    
                              
                      </select>
                        {/*     In list format
                              <ul>
                                {this.state.chinese.map((chiDish, i) => (
                                  <li key={i}>
                                    {chiDish.dish}
                                    <label><b className= "quantity">Qty:-</b></label>
                                    <input 
                                    type="text"
                                    className="inputField"
                                    value={chiDish.count}
                                    onChange={e => this.onSelectChinese(i, parseInt(e.target.value) || 0)}
                                   />
                                  </li> 
                                ))}    
                              </ul>
                              <h3>
                                Price: 
                                {this.chinese.reduce((sum,chi) => (
                                sum += chi.count * chi.rate
                                ), 0)}         
                              </h3>
                              <ChineseTotal chinese={this.state.chinese} />
                                {/*<ChineseList chinese={this.state.chinese} onChange = {this.onSelectChinese} />
                              <ChineseTotal chinese={this.state.chinese} /> */}                  
                     </FormItem>                
                    </Col>
                    <Col md={4} xs={12} className="appFormRight"> 
                      <input 
                        id="quantities"
                        name="quantities"
                        placeholder="Quantity"
                        className= "inputQuantityField"
                        value={this.state.quantity}
                        onChange={this.quantityChange}
                        bordered={false}
                          
                       />
                     </Col> 
                     <MinusCircleOutlined className="minusButton" onClick={() => remove(field.name)} />   
                  </Row>

                ))}
             
                  <Button
                    type="dashed"
                    className="addFieldButton"
                    onClick={() => add()}             
                    icon={<PlusOutlined />}                    
                    shape="circle"
                   >
                    Add food item(s)
                  </Button>
              
              </>
              )}
              </Form.List>               
        
             
            </div>
           )}          
       
          </Form>
          
             
             <Button 
              type="primary" 
              htmlType="submit" 
              className="submitButton"
              value="-1"
              onClick={this.handleSubmit}
             >
              Submit
             </Button>
    
        </div>
        )
    }
};

export default Restaurant;