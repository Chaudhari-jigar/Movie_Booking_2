import React, { useState, useEffect } from 'react';
// import {  Modal } from 'react-bootstrap';
import { fetchstatedata, deletestatedata, updatestatedata, singlestateDataFetch } from '../../store/action/stateAction';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiPlusMedical, BiSearch } from 'react-icons/bi';
import { FiAlignJustify } from "react-icons/fi";
import { Table,Space,Button,Breadcrumb,Card,Form,Modal,Input } from 'antd';
import '../state.css';

const StateList = (props) => {
  const [obj, setMyObj1] = useState({
    _id: "",
    state_name: "",
  })

  const [ids, setIds] = useState("");

  useEffect(() => {
    console.log(props.states.length);
    props.fetchstatedata();
  }, [props.fetchstatedata])

  const deleteHandler = async (id) => {
    await props.deletestatedata(id);
    setShow(false);
  }

  const SingleSubmit = async () => {
    await props.updatestatedata(obj._id, obj);
    console.log(obj);
    usetShow(false);
    obj.state_name = "";
    props.singlestate.state_name = "";
  }

  const [show, setShow] = useState(false);
  const [ushow, usetShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (id) => {
    setShow(true);
    setIds(id);
  }

  const SingleClose = () => {
    obj.state_name = "";
    props.singlestate.state_name = "";
    usetShow(false)
  };

  if (props.singlestate.state_name && !obj.state_name) {
    obj.state_name = props.singlestate.state_name;
    obj._id = props.singlestate._id;
  }
  const handleUpdate = async (_id) => {
    await props.singlestateDataFetch(_id);
    usetShow(true);
  }
 
  // const renderTableData = () => {
  //   return props.states.map((stateslist, index) => {
  //     const { _id, state_name } = stateslist
  //     return (
  //       <tr key={_id}>
  //         <td>{index + 1}</td>
  //         <td>{state_name}</td>
  //         <td><Button onClick={() => handleUpdate(_id)} >UPDATE</Button></td>
  //         <td><Button variant="danger" onClick={() => handleShow(_id)} >Delete</Button></td>
  //       </tr>
  //     )
  //   })
  // }
  
  const columns = [
    {
      title: 'state_Name',
      dataIndex: 'state_name',
      key: 'state_name',
      defaultSortOrder: 'descend',
      sorter: (a, b) => a.state_name.length - b.state_name.length,
    },{
      title: 'Update',
      key: 'Update',
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleUpdate(record._id)} type="primary">UPDATE</Button>
        </Space>
      ),
    },{
      title: 'Delete',
      key: 'Delete',
      render: (text, record) => (
        <Space size="middle">
          <Button type="danger" onClick={() => handleShow(record._id)} style={{backgroundColor:"Red",borderBlockColor:"Black",color:"White"}}>Delete</Button>
        </Space>
      ),
    }
  ];
  // }
  const HandleChange = (e, name) => {
    let olddata = { ...obj };
    olddata[name] = e.target.value;
    setMyObj1(olddata);
  }
  return (
    <>
      <div className={"Title"} style={{marginTop: "-29px" }}>
              State List 
          </div>
          <Breadcrumb style={{ marginTop: "1px" }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>State</Breadcrumb.Item>
              <Breadcrumb.Item>View State List</Breadcrumb.Item>
          </Breadcrumb>
            <div className="site-card-border-less-wrapper">
              <Card title="View State List" bordered={false} style={{ width: 1100 }}>
                <Table columns={columns} dataSource={props.states} pagination={{ pageSize: 4 }} />
              </Card>
            </div>
      {/* Update Record */}
       <Modal title="Update State"
        visible={ushow}
        onOk={() => SingleSubmit()}
        onCancel={() =>SingleClose()}>
            <Form>
                <Input type="hidden" name="_id" value={obj._id} onChange={(e) => HandleChange(e, "_id")} placeholder="Enter state name ..." />
                <Input title="Enter State Name:-" type="text" style={{ backgroundColor: "#e2e2e2", color: "#463334" }} name="state_name" value={obj.state_name} onChange={(e) => HandleChange(e, "state_name")} placeholder="Enter state name ..." />
            </Form>
      </Modal>

      {/* Delete Record  */}
       <Modal title="Are you sure!"
        visible={show}
        onOk={() => deleteHandler(ids)}
        onCancel={() =>handleClose()}>
              Do you want to delete this state?
      </Modal>  
    </>
  );
}

const mapStateToProps = (state) => ({
  err: state.stateReducer.error,
  Loading: state.stateReducer.loading,
  states: state.stateReducer.states,
  singlestate: state.stateReducer.singlestate,
})

const mapDispatchToProps = dispatch => {
  return {
    fetchstatedata: () => dispatch(fetchstatedata()),
    deletestatedata: (_id) => dispatch(deletestatedata(_id)),
    updatestatedata: (postdata, put) => dispatch(updatestatedata(postdata, put)),
    singlestateDataFetch: (id) => dispatch(singlestateDataFetch(id))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(StateList);
