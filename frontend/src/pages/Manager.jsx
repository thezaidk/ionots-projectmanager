import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Appbar from "../components/Appbar";

export default function () {
    const navigate = useNavigate();

    useEffect(() => {
        const role = localStorage.getItem('role');
        if (!role) navigate('/');
        
    }, [navigate]);

    return (
        <div className="relative h-full">
            <div className="bg-[#363259] absolute top-[10rem] z-5 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#191549]"></div>
            <div className="bg-[#3d32b4] absolute top-[60rem] z-5 right-[11rem] h-[10.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#5e3c3d]"></div>
            <Appbar app={"Project Manager"} />
            
        </div>
    )
}