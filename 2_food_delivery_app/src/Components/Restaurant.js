import React, { useState } from 'react';
import ReactDOM from 'react-dom';
//import 'antd/dist/antd.css';
import './Restaurant.css';
//import './index.css';
import { Form, Input, Button, Space, Select, Col, Row} from 'antd';
import { MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import adminLogo from "./images/food_1.webp";

const { Option } = Select;

const restaurants = [
  { label: 'Punjabi Tadka', value: 'Punjabi_Tadka' },
  { label: 'Chinese Tadka', value: 'Chinese_Tadka' },
];

const dishes = {
  Punjabi_Tadka: [
    { id: 'sahi_paneer', count:0, dish: 'Sahi Paneer', rate: '150' },
    { id: 'malayi_koppta', count:0, dish: 'Malayi Koppta', rate: '200' },
    { id: 'sarso_saag', count:0, dish: 'Sarso da Saag', rate: '170' }
  ],
  Chinese_Tadka: [
    { id: 'veg_burger', count:0, dish: 'Veg Burger', rate: '150' },
      { id: 'noodles', count:0, dish: 'Noodles', rate: '100' },
      { id:'manchurian', count:0, dish: 'Manchurian', rate: '170' }
  ],
};

const Restaurant = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState('');
  const handleSelect=(e)=>{
    console.log(e);
    setValue(e)
  }
  const onFinish = values => {
    console.log('Received values of form:', values);
    alert(`Submitted values:- 
           Restaurant: ${[form.getFieldValue('restaurant')]}
           Food Item:
           Quantity: 
           `)
  };
 
  const handleChange = () => {
    form.setFieldsValue({ dishes: [] });
  };

  return (
    <div className="backImage">  
  
      <h2 className="topHeading"> Foody Food </h2>
    <Form form={form} style={{ width: "100%", marginRight: "10px" }} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" >
    <Row justify="start">
      <Col md={8} xs={24} className="appForm">
      <Form.Item name="restaurant" label="Restaurant" rules={[{ required: true, message: 'Please select restaurant' }]}>
        <Select 
          bordered={false}
          className="select"
          options={restaurants} 
          onChange={handleChange} />
      </Form.Item>
      </Col>
    </Row> 
    
    
      <Form.List name="dishes">
        {(fields, { add, remove }) => (
          <>
            {fields.map(field => (
            <Row justify="start">      
             {/*} <Space key={field.key} >*/}
                 
                <Form.Item
                  noStyle
                  shouldUpdate={(prevValues, curValues) =>
                    prevValues.restaurant !== curValues.restaurant || prevValues.dishes !== curValues.dishes
                  }
                 >
                  
                  {() => (                             
                    <Col md={4} xs={12}  className="appForm">
                    <Form.Item
                      {...field}
                      label="Food Item"
                      name={[field.name, 'foodItem']}
                      fieldKey={[field.fieldKey, 'foodItem']}
                      rules={[{ required: true, message: 'Please select food item.' }]}                      
                     >
                      <Select
                        disabled={!form.getFieldValue('restaurant')} 
                        className="selectFood"
                        bordered={false}
                        onSelect={handleSelect}
                        >
                        {(dishes[form.getFieldValue('restaurant')] || []).map(item => (                          
                          <Option key={item.id} value={item.id}>
                            {item.dish}
                          </Option>
                        ))}
                      </Select>
                      </Form.Item>
                    </Col>
                    
                   
                  )}
                </Form.Item>
                
                
                <Col md={3} xs={12} className="appFormRight">
                <Form.Item
                  {...field}
                  label="Quantity"
                  name={[field.name, 'quantity']}
                  fieldKey={[field.fieldKey, 'quantity']}
                  rules={[{ required: true, message: 'Please enter quantity.' }]}
                 >
                  <Input  
                    className= "inputQuantityField"
                    bordered={false}/>
                </Form.Item>
                </Col>
               

                <MinusCircleOutlined className="minusButton" onClick={() => remove(field.name)} />
                
              {/*</Space>*/}
            </Row>   
            
              
            ))}
            <h4>You selected {value}</h4>

            
              <Button 
                type="dashed" 
                className="addFieldButton"
                onClick={() => add()} 
                block icon={<PlusOutlined />}>
                Add food item(s)
              </Button>
            
          </>
        )}
      </Form.List>
       
      <Form.Item>
        <Button 
          type="primary" 
          htmlType="submit"
          className="submitButton">
          Submit
        </Button>
      </Form.Item>
    </Form>
    
    </div>
  );
};

export default Restaurant;