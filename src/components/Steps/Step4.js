import {Box,Paper,Grid} from "@material-ui/core";
import { renderText,renderInputText, renderSelect,renderButton,renderTextArea, renderUpload } from '../Common/display';
import React from 'react'

export default function Step({state,handleOnChange,handleNext,handlePrev}) {
    return (
        <Box p={2}>
            {/* <Box mt={1} mb={2}>
                        {renderText({ label: "Initial Details" })}
                        </Box> */}
                       
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12}>
                            {renderTextArea({label:"Comments",name:"comment",state,handleOnChange})}
                            </Grid>
                        </Grid>

                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderText({label:"Picture Inside WareHouse"})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            {renderUpload({name:"piware", state, handleOnChange})}
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} style={{marginBottom:"10px"}}>
                            <Grid item xs={12} sm={6}>
                                {renderText({label:"Picture Outside WareHouse"})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            {renderUpload({name:"piware", state, handleOnChange})}
                            </Grid>
                        </Grid>
                        

                        <Grid container spacing={2} justify="center" style={{marginTop:"100px"}}>
                        <Box p={2}>
                        {renderButton({label:"Previous", handleOnClick:handlePrev})}
                        </Box>
                        <Box p={2}>
                        {renderButton({label:"Submit", handleOnClick:handleNext})}
                        </Box>
                            
                        </Grid>

        </Box>
    )
}
