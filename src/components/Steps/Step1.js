import {Box,Paper,Grid} from "@material-ui/core";
import { renderText,renderInputText, renderSelect,renderButton } from '../Common/display';
import React from 'react'

export default function Step1({state,handleOnChange,handleNext}) {
    return (
        <Paper component={Box} p={2}>
            <Box mt={1} mb={2}>
                        {renderText({ label: "Initial Details" })}
                        </Box>
                        <Grid container spacing={2} style={{marginBottom:"20px"}}>
                            <Grid item xs={12} sm={6}>
                            {renderInputText({label:"First Name", name:"firstname", state, handleOnChange})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            {renderInputText({label:"Last Name",name:"lastname", state, handleOnChange})}
                            </Grid>
                        </Grid>
                        
                        
                        <Grid container spacing={2} style={{marginBottom:"20px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderInputText({label:"Phone Number",name:"phone",state,handleOnChange})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {renderInputText({label:"Email",name:"email",state,handleOnChange})}
                            </Grid>
                        </Grid>


                        <Grid container spacing={2} style={{marginBottom:"20px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderSelect({label:"Type of WareHouse",name:"ware",options:[{key:'Regular',value:'regular'},{key:'Air Condition',value:'aircondition'}],state,handleOnChange})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                {renderInputText({label:"City",name:"city",state,handleOnChange})}
                            </Grid>
                        </Grid>


                        <Grid container spacing={2} style={{marginBottom:"20px"}}>
                            <Grid item xs={12}>
                                {renderSelect({label:"Type of WareHouse",name:"ware",options:[{key:'Regular',value:'regular'},{key:'Air Condition',value:'aircondition'}],state,handleOnChange})}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"20px"}}>
                            <Grid item xs={12}>
                                {renderSelect({label:"Type of WareHouse",name:"ware",options:[{key:'Regular',value:'regular'},{key:'Air Condition',value:'aircondition'}],state,handleOnChange})}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} justify="flex-end">
                        <Box p={2}>
                        {renderButton({label:"Next", handleOnClick:handleNext})}
                        </Box>
                            
                        </Grid>

        </Paper>
    )
}