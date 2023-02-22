import './App.css';
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import {Layout} from "antd";
import {useEffect} from "react";
import {useActions} from "./hooks/useActions";

function App() {

    const {setUser, setIsAuth} = useActions()

    useEffect(() => {
        if(localStorage.getItem('auth')) {
            setUser({username: localStorage.getItem('username')})
            setIsAuth(true)
        }
    }, [])

    return (
        <Layout>
            <NavBar/>
            <Layout.Content>
                <AppRouter/>
            </Layout.Content>
        </Layout>
    );
}

export default App;
