import React,{useState} from 'react';
// import Form from 'react-bootstrap/Form';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {addstatedata} from '../../store/action/stateAction';
import {connect} from 'react-redux';
import { Breadcrumb,Card } from 'antd';
import {
  Form,
  Input,
  Button
} from 'antd';

const AddForm = (props) => {
  const [obj,setMyObj]= useState({
    state_name:""
  })

  const handleSubmit = async () =>{
     console.log(obj);
     await props.addstatedata(obj);
     props.history.replace("/state");
  }

  const HandleChange = (e,name) =>{
     let olddata = {...obj};
     olddata[name] = e.target.value;
     console.log(olddata);
     setMyObj(olddata);
  }

  const backHandler = () => {
    props.history.replace("/state")
  }

  return (
    <>    
          <div className={"Title"} style={{marginTop: "-29px" }}>
              Add State 
          </div>
          <Breadcrumb style={{ marginTop: "1px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>State</Breadcrumb.Item>
              <Breadcrumb.Item>Add State</Breadcrumb.Item>
          </Breadcrumb>
            <div className="site-card-border-less-wrapper">
              <Card title="Add State Form" bordered={false} style={{ width: 1100 }}>
                      <Form>
                          <Form.Item controlId="formBasicEmail" label="Enter State Name:-">
                              <Input type="text" name="state_name" onChange={(e)=>{HandleChange(e,"state_name")}} placeholder="Enter state name ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          <Form.Item label="" controlId="formBasicEmail">
                              <Button type="primary" onClick={handleSubmit}>Submit</Button>
                          </Form.Item>
                      </Form>
              </Card>
            </div>
    </>
  );
}

const mapDispatchToProps = dispatch =>{
  return{
    addstatedata: (postdata) => dispatch(addstatedata(postdata))
  }
}
export default connect(null,mapDispatchToProps)(AddForm);
