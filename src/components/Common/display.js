import { Typography , TextField ,MenuItem,Button} from "@material-ui/core";

export const renderText = ({ label, color, align, variant}) => (
    <Typography 
    color={color ? color : "primary"}
    align={align ? align : "center"}
    variant={variant ? variant : "h6"}
    >
    {label}
    </Typography>

)


export const renderInputText = ({label,name,color,state,handleOnChange}) => {
    const {data,errors}=state;
    return(
    <TextField 
    label={label}
    variant="outlined"
    color={color ? color : 'primary'}
    name={name}
    fullWidth={true}
    size='small'
    value={data[name]}
    error={errors[name] ? true : false}
    helperText={errors[name]}
    onChange={handleOnChange} />
);
}

export const renderSelect = ({label,name,color,state,options,handleOnChange}) => {
    const {data,errors}=state;
    return(
    <TextField 
    select
    label={label}
    variant="outlined"
    color={color ? color : 'primary'}
    name={name}
    fullWidth={true}
    size='small'
    value={data[name]}
    error={errors[name] ? true : false}
    helperText={errors[name]}
    onChange={handleOnChange} >
    {
        options.map((item)=> (
            <MenuItem key={item.value} value={item.value}>{item.key}</MenuItem>
        ))
    }
    </TextField>
);
};

export const renderButton = ({label,variant,color,handleOnClick}) => (
<Button variant={variant ? variant : "outlined"}
color={color ? color : 'primary'} size="small" onClick={handleOnClick}>{label}</Button>

);

