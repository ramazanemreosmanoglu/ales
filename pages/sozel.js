import HeadSection from "../components/HeadSection"; // Header
import NavbarAles from "../components/NavbarAles";
import TestChooser from "../components/TestChooser";
import axios from "axios";
import { useState } from "react";


async function get_tests() {
    const res = await axios.get("http://127.0.0.1:8000/get_all_tests/")
    return res.data;
}

export default function Sozel() {
    const [tests, setTests] = useState({"tests": []})
    
    axios.get("http://127.0.0.1:8000/get_all_tests/?sozel").then((response) => {
        setTests(response.data);
    })

    return (
        <>  
            <HeadSection title="Ales Test - Sozel"/>
            <NavbarAles/>

            <TestChooser data={tests} branch="Sozel"/>
        </>
    )
}