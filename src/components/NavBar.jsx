import React from 'react';
import {Layout, Menu, Row} from "antd";
import {useHistory} from "react-router-dom";
import {RouteNames} from "../routers/routers";
import {useSelector} from "react-redux";
import {useActions} from "../hooks/useActions";

const NavBar = () => {

    const router = useHistory()
    const isAuth = useSelector(state => state.authReducer.isAuth)
    const user = useSelector(state => state.authReducer.user.username)
    const {logout} = useActions()

    return (
        <Layout.Header>
            <Row justify={'end'}>
                {isAuth ?
                    <>
                        <div style={{color: 'white'}}>
                            {user}
                        </div>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={logout}
                                key={1}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <>
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item
                                onClick={() => router.push(RouteNames.Logn)}
                                key={1}
                            >
                                Login
                            </Menu.Item>
                        </Menu>
                    </>
                }
            </Row>
        </Layout.Header>
    );
};

export default NavBar;