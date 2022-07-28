import React, { ReactDOM, useEffect, useState } from "react";
import Counter from "./Counter";
import Loading from "./Loading";
import Tours from "./Tours";
const url = 'https://course-api.com/react-tours-project'

const App= ()=>{

    const [loading, setLoading] = useState(true);
    const [tours, setTours] = useState([]);

    const removeTour = (id) => {
        const newTours = tours.filter((tour) =>( tour.id !== id));
        setTours(newTours);
    }

    const fetchTours = async ()=>{
        setLoading(true);
        try {
            setLoading(false);
            const response = await fetch(url);
            const tours = await response.json();
            setTours(tours);    
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchTours();
    },[]);

        
    if(loading){
        return <Loading/>
    }
    if(tours.length === 0){
        return (
            <main>
                <div className="title">
                <h2>No Tours left</h2>
                <button className="btn" onClick={fetchTours}>
                   refresh
                </button>
                </div>
            </main>
        )
    }
    return (
        <main>
        {/* <h2>Tours Packages</h2> */}
        <Tours tours = {tours} removeTour = {removeTour}/>
        </main>
    )
}

export default App;