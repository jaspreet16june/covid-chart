import React from 'react'
import {MDBContainer} from "mdbreact";
import {Pie} from "react-chartjs-2";

const Piechart = () => {
    const data ={
        pie :{
            labels :['Red','green','blue'],
            datasets:[
            {
                background:[
                    "red",
                    "green",
                    "blue"
                ]
            }
        ]
    }
}
    return (
        <MDBContainer>
            <Pie data={data} options={{responsive:true}}/>
        </MDBContainer>
    )
}

export default Piechart;
