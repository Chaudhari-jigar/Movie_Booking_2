import React, { useState, useEffect } from 'react';
import { gettscreen,deletetscreen,updatetscreen,singletscreenrecord } from '../../store/action/theaterscreenAction';
import { getscreen } from "../../store/action/screenAction";
import { fetchmoviedata } from "../../store/action/movieAction"
import { connect } from 'react-redux';
import '../state.css';
import { Table, Space, Button, Breadcrumb, Card, Form, Modal, Input,Col,DatePicker,TimePicker,Row,Select,Switch } from 'antd';
import moment from 'moment'

const {Option} = Select;
const formItemLayout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 12,
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
const TheaterScreenList = (props) => {
  const [form] = Form.useForm();
  const [error,setError] = useState({
    IsValid:false,
    Screen_nameERROR:""
})
  const [obj, setMyObj1] = useState({
    _id: "",
    user_id: "",
    movie_id: "",
    screen_id:"",
    screen_time:"",
    start_date:"",
    end_date:"",
    end_time:"",
    price:""
  })
  const [ids, setIds] = useState("");
  const [show, setShow] = useState(false);
  const [ushow, usetShow] = useState(false);

  useEffect(() => {
    props.gettscreen();
    props.getscreen();
    props.fetchmoviedata();
    console.log(props.singletscreen);
    if (props.singletscreen.screen_id) {
      let olddata={...obj};
      console.log(props.singletscreen.screen_id)
      olddata.screen_id = props.singletscreen.screen_id;
      olddata._id = props.singletscreen._id;
      olddata.user_id = props.singletscreen.user_id;
      olddata.movie_id=props.singletscreen.movie_id;
      olddata.screen_time=props.singletscreen.screen_time;
      olddata.start_date=props.singletscreen.start_date;
      olddata.end_date=props.singletscreen.end_date;
      olddata.end_time=props.singletscreen.end_time;
      olddata.price=props.singletscreen.price;
      console.log(olddata);
      console.log(obj.start_date)
      setMyObj1(olddata);
    }
  }, [props.gettscreen,props.singletscreen])

  const deleteHandler = async (id) => {
    await props.deletetscreen(id);
    setShow(false);
  }

  const SingleSubmit = async () => {
    // let errors = { ...error, IsValid : true };
    // if(!obj.screen_name || obj.screen_name === "")
    // {
      
    //   if(!obj.screen_name || obj.screen_name === ""){
    //     errors.IsValid = false;
    //     errors.Screen_nameERROR = "Screenname Is Required "
    //   }

    // }else{
    //     errors.Screen_nameERROR = ""
    // }
    //   setError(errors);
    //   if(errors.IsValid==true){
    //       console.log(obj);
        await props.updatetscreen(obj._id, obj);
        // setOp(true);
        usetShow(false);
        obj._id = props.singletscreen._id;
        obj.screen_id = "";
      // }
    
  }

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setIds(id);
  }

  const SingleClose = () => {
    obj.screen_id = "";
    props.singletscreen.screen_id = "";
    usetShow(false)
  };

  const handleUpdate = async (_id) => {
    await props.singletscreenrecord(_id);
    usetShow(true);
  }

  const columns = [
    {
      title: 'Screen_Name',
    //   dataIndex: 'screen_name',
      key: 'screen_id',
      defaultSortOrder: 'descend',
      render: s=>s.screen_id.screen_name,
      sorter: (a, b) => a.screen_id.screen_name.length - b.screen_id.screen_name.length,
    },
     {
      title: 'Movie_Name',
      key: 'movie_id',
    //   dataIndex: 'moviename',
      defaultSortOrder:'descend',
      render: s => s.movie_id.moviename,
      sorter: (a, b) => a.movie_id.moviename.length - b.movie_id.moviename.length,
    }, {
        title: 'screen_time',
        key: 'screen_time',
        dataIndex: 'screen_time',
        sorter: (a, b) => a.screen_time.length - b.screen_time.length,
      },{
        title: 'end_time',
        key: 'end_time',
        dataIndex: 'end_time',
        sorter: (a, b) => a.end_time.length - b.end_time.length,
      },{
        title: 'Start Date',
        key: 'start_date',
        dataIndex: 'start_date',
        sorter: (a, b) => a.start_date.length - b.start_date.length,
      },{
        title: 'End Date',
        key: 'end_date',
        dataIndex: 'end_date',
        sorter: (a, b) => a.end_date.length - b.end_date.length,
      }
    , {
      title: 'Update',
      key: 'Update',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record._id)} type="primary">UPDATE</Button>
        </Space>
      ),
    }, 
    ,{
      title: 'Delete',
      key: 'Delete',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => handleShow(record._id)} style={{ backgroundColor: "Red", borderBlockColor: "Black", color: "White" }}>Delete</Button>
        </Space>
      ),
    }
  ];

  const HandleChange = (e, name) => {
    let olddata = {...obj};
    if((name === "screen_id") || (name === "movie_id"))
    {
      olddata[name] = e;
    }
    else if((name == "start_date") || (name == "end_date"))
    {
      if(e!=null)
      olddata[name] = new Date(e._d).toLocaleDateString();
    }
    else if((name == "screen_time") || (name == "end_time"))
    {
      if(e!=null)
      olddata[name] = new Date(e._d).toLocaleTimeString();
    }
    else
    {
      olddata[name] = e.target.value;
    }
    console.log(olddata);
    
    setMyObj1(olddata);
  }
  const optionTemplate = ()=>{
    return props.screens.map((screenlist)=>{
      const{_id,screen_name} = screenlist;
      return(
        <option value={_id} key={_id}>{screen_name}</option>
      )
    })
  }

  const optionMovieTemplate = ()=>{
   return props.movies.map((movielist)=>{
     const{_id,moviename} = movielist;
     return(
       <option value={_id} key={_id}>{moviename}</option>
     )
   })
 }
  return (
    <>
      <div className={"Title"} style={{ marginTop: "-29px"}}>
          </div>
      <Breadcrumb style={{ marginTop: "1px",textAlign:"right",marginBottom:"29px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Theater Screen</Breadcrumb.Item>
        <Breadcrumb.Item>View Theater Screen List</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-card-border-less-wrapper">
        <Card title="View Screen List" bordered={true} style={{ width: "auto",border:"5px" }}>
          <Table columns={columns} dataSource={props.tscreens} pagination={{ pageSize: 4 }} />
        </Card>
      </div>
      {/* Update Record */}
      <Modal title="Update Theater Screen"
       visible={ushow}
       onOk={() => SingleSubmit()}
       onCancel={() => SingleClose()}>
      <Form>
      <Row gutter={0}>
                          <Col span={12}>
                          <Input type="hidden" name="_id" value={obj._id} onChange={(e) => { HandleChange(e, "_id") }}/>
                          <Form.Item {...formItemLayout} label="SELECT SCREEN:-"  rules={[{ required: true, message: 'Please Select Screen Name' }]}>
                          <Select name="screen_id" value={obj.screen_id} onChange={(e)=>HandleChange(e,"screen_id")} placeholder="------ Select Screen-----" allowClear>
                                      {optionTemplate()}
                                  </Select>
                          </Form.Item>
                          
                      </Col>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="SELECT MOVIE:-"  rules={[{ required: true, message: 'Please required movie name!' }]}>
                          <Select name="movie_id" value={obj.movie_id} onChange={(e)=>HandleChange(e,"movie_id")} placeholder="------ Select Movie-----" allowClear>
                                      {optionMovieTemplate()}
                                  </Select>
                          </Form.Item>
                          
                      </Col>
                    </Row>
                      <Row gutter={0}>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Screen Time" rules={[{ required: true, message: 'Please Select Screen Time' }]}>
                              <TimePicker name="screen_time" value={moment(obj.screen_time,'HH:mm:ss')} onChange={(e) => { HandleChange(e, "screen_time") }} placeholder="Screen Time" />
                          </Form.Item>
                      </Col>
                        <Col span={12}>
                        <Form.Item {...formItemLayout} label="End Time"  rules={[{ required: true, message: 'Please Select End Time' }]}>
                              <TimePicker name="end_time" value={moment(obj.end_time,'HH:mm:ss')} onChange={(e) => { HandleChange(e, "end_time") }} placeholder="End Time"/>
                          </Form.Item>
                          
                      </Col>
                      </Row>
                      
                      <Row gutter={0}>
                      <Col span={12}>
                          <Form.Item {...formItemLayout} label="Starting Date:-"  rules={[{ required: true, message: 'Please Select Start Date!' }]}>
                          <DatePicker format="DD/MM/yyyy" value={moment(obj.start_date,'MM/DD/ YYYY')} name="start_date" onChange={(e) => { HandleChange(e, "start_date") }} placeholder="Start Date"/>
                          </Form.Item>
                          
                      </Col>
                      <Col span={12}>
                      <Form.Item {...formItemLayout} label="Ending Date:-"  rules={[{ required: true, message: 'Please Select End Date!' }]}>
                          <DatePicker format="DD/MM/yyyy" value={moment(obj.end_date,'MM/DD/ YYYY')} name="end_date" onChange={(e) => { HandleChange(e, "end_date") }} placeholder="End date"/>
                          </Form.Item>
                          </Col>
                      </Row>  
                      <Row gutter={0}>
                      <Col span={12}>
                      <Form.Item {...formItemLayout} label="Price:-"  rules={[{ required: true, message: 'Please Select End Date!' }]}>
                      <Input type="text" name="price" value={obj.price} onChange={(e) => { HandleChange(e, "price") }}/>
                          </Form.Item>
                          </Col>
                      </Row>                               
      </Form>
      </Modal>

      {/* Delete Record  */}
      <Modal title="Are you sure!"
        visible={show}
        onOk={() => deleteHandler(ids)}
        onCancel={() => handleClose()}>
        Do you want to delete this state?
      </Modal>
    </>
  );
}

const mapStateToProps = (state) => ({
  err: state.theaterscreenReducer.error,
  tscreens:state.theaterscreenReducer.tscreens,
  singletscreen: state.theaterscreenReducer.singletscreen,
  screens:state.screenReducer.screens,
  singleuser:state.userReducer.singleuser,
  movies:state.movieReducer.movies
})

const mapDispatchToProps = dispatch => {
  return {
    // getscreen: () => dispatch(getscreen()),
    // deletescreen: (_id) => dispatch(deletescreen(_id)),
    updatetscreen: (postdata, put) => dispatch(updatetscreen(postdata, put)),
    singletscreenrecord: (id) => dispatch(singletscreenrecord(id)),
      gettscreen: ()=>dispatch(gettscreen()),
      deletetscreen: (_id)=>dispatch(deletetscreen(_id)),
      getscreen: ()=> dispatch(getscreen()),
      fetchmoviedata:()=>dispatch(fetchmoviedata())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TheaterScreenList);
