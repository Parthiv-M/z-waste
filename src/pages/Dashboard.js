import React from "react"
import FoodCard from "../components/FoodCard"
import logo from "./../assets/logo.png"
import MapComponent from "../components/MapComponent"

const Dashboard = () => {

    return (
        <div style={{ minHeight: "100vh", minWidth: "100vw" }}> 
            <div className="w-100 py-4 px-4 bg-white d-flex align-items-center justify-content-between flex-md-row flex-column" style={{ top: 0 }}>
                <div className="d-flex">
                    <img src={logo} alt="logo" className="mx-4"></img>
                    <p className="my-auto font-weight-bold" style={{ fontSize: "2rem" }}>
                        Dashboard
                    </p>
                </div>
                <p className="font-weight-light p-2" style={{ borderRadius: 20, border: "1px solid black" }}>Current location</p>
            </div>
            <div className="mx-auto row h-100 w-100">
                <div className="col-md-8 col-12" style={{ minHeight: "fit-content", maxHeight: "100vh" }}>
                    <MapComponent />
                </div>
                <div className="col-md-4 col-12" style={{ overflow: "auto" }}>
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                    <FoodCard />
                </div>
            </div>
        </div>
    );
}

export default Dashboard;