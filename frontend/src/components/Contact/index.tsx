import React, { useState } from 'react';
import { Form, Input, Button } from 'antd';
import  displayError  from '../../lib/validation';
import userAPI from '../../services/userAPI';

import './index.css';


const Contact = ({name, mail, subject, message, onSubmit, error}) => {
console.log("states come from reducer:", name, mail, subject, message,error);
userAPI.contact();

    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 8 },
    };
  



    const [formState, setFormState] = useState({name, mail, subject, message});
            const handleChange = (e) => {
                const name: string = e.target.name;
                const value: string = e.target.value;
                console.log("name : ",name, "value :", value);
                setFormState({...formState, [name]: value}); // name_input : input_value   

            }
    const result = displayError(formState);
        console.log("result: ", result, "form: ", formState);
    const handleSubmit = (e) => {
        e.preventDefault();
        
        console.log("erreur: ",error);
        if (!result[0]) { 
        onSubmit(formState);
        
        console.log("ok");
        }
   
    }
  
    return (

 
        <div className="contact" > 
            Contact
             <Form {...layout} name="nest-messages"  onSubmit={handleSubmit} method="post" action="mailto:melinda93@hotmail.fr" >
                 <Form.Item label="Nom" >
                   <Input name="name" onChange={handleChange}/>
                 </Form.Item>
                 <Form.Item label="Email"  >
                   <Input name="mail" onChange={handleChange}/>
                 </Form.Item>
                 <Form.Item  label="Sujet">
                   <Input name="subject" onChange={handleChange} />
                 </Form.Item>
                 <Form.Item label="Message">
                   <Input.TextArea  name="message" onChange={handleChange} rows={4}/>
                 </Form.Item>
                 <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                   <Button type="primary" htmlType="submit"> 
                     Submit 
                   </Button>
                 </Form.Item> 
            </Form>
        </div>
    )
}

export default Contact;