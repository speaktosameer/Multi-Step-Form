import React, { Component } from 'react';
import {PropTypes } from 'prop-types';
import {Box,Paper,Grid,withStyles,Stepper,Step,StepLabel} from "@material-ui/core";
// import { renderText} from './Common/display';
import { Styles } from './Common/styles';
import Step1 from './Steps/Step1';
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
import Step4 from './Steps/Step4';
import Final from './Steps/Final';



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

        ];
        const getStepsItems = (steps) => {
            switch(steps){
                case 0:
                    return <Step1 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext} />;
                    case 1:
                        return <Step2 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext} handlePrev={handlePrev}/>;
                        case 2:
                    return <Step3 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext} handlePrev={handlePrev}/>;
                    case 3:
                    return <Step4 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext} handlePrev={handlePrev}/>;
                    case 4:
                    return <Final state={this.state.data}/>;
                    default:
                        return <Step1 state={this.state} handleOnChange={handleOnChange} handleNext={handleNext} />;
            }
        };

       
        return (
            <Grid container className={classes.formContainer}>
                <Grid item xs={12} sm={7}>
                <Paper component={Box}>

                
                <Box  p={1} mb={1}>
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
                        
                        {getStepsItems(this.state.currentStep)}
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
