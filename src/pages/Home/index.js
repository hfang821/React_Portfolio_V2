import React, {useEffect} from "react";
import Header from "../../components/Header";
import Footer from '../../components/Footer';
import Nav from "../../components/NavBar";
import { useNavigate  } from "react-router-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home({theme, currentPage, setCurrentPage}){
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage("home"); 
    })

    const changePage = (e, link) => {
        e.preventDefault();
        navigate(link);
    };

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <Nav />
                </div>
            </div>
            <div className="row justify-content-md-center" id="header">
                <div className="header">
                    <Header theme={theme} changePage={changePage} />
                </div>
            </div>
            <Footer theme={theme} />
        </div>
    )
}