import {Routes, Route} from "react-router-dom";

import Home from "../pages/Home.jsx"
import Bodycare from "../pages/Bodycare.jsx"
import HandsSoap from "../pages/HandsSoap.jsx"
import Home_Fragrance from "../pages/Home_Fragrance.jsx"
import TopOffer from "../pages/TopOffer.jsx"
import GetInspired from "../pages/GetInspired.jsx"
import Gifts from "../pages/Gifts.jsx";
import New_and_now from "../pages/New_and_now.jsx";
import SinglePage from "../pages/SingleProduct.jsx"
import Login from "../pages/login.jsx";

function AllRoutes(){

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bodycare" element={<Bodycare />} />
            <Route path="/handsSoap" element={<HandsSoap />} />
            <Route path="/home_fragrance" element={<Home_Fragrance />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/top_offers" element={<TopOffer />} />
            <Route path="/getinspired" element={<GetInspired />} />
            <Route path="/new&now" element={<New_and_now />} />
            <Route path="/new&now/:id" element={<SinglePage />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    )

}export default AllRoutes