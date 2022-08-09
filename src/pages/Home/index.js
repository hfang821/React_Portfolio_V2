import React, {useEffect} from "react";
import Header from "../../components/Header";
import { useNavigate  } from "react-router-dom";


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
        <div>
            <div className="header">
                <Header theme={theme} changePage={changePage} />
            </div>
        </div>
    )
}