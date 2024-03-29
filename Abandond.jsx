import React from 'react';
import { useState } from 'react';
import axios from 'axios'
import TextField from '@mui/material/TextField';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


// const useStyles = makeStyles((theme) => ({
//     centerButton: {
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         height: '10vh', // Optional, to center vertically on the screen
//     },
// }));



const Abandond = () => {


    const [name, setName] = useState();
    const [nameD, setNameD] = useState();
    const [type, setType] = useState();
    const [step, setStep] = useState(0);
    const [part, setPart] = useState(0);
    const [num, setNum] = useState(0);
    const [steps, setSteps] = useState([]);

    useEffect(() => {

        async function fetchData() {
            try {

                const p = await axios.get("http://localhost:4000/api/get-abandond");
                console.log(p.data);
                console.log(p.data[0].steps);
                setSteps(p.data[0].steps);

            } catch (err) {
                console.log(err);
            }
        }
        fetchData();

    }, []);

    const handleUpdate = async (e) => {

        console.log(name,type,step,part,num);

        try {

            const p = await axios.post("http://localhost:4000/api/add-abandond", { name, type, step, part, num });
            console.log(p);

        } catch (err) {
            console.log(err);
        }


    }



    const handleDelete = async (e) => {


        console.log(nameD);

        try {

            const pp = await axios.post("http://localhost:4000/api/delete-abandond", { nameD });
            console.log(pp);

            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);


        } catch (err) {
            console.log(err);
        }

        try{
            const p = await axios.get("http://localhost:4000/api/get-abandond");
            console.log(p.data);
            console.log(p.data[0].steps);
            setSteps(p.data[0].steps);
        }catch(err){
            console.log(err);
        }


    }

    // const classes = useStyles();

    return <>


        

        {/* <Box sx={{justifyContent:'center'}}
            component="form"
            noValidate
            autoComplete="off"
        > */}
        <Paper elevation={8} sx={{margin:'50px auto', padding:'10px', width:'80vw'}}>
            <Grid container sx={{margin:'10px'}} component="form" noValidate autoComplete='off'>
            
                <Grid item xs={11} md={6} sx={{ textAlign:'center'}}>
                
                    <TextField
                    size="small" 
                        sx={{ margin: "10px", width: "80%" }}
                        required
                        id="outlined-required"
                        onChange={(e) => { setName(e.target.value) }}
                        label="Required"
                        placeholder='Name'
                        focused
                    />
                    <br/>
                    <TextField
                    size="small"
                        sx={{ margin: "10px", width: "80%" }}
                        id="outlined-required"
                        label="Required"
                        onChange={(e) => { setType(e.target.value) }}
                        placeholder="text or pdf"
                        focused
                    />
                    <br/>
                    <TextField
                    size="small"
                    sx={{ margin: "10px", width: "80%" }}
                        id="outlined-required"
                        label="Required"
                        type="number"
                        onChange={(e) => { setStep(e.target.value) }}
                        placeholder="Step"
                        focused
                    />

                </Grid>

                <Grid item xs={11} md={6} sx={{textAlign: "center"}}>
                    <TextField
                    size="small"
                    sx={{ margin: "10px", width: "80%" }}
                        id="outlined-required"
                        label="Required"
                        type="number"
                        onChange={(e) => { setPart(e.target.value) }}
                        placeholder="part"
                        focused
                    />
                    <br/>
                    <TextField
                    size="small"
                    sx={{ margin: "10px", width: "80%" }}
                        id="outlined-required"
                        label="Required"
                        type="number"
                        onChange={(e) => { setNum(e.target.value) }}
                        placeholder="Position"
                        focused
                    />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button variant="contained" onClick={handleUpdate}> Add </Button>
                </Grid>
                
            </Grid>
        </Paper>
        {/* </Box> */}

            {/* <Box sx={{justifyContent:'center'}}
            component="form"
            noValidate
            autoComplete="off"
        > */}
            
            <Paper elevation={8} sx={{margin:'50px auto', padding:'10px', width:'80vw'}}>
            <Grid container sx={{margin:'10px'}} component="form" noValidate autoComplete='off'>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                    <TextField
                    size="small" 
                        sx={{ margin: "10px", minWidth:'50%' }}
                        required
                        id="outlined-required"
                        onChange={(e) => { setNameD(e.target.value) }}
                        label="Required"
                        placeholder='Name'
                        focused
                    />
                </Grid>
                <Grid item xs={12} sx={{ textAlign: "center" }}>
                <Button variant="contained" onClick={handleDelete}>Delete</Button>
                </Grid>
                
                </Grid>
            </Paper>
        {/* </Box> */}


        {/* <Box> */}
        <Paper elevation={8} sx={{margin:'50px auto', padding:'10px', width:'80vw'}}>
            <Grid container sx={{margin:'10px'}}>
                <Grid item xs={12} sx={{ textAlign:'center'}}>
                {steps.map((val) => {
                    if (val.type === "pdf") {
                        return (
                            <>
                            <TextField
                            size="small"
                                sx={{ margin: "10px", minWidth:'50%' }}
                                required
                                id="outlined-required"
                                disabled
                                type="file"
                                label={val.name}
                            />
                            <br></br>
                            </>
                        );
                    }
                    else {
                        return (
                            <>
                            <TextField
                            size="small"
                                sx={{ margin: "10px", minWidth:'50%' }}
                                required
                                id="outlined-required"
                                disabled
                                type="text"
                                label="Required"
                                value={val.name}
                            />
                            <br></br>
                            </>
                        );
                    }
                }
                )}
                </Grid>
            </Grid>
        {/* </Box> */}

        </Paper>




    </>
}
export default Abandond;


