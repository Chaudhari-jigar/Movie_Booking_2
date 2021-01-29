import React, { useState, useEffect } from 'react';
import { gettscreen, deletetscreen, updatetscreen, singletscreenrecord } from '../../store/action/theaterscreenAction';
import { getscreen } from "../../store/action/screenAction";
import { fetchmoviedata, singlemovieDataFetch } from "../../store/action/movieAction"
import { getmbookingTheaterDetails } from "../../store/action/userAction"
import { connect } from 'react-redux';
import '../state.css';
import { Table, Space, Button, Breadcrumb, Card, Form, Modal, Input, Col, DatePicker, TimePicker, Row, Select, Switch } from 'antd';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 12,
    },
};
const BookingDetails = (props) => {

    const { form } = Form.useForm();
    const [obj, setMyObj] = useState({
        _id: "",
        user_id: "",
        movie_id: "",
        moviename: "",
        rate: "",
        description: "",
    });

    useEffect( async () => {
        props.getscreen();
        // props.getmbookingTheaterDetails(props.singleuser._id);
    }, [props.getscreen])

    const optionTemplate = () => {
        return props.screens.map((movieList) => {
            const { _id, screen_name } = movieList;
            return (
                <Option value={_id} key={_id}>{screen_name}</Option>
            )
        })
    }
    
    const HandleChange = async (e, name) => {
        if(e !=undefined){
            let olddata = { ...obj };
            olddata[name] = e;
            setMyObj(olddata);
            await props.getmbookingTheaterDetails(props.singleuser._id,e);
        }
    }

    const columns = [
        {
            title: 'User name',
            key: 'user_id',
            defaultSortOrder: 'descend',
            render: s => s.user_id.user_name,
        }, {
            title: 'Movie_Name',
            key: 'movie_id',
            defaultSortOrder: 'descend',
            render: s => s.movie_id.moviename,
            sorter: (a, b) => a.movie_id.moviename.length - b.movie_id.moviename.length,

        }, {
            title: 'Booking Date',
            key: 'booking_id',
            defaultSortOrder: 'descend',
            render: s => s.booking_date
        }, {
            title: 'Booking Time',
            key: 'booking_id',
            defaultSortOrder: 'descend',
            render: s => s.booking_time
        }, {
            title: 'Total Price ',
            key: 'booking_id',
            defaultSortOrder: 'descend',
            render: s => s.total
        }

    ];

    return (
        <>
            <div className={"Title"} style={{ marginTop: "-29px" }}>
            </div>
            <Breadcrumb style={{ marginTop: "1px", textAlign: "right", marginBottom: "29px", fontFamily: "auto", textTransform: "uppercase" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Booking Details</Breadcrumb.Item>
                <Breadcrumb.Item>View Booking Details List</Breadcrumb.Item>
            </Breadcrumb>
            <Form form={form} name="AddForm">
                <Form.Item {...formItemLayout} label="Select Screen :-" name="screen_id">
                    <Select name="screen_id" onChange={(e) => HandleChange(e, "screen_id")} placeholder="------ Select Movie-----" allowClear>
                        {optionTemplate()}
                    </Select>
                </Form.Item>
            </Form>
            <div className="site-card-border-less-wrapper">
                <Card title="View Booking List" bordered={true} style={{ width: "auto", border: "5px" }}>
                    <Table columns={columns} dataSource={props.bookings} pagination={{ pageSize: 4 }} />
                </Card>
            </div>

        </>
    );
}

const mapStateToProps = (state) => ({
    screens: state.screenReducer.screens,
    singleuser: state.userReducer.singleuser,
    bookings: state.userReducer.bookings
})

const mapDispatchToProps = dispatch => {
    return {
        getscreen: () => dispatch(getscreen()),
        getmbookingTheaterDetails: (id,screen_id) => dispatch(getmbookingTheaterDetails(id,screen_id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
