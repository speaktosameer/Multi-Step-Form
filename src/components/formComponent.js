import React, { Component } from 'react';
import {PropTypes } from 'prop-types';
import {Box,Paper,Grid,withStyles,Typography} from "@material-ui/core";
import { renderText,renderInputText } from './Common/display';
import { Styles } from './Common/styles';



class formComponent extends Component {
    state={
        data:{
            firstname:'',
            lastname:''
        },
        errors:{
        
        },
    }    
    render() {
        const {classes}=this.props;
        const handleOnChange= ({target})=>{
            const {data,errors}=this.state;
            target.value.length <= 3 ? (errors[target.name] =`${target.name} have at least 3 letter`) : (errors[target.name]= "");
            data[target.name] =target.value;
            this.setState({data,errors});
        };
        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={7}>
                <Box p={2} mb={2} component={Paper}>
                    <Typography variant="h2">Sammer Fudi</Typography>
                        {/* {renderText({ label: "Steps Component" })} */}
                    </Box>
                    <Box component={Paper}>
                        <form className={classes.form}>
                        {renderText({ label: "Initial Details" })}

                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                            {renderInputText({label:"First Name", name:"firstname", state: this.state, handleOnChange})}
                            </Grid>
                            <Grid item xs={12} sm={6}>
                            {renderInputText({label:"Last Name",name:"lastname", state: this.state, handleOnChange})}
                            </Grid>
                        </Grid>
                    </form>
                    </Box>
                </Grid>
            </Grid>
        )
    }
}

formComponent.propTypes ={
    classes:PropTypes.object.isRequired,
};

export default withStyles(Styles)(formComponent);
