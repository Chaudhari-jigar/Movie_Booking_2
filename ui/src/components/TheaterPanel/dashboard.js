import React, { Component, useEffect } from "react";
import {connect} from 'react-redux';
import {fetchDashboradRecordTheaterPanel} from '../../store/action/userAction';
import { Card,CardDeck } from "react-bootstrap";
import {BsFillGridFill,BsServer,BsPuzzleFill,BsPeopleFill} from "react-icons/bs"

const Dashboard = (props) => {
  useEffect(() => {
    console.log(props.singleuser._id);
    props.fetchDashboradRecordTheaterPanel(props.singleuser._id);
  },[props.fetchDashboradRecordTheaterPanel]);
  // render: function() {
    return (
      <>
      <div >
      <CardDeck style={{    display: "flex"}}>
    <Card border="Primary" style={{ width: '18rem',backgroundColor:"#1e9ee8",color:"White",padding:"20px",
    marginLeft: "20px" }} >
      <Card.Header style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Total Screen</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text  style={{fontSize: "24px",marginTop: "6px"}}>{props.singleDashboard.screen}</Card.Text>
        <BsServer style={{fontSize: "65px",marginLeft: "131px", marginTop: "-54px"}}/>
      </Card.Body>
    </Card>
    <Card border="Success" style={{ width: '18rem',backgroundColor:"#b9ad16",color:"White",marginLeft: "20px",padding:"20px" }} >
      <Card.Header style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Total TheaterScreen</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{fontSize: "24px",marginTop: "6px"}}>{props.singleDashboard.theaterScreen}</Card.Text>
        <BsPuzzleFill style={{fontSize: "65px",marginLeft: "131px", marginTop: "-54px"}}/>  
      </Card.Body>
    </Card>
    <Card border="Success" style={{ width: '18rem',backgroundColor:"#25b125",color:"White",marginLeft: "20px",padding:"20px" }} >
      <Card.Header style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Total Movies</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{fontSize: "24px",marginTop: "6px"}}>{props.singleDashboard.Movies}</Card.Text>
        <BsFillGridFill style={{fontSize: "65px",marginLeft: "131px", marginTop: "-54px"}}/>        
      </Card.Body>
    </Card>
    <Card bg="danger" style={{ width: '18rem',backgroundColor:"#f52e2e",color:"White",marginLeft: "20px",padding:"20px" }} >
      <Card.Header style={{color:"white",fontFamily:"auto",textTransform:"uppercase"}}>Total Movie Type</Card.Header>
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text style={{fontSize: "24px",marginTop: "6px"}}>12</Card.Text>
        <BsPeopleFill style={{fontSize: "65px",marginLeft: "131px", marginTop: "-54px"}}/>  
      </Card.Body>
    </Card>
    </CardDeck>
    </div>
     </>
    );
}
const mapStateToProps =  (state) => ({
  singleDashboard:state.userReducer.singleDashboard,
  singleuser:state.userReducer.singleuser
})
const mapDispatchToProps = dispatch =>{
  return{
    fetchDashboradRecordTheaterPanel:(id)=>dispatch(fetchDashboradRecordTheaterPanel(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Dashboard);