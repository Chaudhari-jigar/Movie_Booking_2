import React, { useState, useEffect } from 'react';
import { gettscreen, deletetscreen, updatetscreen, singletscreenrecord } from '../../store/action/theaterscreenAction';
import { getscreen } from "../../store/action/screenAction";
import { fetchmoviedata, singlemovieDataFetch } from "../../store/action/movieAction"
import { getmbookingTheaterDetails } from "../../store/action/userAction"
import { connect } from 'react-redux';
import '../state.css';
import { Table, Space, Button, Breadcrumb, Card, Form, Modal, Input, Col, DatePicker, TimePicker, Row, Select, Switch } from 'antd';

const BookingDetails = (props) => {


    useEffect(() => {
        console.log(props.singleuser)
        props.getmbookingTheaterDetails(props.singleuser._id);
    }, [props.gettscreen])

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
            <div className="site-card-border-less-wrapper">
                <Card title="View Booking List" bordered={true} style={{ width: "auto", border: "5px" }}>
                    <Table columns={columns} dataSource={props.bookings} pagination={{ pageSize: 4 }} />
                </Card>
            </div>

        </>
    );
}

const mapStateToProps = (state) => ({
    singleuser: state.userReducer.singleuser,
    bookings: state.userReducer.bookings
})

const mapDispatchToProps = dispatch => {
    return {
        getmbookingTheaterDetails: (id) => dispatch(getmbookingTheaterDetails(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BookingDetails);
