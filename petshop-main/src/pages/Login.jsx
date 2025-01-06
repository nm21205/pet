import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import {useNavigate} from 'react-router-dom';
import './login.scss';

const Login = () => {
  const navigate = useNavigate();
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <div className='login'>
        <h2>로그인</h2>
        <div className="loginBox">
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item
            label="아이디"
            name="user_id"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="비밀번호"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" label={null}>
            <Checkbox danger>아이디 저장</Checkbox>
          </Form.Item>

          <Form.Item label={null}>
            <Button type="primary" danger htmlType="submit">
              로그인
            </Button>
          </Form.Item>
        </Form>
        </div>
    </div>
  );
};

export default Login;