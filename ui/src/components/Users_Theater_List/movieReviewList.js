import React, { useEffect, useState } from 'react';
import { Form } from 'antd';
import { fetchProfile, updateProfile } from '../../store/action/userAction';
import { fetchmoviedata } from '../../store/action/movieAction';
import { fetchreview } from '../../store/action/moviereviewAction';
import { connect } from 'react-redux';
import '../state.css';
import { Table, Breadcrumb, Card, Space, Button, Modal, Select } from 'antd';

const { Option } = Select;
const formItemLayout = {
    labelCol: {
        span: 24,
    },
    wrapperCol: {
        span: 12,
    },
};

const AllMovieReview = (props) => {

    const { form } = Form.useForm();
    useEffect(async () => {
        await props.fetchmoviedata();

        // if(props.movies.length!=0){
        //     console.log(props.movies._id)
        //     props.fetchreview(props.movies._id);
        // }
    }, [props.singleuser1, props.fetchmoviedata, props.fetchreview])

    const [obj, setMyObj] = useState({
        _id: "",
        user_id: "",
        movie_id: "",
        moviename: "",
        rate: "",
        description: "",
    });

    const optionTemplate = () => {
        return props.movies.map((movieList) => {
            const { _id, moviename } = movieList;
            return (
                <Option value={_id} key={_id}>{moviename}</Option>
            )
        })
    }

    const HandleChange = (e, name) => {
        console.log(name);
        console.log(e);
        let olddata = { ...obj };
        olddata[name] = e;
        console.log(e);
        setMyObj(olddata);
        props.fetchreview(e);
    }

    const columns = [
        {
            title: () => <b>Index</b>,
            key: 'Index',
            fixed: "left",
            render: (text, record, index) => index + 1,
        }, {
            title: () => <b>User Name</b>,
            key: 'user_id',
            defaultSortOrder: 'descend',
            render: s => s.user_id.user_name,
            sorter: (a, b) => a.user_id.user_name.length - b.user_id.user_name.length,
        }, {
            title: () => <b>Rate</b>,
            dataIndex: 'rate',
            key: 'rate',
            defaultSortOrder: 'descend',
            fixed: "left",
            sorter: (a, b) => a.rate.length - b.rate.length,
        }, {
            title: () => <b>Description</b>,
            dataIndex: 'description',
            key: 'description',
            defaultSortOrder: 'descend',
            sorter: (a, b) => a.description.length - b.description.length,
        }
    ];

    return (
        <>
            <div className={"Title"} style={{ marginTop: "-29px" }}>
            </div>
            <Breadcrumb style={{ marginTop: "1px", textAlign: "right", marginBottom: "29px", fontFamily: "auto", textTransform: "uppercase" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>All Review</Breadcrumb.Item>
                <Breadcrumb.Item>View MovieReview List</Breadcrumb.Item>
            </Breadcrumb>
            <Form form={form} name="AddForm">
                <Form.Item {...formItemLayout} label="Select Movie :-" name="movie_id">
                    <Select name="movie_id" onChange={(e) => HandleChange(e, "movie_id")} placeholder="------ Select Movie-----" allowClear>
                        {optionTemplate()}
                    </Select>
                </Form.Item>
            </Form>
            <div className="site-card-border-less-wrapper">
                <Card title="View Users List" bordered={true} style={{ width: "auto", border: "5px" }}>
                    <Table columns={columns} dataSource={props.mreviews} pagination={{ pageSize: 4 }} />
                </Card>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    err: state.movieReducer.error,
    users: state.userReducer.users,
    movies: state.movieReducer.movies,
    mreviews: state.moviereviewReducer.mreviews,
    singleuser1: state.userReducer.singleuser1
})

const mapDispatchToProps = dispatch => {
    return {
        fetchmoviedata: () => dispatch(fetchmoviedata()),
        updateProfile: (_id, put) => dispatch(updateProfile(_id, put)),
        fetchProfile: (_id) => dispatch(fetchProfile(_id)),
        fetchreview: (_id) => dispatch(fetchreview(_id)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AllMovieReview);