import React, { useState, useEffect } from 'react';
import { addscreen } from '../../store/action/screenAction';
import { connect } from 'react-redux';
import { Breadcrumb, Card, } from 'antd';
import {
    Form,
    Input,
    Button
} from 'antd';

const formItemLayout = {
    labelCol: {
        span: 4,
    },
    wrapperCol: {
        span: 8,
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

const AddForm = (props) => {
    const [form] = Form.useForm();
    const [obj, setMyObj] = useState({
        screen_name: "",
        rows: "",
        cols: ""
    })
    const [error, setError] = useState({
        screen_nameError: "",
        isValid: false
    });


    const handleSubmit = async () => {
        try {
            await props.addscreen(obj);
            props.history.replace("/theater/screenList");
        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    }

    const HandleChange = (e, name) => {
        let olddata = { ...obj };
        olddata[name] = e.target.value;
        setMyObj(olddata);
    }

    return (

        <>
            <div className={"Title"} style={{ marginTop: "-29px" }}>
            </div>
            <Breadcrumb style={{ marginTop: "1px", textAlign: "right", marginBottom: "30px" }}>
                <Breadcrumb.Item>Home</Breadcrumb.Item>
                <Breadcrumb.Item>Screen</Breadcrumb.Item>
                <Breadcrumb.Item>Add Screen</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-card-border-less-wrapper">
                <Card title="Add Screen Form" bordered={false} style={{ width: "auto" }}>
                    <Form form={form} name="AddForm">
                        <Form.Item {...formItemLayout} label="Enter Screen Name:-" >
                            <Input type="text" name="screen_name" onChange={(e) => { HandleChange(e, "screen_name") }} placeholder="Enter Screen name ..." style={{ maxWidth: "300px" }} />
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="Enter Total Rows:-" >
                            <Input type="number" name="rows" onChange={(e) => { HandleChange(e, "rows") }} placeholder="rows no ..." style={{ maxWidth: "300px" }} min="1" max="100"/>
                        </Form.Item>
                        <Form.Item {...formItemLayout} label="Enter Total Column :-" >
                            <Input type="number" name="cols" onChange={(e) => { HandleChange(e, "cols") }} placeholder="cols no ..." style={{ maxWidth: "300px" }} min="1" max="100"/>
                        </Form.Item>
                        <Form.Item {...formTailLayout} label="">
                            <Button type="primary" style={{ backgroundColor: "#058a5f" }} onClick={(e) => handleSubmit()}>Add Screen</Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>

        </>
    );
}
const mapDispatchToProps = dispatch => {
    return {
        addscreen: (postdata) => dispatch(addscreen(postdata))
    }
}
export default connect(null, mapDispatchToProps)(AddForm);
