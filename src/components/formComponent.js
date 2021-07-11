import React, { Component } from 'react';
import {PropTypes } from 'prop-types';
import {Box,Paper,Grid,withStyles,Stepper,Step,StepLabel} from "@material-ui/core";
// import { renderText} from './Common/display';
import { Styles } from './Common/styles';
import Step1 from './Steps/Step1';



class formComponent extends Component {
    state={
        data:{
            firstname:'',
            lastname:'',
            phone:'',
            email:'',
            ware:'',
            city:'',
            location:'',
            detail:''
        },
        errors:{
        
        },
        currentStep:0,
    }    
    render() {
        const {classes}=this.props;
        const handleOnChange = ({target})=>{
            const {data,errors}=this.state;
            target.value.length <= 3 ? (errors[target.name] =`${target.name} have at least 3 letter`) : (errors[target.name]= "");
            data[target.name] =target.value;
            this.setState({data,errors});
        };
        const handleNext =()=>{
            let {currentStep}=this.state;
            currentStep=currentStep+1;
            this.setState({currentStep});
        }

        const handlePrev =()=>{
            let {currentStep}=this.state;
            currentStep=currentStep-1;
            this.setState({currentStep});
        }

        const StepperStep =[
            {label:"Initial Details"},
            {label:"Construction Details"},
            {label:"Additional Details"},
            {label:"Special Remarks"},

        ]

       
        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={7}>
                <Paper>

                
                <Box p={1} mb={1} component={Paper}>
                        {/* {renderText({ label: "Steps Component" })} */}
                        <Stepper activeStep={this.state.currentStep} alternativeLabel>
        {StepperStep.map((item,i) => (
          <Step key={i}>
            <StepLabel>{item.label}</StepLabel>
          </Step>
        ))}
      </Stepper>
                    </Box>
                    </Paper>
                    <Box component={Paper}>
                        <form className={classes.form}>
                        <Step1 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext}/>
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
