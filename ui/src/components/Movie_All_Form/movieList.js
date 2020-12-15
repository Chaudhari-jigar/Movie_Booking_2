import React,{useState,useEffect} from 'react';
// import {Button,Card,Table,Modal,Form, Spinner }from 'react-bootstrap';
import {fetchmoviedata,addmoviedata,singlemovieDataFetch,deletemoviedata} from '../../store/action/movieAction';
import {connect} from 'react-redux';
import '../state.css';
import { Table, Space, Button, Breadcrumb, Card, Form, Modal, Input, Select } from 'antd';


const MovieList = (props) => {
  // console.log(props.singlestate);
  const [obj,setMyObj1]= useState({
    _id:"",
    moviename:"",
    releasedate:"",
    movie_status:"",
    movie_category:"",
    director_name:"",
    Actors_name:"",
    movie_description:"",
    movie_type:"",
    movie_logo:"",
    booking_status:""
  })
  
  const [ids,setIds] = useState("");
  
  useEffect(()=>{    
    props.fetchmoviedata();
  },[props.fetchmoviedata])
  
const deleteHandler = async (id) =>{
  await props.deletemoviedata(id);
  setShow(false);
}

const SingleSubmit = async () =>{
  await props.updatestatedata(obj._id,obj);
  // setMyObj1(props.singlestate);
  console.log(obj);
  //  console.log(obj._id);
  usetShow(false);
  obj._id=props.singlestate._id;
  obj.state_name="";
  //  props.history.replace(`/state`);
}

const [show, setShow] = useState(false);
const [ushow, usetShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = (id) => {setShow(true);
  setIds(id);
}

// const SingleClose = () => { 
//   obj.state_name="";
//   usetShow(false) 
// };

// if(props.singlestate.state_name && !obj.state_name){
//   setMyObj1(props.singlestate)
//   console.log(obj);
// }
const handleUpdate = async (_id) => {
  await props.singlestateDataFetch(_id); 
  usetShow(true);
}

  const renderTableData = () => {
    return props.movies.map((movieslist, index) => {
        
       const { _id, moviename,releasedate,movie_status,movie_description,director_name,Actors_name,movie_category,movie_type,booking_status,movie_logo } = movieslist
       
       return (
          <tr key={_id}>
             <td>{index+1}</td>
             <td>{moviename}</td>
             <td>{releasedate}</td>
             <td>{movie_status}</td>
             <td>{movie_description}</td>
             <td>{director_name}</td>
             <td>{Actors_name}</td>
             <td>{movie_category}</td>
             <td>{movie_type}</td>
             <td>{movie_status}</td>
             <td><img src={"http://localhost:3001"+movie_logo} height="15px" width="15px"/></td>
             <td><Button  >UPDATE</Button></td>
             <td><Button variant="danger" >Delete</Button></td>
          </tr>
       )
    })
 }
 const HandleChange = (e,name) =>{
  let olddata = {...obj};
  olddata[name] = e.target.value;
  setMyObj1(olddata);
}
const columns = [
  {
    title: () => <b>Index</b>,
    key: 'Index',
    fixed:"left",
    render : (text, record, index) => index+1,
  },{
    title: () => <b>Movie Name</b>,
    dataIndex: 'moviename',
    key: 'moviename',
    defaultSortOrder: 'descend',
    fixed:"left",
    sorter: (a, b) => a.moviename.length - b.moviename.length,
  },{
    title: () => <b>Release Date</b>,
    dataIndex: 'releasedate',
    key: 'releasedate',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.releasedate.length - b.releasedate.length,
  },{
    title: () => <b>Movie Status</b>,
    dataIndex: 'movie_status',
    key: 'movie_status',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.movie_status.length - b.movie_status.length,
  },{
    title: () => <b>Movie Description</b>,
    dataIndex: 'movie_description',
    key: 'movie_description',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.movie_description.length - b.movie_description.length,
  },{
    title: () => <b>Director Name</b>,
    dataIndex: 'director_name',
    key: 'director_name',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.director_name.length - b.director_name.length,
  },{
    title: () => <b>Actors Name</b>,
    dataIndex: 'Actors_name',
    key: 'Actors_name',
    defaultSortOrder: 'descend',
    // sorter: (a, b) => a.Actors_name.length - b.Actors_name.length,
  },{
    title: () => <b>Movie Category</b>,
    dataIndex: 'movie_category',
    key: 'movie_category',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.movie_category.length - b.movie_category.length,
  },{
    title: () => <b>Movie Type</b>,
    dataIndex: 'movie_type',
    key: 'movie_type',
    defaultSortOrder: 'descend',
    // sorter: (a, b) => a.movie_type.length - b.movie_types.length,
  },{
    title: () => <b>Movie Status</b>,
    dataIndex: 'movie_status',
    key: 'movie_status',
    defaultSortOrder: 'descend',
    sorter: (a, b) => a.movie_status - b.movie_status,
  },{
    title: () => <b>Image</b>,
    dataIndex: "movie_logo",
    key: 'movie_logo',
    defaultSortOrder: 'descend',
    render:  (text,record) => <img src={"http://localhost:3001"+record.movie_logo} height="25px" width="25px" />
    // sorter: (a, b) => a.movie_status - b.movie_status,
  },{
    title: () => <b>Update</b>,
    key: 'Update',
    fixed:"right",
    render: (text, record) => (
      <Space size="middle">
        <Button onClick={() => handleUpdate(record._id)} type="primary">UPDATE</Button>
      </Space>
    ),
  },{
    title: () => <b>Delete</b>,
    key: 'Delete',
    fixed:"right",
    render: (text, record) => (
      <Space size="middle">
        <Button type="danger" onClick={() => handleShow(record._id)} style={{backgroundColor:"Red",borderBlockColor:"Black",color:"White"}}>Delete</Button>
      </Space>
    ),
  }
];

  return (
    <>
      <div className={"Title"} style={{ marginTop: "-29px"}}>
        {/* City List */}
          </div>
      <Breadcrumb style={{ marginTop: "1px",textAlign:"right",marginBottom:"29px" }}>
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>Movie</Breadcrumb.Item>
        <Breadcrumb.Item>View Movie List</Breadcrumb.Item>
      </Breadcrumb>
      <div className="site-card-border-less-wrapper">
        <Card title="View Movie List" bordered={true} style={{ width: "auto",border:"5px" }}>
          <Table columns={columns} dataSource={props.movies} pagination={{ pageSize: 4 }} scroll={{ x: 1300 }}/>
        </Card>
      </div>

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

const mapStateToProps =  (state) => ({
  err:state.movieReducer.error,
  Loading:state.movieReducer.loading,
  movies:state.movieReducer.movies,
  singlestate:state.stateReducer.singlestate,
})

const mapDispatchToProps = dispatch =>{
  return{
    fetchmoviedata:()=>dispatch(fetchmoviedata()),
    deletemoviedata:(_id)=>dispatch(deletemoviedata(_id))
    // updatestatedata:(postdata,put) => dispatch(updatestatedata(postdata,put)),
    // singlestateDataFetch:(id)=>dispatch(singlestateDataFetch(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(MovieList);