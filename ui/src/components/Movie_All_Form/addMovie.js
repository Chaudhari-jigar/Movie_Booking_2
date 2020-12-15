import React, { useState } from 'react';
import { addmoviedata } from "../../store/action/movieAction";
import { connect } from 'react-redux';
import { Breadcrumb,Card,Row,Col,DatePicker } from 'antd';
import moment from 'moment';
import {
  Form,
  Input,
  Button
} from 'antd';
// import { Row } from 'react-bootstrap';

const formItemLayout = {
  labelCol: {
    // span: 5,
  },
  wrapperCol: {
    span: 10,
  },
};
const formTailLayout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 8,
    offset: 4,
  },
};

const AddMovie = (props) => {
  const { RangePicker } = DatePicker;
  const [form] = Form.useForm();
  const [obj, setMyObj] = useState({
    moviename: "",
    releasedate: "",
    movie_status: "",
    movie_category: "",
    director_name: "",
    Actors_name: "",
    movie_description: "",
    movie_type: "",
    movie_logo: "",
    booking_status: ""
  })

  const handleSubmit = async () => {
    try {
        const values = await form.validateFields();
        // console.log(obj);
        const formdata = new FormData();
        formdata.append("moviename",obj.moviename);
        formdata.append("releasedate",obj.releasedate);
        formdata.append("movie_status",obj.movie_status);
        formdata.append("movie_category",obj.movie_category);
        formdata.append("director_name",obj.director_name);
        formdata.append("Actors_name",obj.Actors_name);
        formdata.append("movie_description",obj.movie_description);
        formdata.append("movie_type",obj.movie_type);
        formdata.append("movie_logo",obj.movie_logo);
        formdata.append("booking_status",obj.booking_status);
      
        console.log(obj.moviename);
        await props.addmoviedata(formdata);
        props.history.replace("/movie");
    } catch (errorInfo) {
      console.log('Failed:', errorInfo);
    }
  }

  const HandleChange = (e, name) => {
    let olddata = { ...obj };
    console.log(name);
    if (name == "movie_logo") {
      console.log(name);
      const { target: { files } } = e
      olddata[name] = files.length === 1 ? files[0] : files
      olddata[name] = e.target.files[0];
    }else if(name == "releasedate"){
      if(e!=null){

        olddata[name] = new Date(e._d).toLocaleDateString();
      }
    }else
    {
      olddata[name] = e.target.value;
    }
    console.log(olddata);
    setMyObj(olddata);
  }

  return (
    <>
      <div className={"Title"} style={{marginTop: "-29px" }}>
          </div>
          <Breadcrumb style={{ marginTop: "1px",textAlign:"right",marginBottom:"30px"  }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>Movie</Breadcrumb.Item>
              <Breadcrumb.Item>Add Movie</Breadcrumb.Item>
          </Breadcrumb>
            <div className="site-card-border-less-wrapper">
              <Card title="Add Movie Form" bordered={false} style={{ width: "auto" }}>
                      <Form form={form} name="AddMovie">
                      <Row gutter={0}>
                          <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Movie Name:-" name="moviename" rules={[{ required: true, message: 'Please required movie name!' }]}>
                              <Input type="text" name="moviename" onChange={(e) => { HandleChange(e, "moviename") }} placeholder="Enter moviename ..." style={{maxWidth : "300px", width:"100%"}}/>
                          </Form.Item>
                          
                      </Col>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Movie Category:-" name="movie_category" rules={[{ required: true, message: 'Please required movie category!' }]}>
                              <Input type="text" name="movie_category" onChange={(e) => { HandleChange(e, "movie_category") }} placeholder="Enter movie_category ..." style={{maxWidth : "300px", width:"100%"}}/>
                          </Form.Item>
                      </Col>
                    </Row>
                      <Row gutter={0}>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Release Date:-" name="releasedate" rules={[{ required: true, message: 'Please required Releasedate!' }]}>
                              <DatePicker onChange={(e) => { HandleChange(e, "releasedate") }} format={"YYYY/MM/DD"}/>
                          </Form.Item>
                      </Col>
                        <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Director Name:-" name="director_name" rules={[{ required: true, message: 'Please required director name!' }]}>
                              <Input type="text" name="director_name" onChange={(e) => { HandleChange(e, "director_name") }} placeholder="Enter director_name ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          
                      </Col>
                      </Row>
                      <Row gutter={0}>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Actors Name:-" name="Actors_name" rules={[{ required: true, message: 'Please required actors name!' }]}>
                              <Input type="text" name="Actors_name" onChange={(e) => { HandleChange(e, "Actors_name") }} placeholder="Enter Actors ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          
                      </Col>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Movie Description:-" name="movie_description" rules={[{ required: true, message: 'Please required movie description!' }]}>
                              <Input type="text" name="movie_description" onChange={(e) => { HandleChange(e, "movie_description") }} placeholder="Enter movie_description ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          </Col>
                      </Row>
                      <Row gutter={0}>
                        <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Movie Type:-" name="movie_type" rules={[{ required: true, message: 'Please required movie type!' }]}>
                              <Input type="text" name="movie_type" onChange={(e) => { HandleChange(e, "movie_type") }} placeholder="Enter movie_type..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          
                      </Col>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Choice Movie Logo:-" name="movie_logo" rules={[{ required: true, message: 'Please required movie logo!' }]}>
                              <Input type="file" name="movie_logo" onChange={(e)=>{HandleChange(e,"movie_logo")}} placeholder="Enter movie_logo ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          
                      </Col>
                      </Row>
                      <Row gutter={0}>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Booking Status:-" name="booking_status" rules={[{ required: true, message: 'Please required booking status!' }]}>
                              <Input type="text" name="booking_status" onChange={(e) => { HandleChange(e, "booking_status") }} placeholder="Enter booking_status ..." style={{maxWidth : "300px"}}/>
                          </Form.Item>
                          </Col>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Enter Movie Status:-" name="movie_status" rules={[{ required: true, message: 'Please required movie status!' }]}>
                              <Input type="text" name="movie_status" onChange={(e) => { HandleChange(e, "movie_status") }} placeholder="Enter movie_status ..." style={{ maxWidth: "300px" }} />
                          </Form.Item>
                          </Col>
                      </Row>
                        
                           <Form.Item {...formTailLayout} label=""> 
                                <Button type="primary" onClick={(e) =>handleSubmit()} loading={props.loading}>Add City</Button>
                          </Form.Item>                           
                      </Form>
              </Card>
            </div>
    </>
  );
}
const mapStateToProps =  (state) => ({
  loading:state.movieReducer.loading,
})

const mapDispatchToProps = dispatch => {
  return {
    addmoviedata: (postdata) => dispatch(addmoviedata(postdata))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddMovie);
