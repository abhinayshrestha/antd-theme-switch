import { Button } from 'antd';
import "antd/dist/antd.css";
import './App.css';
import "./sass/main.scss"
import AppLayout from './Components/AppLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return <BrowserRouter>
        <AppLayout />
  </BrowserRouter> 

}

export default App;
