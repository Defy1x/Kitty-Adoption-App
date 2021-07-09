import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import API from '../../utils/API';

export default function KittyForm() {
const [kittyName, setKittyName] = useState("")
const [kittyStory, setKittyStory] = useState("")
const [kittyBreed, setKittyBreed] = useState("")
const [kittyWeight, setKittyWeight] = useState("")
const [kittyColor, setKittyColor] = useState("")
const [kittyLocation, setKittyLocation] = useState("")
const [kittyPersonality, setKittyPersonality] = useState("")
const [kittyAge, setKittyAge] = useState("")
const [kittyKids, setKittyKids] = useState(false)
const [kittyPets, setKittyPets] = useState(false)
const [kittyPicture, setKittyPicture] = useState("")

const history = useHistory()
const handleFormSubmit = event => {
  event.preventDefault();

  if (kittyPicture.length===0){
    switch(kittyBreed){
      case ("Domestic-Short-Hair"):
      setKittyPicture("/images/shorthair.png");
      break;
      case ("Scottish-Fold"):
      setKittyPicture("/images/tabby.png");
      break;
      default:
      setKittyPicture("/images/defaultcat.png");
    }
  }
  console.log(kittyPicture);

  const kittyData={
    kittyName,
    kittyStory,
    kittyPicture,
    kittyBreed,
    kittyWeight,
    kittyColor,
    kittyLocation,
    kittyPersonality,
    kittyAge,
    kittyKids,
    kittyPets
  }
 API.postKitty(kittyData)
 .then(response =>{
   console.log(response.data)
   // history.push("/")
 })
};

// userId: req.session.user_id,
// kittyName: req.body.kittyName,
// kittyStory: req.body.kittyStory,
// kittyPicture: req.body.kittyPicture,
// kittyBreed: req.body.kittyBreed,
// kittyWeight: req.body.kittyWeight,
// kittyColor: req.body.kittyColor,
// kittyLocation: req.body.kittyLocation,
// kittyPersonality: req.body.kittyPersonality,
// kittyAge: req.body.kittyAge,
// kittyKids: req.body.kittyKids,
// kittyPets: req.body.kittyPets,

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload A Kitty
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="kittyName"
            name="kittyName"
            label="What is your cat's name?"
            value={kittyName}
            onChange={(e)=>setKittyName(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="kittyStory"
            name="kittyStory"
            label="Describe your cat"
            value={kittyStory}
            onChange={(e)=>setKittyStory(e.target.value)}
            fullWidth
            autoComplete="kittyDescription"
          />
        </Grid>
        <Grid item xs={12}>
        <InputLabel>What is your Cat's Breed?</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          name="catBreed"
          label="What is you Cat's Breed?"
          value={kittyBreed}
          onChange={(e)=>setKittyBreed(e.target.value)}
          fullWidth
          autoComplete="catBreed"
        >
          <MenuItem value={'Domestic-Short-Hair'}>Domestic Short Hair</MenuItem>
          <MenuItem value={'Scottish-Fold'}>Scottish Fold</MenuItem>
          <MenuItem value={'Maine-Coon'}>Maine Coon</MenuItem>
          <MenuItem value={'Ragdoll'}>Ragdoll</MenuItem>
          <MenuItem value={'Syphnx'}>Syphnx</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12}>
          <InputLabel>What is your Cat's Weight?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catWeight"
            label="What is you Cat's Weight?"
            value={kittyWeight}
            onChange={(e)=>setKittyWeight(e.target.value)}
            fullWidth
            autoComplete="catWeight"
          >
            <MenuItem value={'Underweight'}>Underweight </MenuItem>
            <MenuItem value={'Slim-and-trim'}>Slim & Trim</MenuItem>
            <MenuItem value={'Average'}>Average</MenuItem>
            <MenuItem value={'A-little-extra'}>More to love</MenuItem>
            <MenuItem value={'Chonky'}>Chonky</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>What is the color of your Cat?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catColor"
            label="What is you Cat's Color?"
            value={kittyColor}
            onChange={(e)=>setKittyColor(e.target.value)}
            fullWidth
            autoComplete="catColor"
          >
            <MenuItem value={'Black'}>Black </MenuItem>
            <MenuItem value={'White'}>White</MenuItem>
            <MenuItem value={'Calico'}>Calico</MenuItem>
            <MenuItem value={'Orange'}>Orange</MenuItem>
            <MenuItem value={'Grey'}>Grey</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>What city is your cat at?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catLocation"
            label="Where is your cat at?"
            value={kittyLocation}
            onChange={(e)=>setKittyLocation(e.target.value)}
            fullWidth
            autoComplete="catLocation"
          >
            <MenuItem value={'New-York'}>New York </MenuItem>
            <MenuItem value={'Los-Angeles'}>Los Angeles</MenuItem>
            <MenuItem value={'Atlanta'}>Atlanta</MenuItem>
            <MenuItem value={'Chicago'}>Chicago</MenuItem>
            <MenuItem value={'San-Francisco'}>San Francisco</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>What is your Cat's Personality?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catPersonality"
            label="What is you Cat's Personality?"
            value={kittyPersonality}
            onChange={(e)=>setKittyPersonality(e.target.value)}
            fullWidth
            autoComplete="catPersonality"
          >
            <MenuItem value={'Playful'}>Playful </MenuItem>
            <MenuItem value={'Shy'}>Shy</MenuItem>
            <MenuItem value={'Lazy'}>Lazy</MenuItem>
            <MenuItem value={'Anxious'}>Anxious</MenuItem>
            <MenuItem value={'Chill'}>Chill</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
        <InputLabel>What is your Cat's Age?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catAge"
            label="What is you Cat's Age?"
            value={kittyAge}
            onChange={(e)=>setKittyAge(e.target.value)}
            fullWidth
            autoComplete="catAge"
          >
            <MenuItem value={0}>Under 1</MenuItem>
            <MenuItem value={1}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
            <MenuItem value={4}>4+</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="kittyKids" checked={kittyKids} onChange={()=>setKittyKids(!kittyKids)} />}
            label="Is your cat good with kids?"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" name="kittyPets" checked={kittyPets} onChange={()=>setKittyPets(!kittyPets)}/>}
            label="is your cat good with other animals?"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleFormSubmit}
          >
            Post your Kitty!
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
