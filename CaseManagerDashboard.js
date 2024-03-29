import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Pie } from "react-chartjs-2";
import 'chart.js/auto';
import { useNavigate } from 'react-router-dom';
import { Typography, Box } from '@mui/material/';
import ChildList from "../Component/ChildList";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Card } from '@material-ui/core';
import "../Css/CaseManagerDashboard.css";

const generateRandomColors = (numColors) => {
    const colors = [];
    for (let i = 0; i < numColors; i++) {
        const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
            Math.random() * 256
        )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
        colors.push(color);
    }
    return colors;
};

function formatString(inputString) {
    // Capitalize the first letter of the string
    const formattedString = inputString.charAt(0).toUpperCase() + inputString.slice(1);

    // Add a space before every capital letter
    const finalString = formattedString.replace(/([A-Z])/g, ' $1');

    return finalString;
}



const CaseManagerDashboard = () => {
    const labels1 = ["Assigned", "Not Assigned", "Completed"],
        labels2 = ["Andheri", "Borivali", "Kurla"],
        datasets = [
            {
                data: [20, 30, 23],
                backgroundColor: generateRandomColors(3)

            }
        ];

    const [label1, setLabel1] = useState([]);
    const [label2, setLabel2] = useState([]);
    const [label3, setLabel3] = useState([]);
    const [dataset3, setDataset3] = useState([]);
    const [dataset1, setDataset1] = useState([]);
    const [dataset2, setDataset2] = useState([]);



    var state = useSelector((state) => ({ ...state }));



    useEffect(() => {

        async function fetchData() {
            try {


                function createLabelAndCount1(data) {
                    const districtCounts = {};

                    for (const item of data) {
                        const district = item.district;
                        if (district in districtCounts) {
                            districtCounts[district] += 1;
                        } else {
                            districtCounts[district] = 1;
                        }
                    }
                    const labels = Object.keys(districtCounts);
                    const ldata = Object.values(districtCounts);
                    const backgroundColor = generateRandomColors(labels.length);

                    return {
                        labels: labels,
                        count: [{data:ldata,backgroundColor}]
                    };
                }
                function createLabelAndCount2(data) {
                    const statusCounts = {};

                    for (const item of data) {
                        const status = item.status;
                        if (status in statusCounts) {
                            statusCounts[status] += 1;
                        } else {
                            statusCounts[status] = 1;
                        }
                    }
                    const labels = Object.keys(statusCounts);
                    const ldata = Object.values(statusCounts);
                    const backgroundColor = generateRandomColors(labels.length);

                    return {
                        labels: labels,
                        count: [{data:ldata,backgroundColor}]
                    };
                }
                


                if (state.user != null && state.user.role == "manager") {
                    var data = await axios.post("http://localhost:4000/api/get-all-child-data");
                    data = data.data;
                    console.log("CASE MANAGER",data);

                    
                    var pie1 = (createLabelAndCount1(data));
                    var pie2 = (createLabelAndCount2(data));
                    setLabel1(pie1.labels);
                    setLabel2(pie2.labels);
                    setDataset1(pie1.count);
                    setDataset2(pie2.count)

                    var rData = await axios.get("http://localhost:4000/api/get-social-worker");
                    rData = rData.data;

                    var pie3 = (createLabelAndCount1(rData));
                    setLabel3(pie3.labels);
                    setDataset3(pie3.count)



                } else if (state.user != null && state.user.role == "root") {

                }
            } catch (err) {
                console.log(err);
            }



        }
        fetchData();
    }
        , []);

    console.log(label1, label2,dataset1,dataset2);

    return (

        <>

        <div style={{minHeight:'100vh', width:'100%', textAlign:'center', padding:'20px'}}>
           
        <br/> <h1> Children Information </h1>
            

        <Grid container spacing={3} padding={2} sx={{justifyContent:'center'}}>
        {/* <Grid item xs={12} md={2}></Grid> */}
        <Grid item xs={12} md={4} mt={2}className="grid-item">
          <Card className= "card-item" style={{borderRadius:'25px', transition:'transform 5.5s, box-shadow 0.5s'}}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Child Cases Status',
                    font: {
                      size: 26,
                      weight: 'bold',
                    },
                  },
                },
                height: 400,
                width: 400,
              }}
              data={{
                labels: label2,
                datasets: dataset2,
              }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={4} mt={2}className="grid-item">
          <Card className= "card-item" style={{borderRadius:'25px', transition:'transform 5.5s, box-shadow 0.5s'}}>
            <Pie
              options={{
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                  title: {
                    display: true,
                    text: 'Region wise Child Cases',
                    font: {
                      size: 26,
                      weight: 'bold',
                    },
                  },
                },
                height: 400,
                width: 400,
              }}
              data={{
                labels: label1,
                datasets: dataset1,
              }}
            />
          </Card>
        </Grid>
        {/* <Grid item xs={12} md={2}></Grid> */}
      </Grid>
            


<<<<<<< HEAD
            <br/> <h1> Social Workers Information </h1> <br/>
            
            <Grid container spacing={3}  marginBottom={7}>
=======
            <Box display="flex" justifyContent="center" alignItems="center" paddingTop={3}>
                <h1 variant="h4" align="center" fontWeight="bold">
                    Social Workers Information
                </h1>
            </Box>
            <Grid container spacing={3} marginTop={1} marginBottom={7}>
>>>>>>> ed562f9a32a1bc2c09e1a6aefecdd940b0f150a4
                <Grid item xs={12} md={3}></Grid>
                <Grid item xs={12} md={6} className="grid-item">
                    <Card className= "card-item" style={{borderRadius:'25px', transition:'transform 5.5s, box-shadow 0.5s'}}>
                    <Pie
                        options={{
                            responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                title: {
                                    display: true,
                                    text: 'Region wise Social Workers',
                                    font: {
                                        size: 26,
                                        weight: 'bold',
                                    },
                                },
                            },
                            height: 400,
                            width: 400,
                        }}
                        data={{
                            labels: label3,
                            datasets: dataset3
                        }}
                    />
                  </Card>  
                </Grid>
                <Grid item xs={12} md={3}></Grid>
            </Grid>

            </div>
        </>
    );
}

export default CaseManagerDashboard;

