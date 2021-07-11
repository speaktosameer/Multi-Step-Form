import {Box,Paper,Grid,Typography,Text} from "@material-ui/core";
import { renderText,renderInputText, renderSelect,renderButton,renderTextArea,renderRadio } from '../Common/display';
import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export default function Step3({state,handleOnChange,handleNext,handlePrev}) {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
      setValue(event.target.value);
    };

  
    return (
        <Paper component={Box} p={2}>
            {/* <Box mt={1} mb={2}>
                        {renderText({ label: "Initial Details" })}
                        </Box> */}
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12}>
                            {renderTextArea({label:"Type of Products not allowedto be stored",name:"tproduct",state,handleOnChange})}
                            </Grid>
                        </Grid>     


                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6} style={{fontWeight: "bold" }}>
                            <Typography variant="h5" component="b">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3} style={{fontWeight: "bold" }}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3} style={{fontWeight: "bold" }}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>




                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h2">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h2">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h2">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>    
                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h2">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>    
                        <Grid container spacing={2} style={{marginBottom:"10px", paddingLeft:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography variant="h6" component="h2">
                            Additional Information
                            </Typography>
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            Yes
                            </Typography>   
                            </Grid>
                            <Grid item xs={6} sm={3}>
                            <Typography variant="h6" component="h2">
                            No
                            </Typography>   
                            </Grid>
                        </Grid>    

                               
                        <Grid container spacing={2} justify="center">
                        <Box p={2}>
                        {renderButton({label:"Previous", handleOnClick:handlePrev})}
                        </Box>
                        <Box p={2}>
                        {renderButton({label:"Next", handleOnClick:handleNext})}
                        </Box>
                            
                        </Grid>


        </Paper>
    )
}
