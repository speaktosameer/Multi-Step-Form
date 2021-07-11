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
                        <Grid container spacing={2} style={{marginBottom:"10px",paddingTop:"20px"}}>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12}>
                            {renderTextArea({label:"Type of Products not allowedto be stored",name:"tproduct",state,handleOnChange})}
                            </Grid>
                        </Grid>     
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderText({label:"Additional Information"})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Typography>YesNo</Typography>
                            </Grid>
                        </Grid>    


                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12} sm={6}>
                            <Typography>Government Approval</Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            <RadioGroup row aria-label="gender" name="ftype" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            </RadioGroup>
                            </Grid>
                        </Grid>
                        
                        
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderInputText({label:"Free Space(sq.ft)",name:"fspace",state,handleOnChange})}
                            </Grid>
                        </Grid>    



                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12}>
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup row aria-label="gender" name="ftype" value={value} onChange={handleChange}>
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                            <FormControlLabel value="other" control={<Radio />} label="Other" />
                            <FormControlLabel value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                            </RadioGroup>



                            </Grid>
                        </Grid>                









                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12}>
                            {renderTextArea({label:"Year of WareHouse Construction",name:"yware",state,handleOnChange})}
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
