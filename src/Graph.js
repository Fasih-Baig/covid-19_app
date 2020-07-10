import React from "react";
import {Line, Bar, Pie} from "react-chartjs-2";

function Graph(props) {
    const globalData = {
        labels:["Until_Now"],
        datasets: [
            {
                label: 'Infected',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.6)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [props.GlobalData.TotalConfirmed]
            }, {
                label: 'Recovered',
                backgroundColor: 'rgba(144,238,144,0.2)',
                borderColor: 'rgba(144,238,144,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(144,238,144,0.6)',
                hoverBorderColor: 'rgba(144,238,144,1)',
                data: [props.GlobalData.TotalRecovered] 
            }, {
                label: 'Death',
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,0,0,0.6)',
                hoverBorderColor: 'rgba(255,0,0,1)',
                data: [props.GlobalData.TotalDeaths]
            }
        ]
    };
    const data = {
        labels: Object.keys(props.CountryData).map((key) => props.CountryData[key].Date),
        datasets: [
            {
                label: 'Infected',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                pointStyle: 'rectRounded',
                pointBackgroundColor: 'rgba(255,99,132)',
                lineTension: 0.4,
                data: Object.keys(props.CountryData).map((key) => props.CountryData[key].Confirmed)
            }, {
                label: 'Recovered',
                backgroundColor: 'rgba(144,238,144,0.2)',
                borderColor: 'rgba(144,238,144,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(144,238,144,0.4)',
                hoverBorderColor: 'rgba(144,238,144,1)',
                pointStyle: 'rectRounded',
                pointBackgroundColor: 'rgba(144,238,144)',
                lineTension: 0.4,
                data: Object.keys(props.CountryData).map((key) => props.CountryData[key].Recovered)
            }, {
                label: 'Death',
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,0,0,0.4)',
                hoverBorderColor: 'rgba(255,0,0,1)',
                pointStyle: 'rectRounded',
                pointBackgroundColor: 'rgba(255,0,0)',
                lineTension: 0.4,
                data: Object.keys(props.CountryData).map((key) => props.CountryData[key].Deaths)
            }
        ]
    };
    const pieGData = {
        lebel: ['Infected','Recovered','Deaths'],
        datasets: [{
            data: [ props.GlobalData.TotalConfirmed,
                    props.GlobalData.TotalRecovered,
                    props.GlobalData.TotalDeaths
                ],
            backgroundColor: [
                'rgba(255,99,132,0.2)',
                'rgba(144,238,144,0.2)',
                'rgba(255,0,0,0.2)'
            ],
            hoverBackgroundColor: [
                'rgba(255,99,132)',
                'rgba(144,238,144)',
                'rgba(255,0,0)'
            ]
        }]
    }
    return (
        <div style={{marginTop:"20px"}}>
            {props.indexer < 186 ? 
            <Line 
                data={data} 
            /> : 
            <Bar
                data={globalData}
                width={1000}
                height={300}
                options={{
                    maintainAspectRatio: false
                }}
            /> } 
        </div>
    );
}

export default Graph;