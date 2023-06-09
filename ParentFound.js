import { useState } from 'react'
import { Grid, Select, Typography, Button, Box, MenuItem, TextField, Input } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';



export default function ProcessStep1(props) {


    return (
        <>
            <Grid>

                <Box sx={{ mt: 5 }}>
                    
                    <Grid sx={{ pl: 2 }}>
                    
                    <FormGroup>
                        <FormControlLabel required control={<Checkbox />} label="Parent Found" />
                    </FormGroup>
                        <h6> upload document </h6>
                        <Input
                            value=""
                            onChange={() => console.log("create function")}
                            type="file"
                            sx={{ mr: 2, mb: 1, maxWidth: '200px' }}
                        />
                        
                        <Grid mt={1}>
                            <TextField
                                value=""
                                onChange={() => console.log("create function")}
                                multiline
                                maxRows={3}
                                placeholder='Reason For Closing'
                            />
                        </Grid>
                    </Grid>
                </Box>

                <Grid align='center' sx={{ mt: 4 }}>
                    <Button variant="contained"> Close </Button>
                </Grid>
            </Grid>

        </>

    )
}
