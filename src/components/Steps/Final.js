import {Box,Paper,Grid,Typography,Text} from "@material-ui/core";
import { renderText,renderInputText, renderSelect,renderButton,renderTextArea,renderRadio } from '../Common/display';
import React from 'react'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

function Final({state}) {
    return (
                    <Box p={2}>
                    <Box mt={1} mb={2}>
                        {renderText({ label: "Final Result" })}
                        </Box>
                    <Grid container spacing={2} justify="center">
                    <Box p={2}>
                    {JSON.stringify(state,null,4)}
                    </Box>
                    </Grid>
</Box>

    )
}

export default Final
