import React from "react";
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import "./style.css";

// Using the datalist element we can create autofill suggestions based on the props.breeds array

function SearchForm(props) {
  return (
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Search by city:</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={props.search}
        onChange={props.handleInputChange}
        label="location"
      >
        <MenuItem value={'New-York'}>New York </MenuItem>
        <MenuItem value={'Los-Angeles'}>Los Angeles</MenuItem>
        <MenuItem value={'San-Francisco'}>San Francisco</MenuItem>
        <MenuItem value={'Chicago'}>Chicago</MenuItem>
        <MenuItem value={'Atlanta'}>Atlanta</MenuItem>
      </Select>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        onClick={props.handleFormSubmit}
      >
        Okay, Let's Go!
      </Button>
    </FormControl>
  );
}

export default SearchForm;
