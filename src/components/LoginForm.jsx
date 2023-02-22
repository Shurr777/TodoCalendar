import React, {useState} from 'react';
import {Button, Form, Input} from "antd";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";


const LoginForm = () => {


    const {error, isLoading} = useSelector(state => state.authReducer)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const {login} = useActions()


    const onFinish = () => {
        login(username, password)

    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            {
                error && <div style={{color: 'red'}}>
                    {error}
                </div>
            }
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[{required: true, message: 'Введите логин'}]}
            >
                <Input value={username}
                       onChange={e => setUsername(e.target.value)}
                />
            </Form.Item>

            <Form.Item
                label="Пароль"
                name="password"
                rules={[{required: true, message: 'Введите пароль'}]}
            >
                <Input.Password value={password}
                                onChange={e => setPassword(e.target.value)}
                />
            </Form.Item>
            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={isLoading}
                >
                    Войти в систему
                </Button>
            </Form.Item>
        </Form>
    );
};

export default LoginForm;