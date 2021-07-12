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
const [kittyGender, setKittyGender] = useState("")
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

  const kittyData={
    kittyName,
    kittyStory,
    kittyPicture,
    kittyBreed,
    kittyGender,
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
   history.push("/")
 })
};

useEffect( () => {
  if ( kittyBreed ) {
    setKittyPicture( prev => {
      if (!prev) {
        switch(kittyBreed){
          case "Abyssinian":
            return "/images/abyssinian.svg";
          case "American-Short-Hair":
            return "/images/american-shorthair.svg";
            case "American-Curl":
              return "/images/american-curl.svg";
            case "Bengal":
              return "/images/shorthair.png";
            case "Birman":
              return "/images/shorthair.png";
            case "British-Shorthair":
              return "/images/british-shorthair.svg";
            case "Calico":
              return "/images/shorthair.png";
            case "Devon-Rex":
             return "/images/devon-rex.svg";
            case "Egyptian-Mau":
             return "/images/shorthair.png";
            case "Exotic-Shorthair":
            return "/images/exotic-shorthair.svg";
            case "Japanese-Bobtail":
            return "/images/japanese-bobtail.svg";
            case "Maine-Coon":
            return "/images/maine-coon.svg";
            case "Manx":
            return "/images/manx.svg";
            case "Munchkin":
            return "/images/munchkin.svg";
            case "Persian":
            return "/images/shorthair.png"
            case "Ragdoll":
            return "/images/ragdoll.svg";;
            case "Russian-Blue":
            return "/images/shorthair.png";
            case "Scottish-Fold":
            return"/images/tabby.png";
            case "Siamese":
            return "/images/shorthair.png";
            case "Singapura":
            return "/images/shorthair.png";
            case "Sphynx":
            return "/images/sphynx.svg";
            case "Other":
            return "/images/american-shorthair.svg";
          default:
            return "/images/defaultcat.png";
        }
      }

      return prev;
    });
  }
}, [ kittyBreed ] );


  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Upload A Kitty
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
        <InputLabel>What is your Cat's Name?</InputLabel>
          <TextField
            required
            id="kittyName"
            name="kittyName"
            label=""
            value={kittyName}
            onChange={(e)=>setKittyName(e.target.value)}
            fullWidth
            autoComplete="given-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>In what city is your cat located?</InputLabel>
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
          <MenuItem value={'Abyssinian'}>Abyssinian</MenuItem>
          <MenuItem value={'American-Shorthair'}>American Short Hair</MenuItem>
          <MenuItem value={'American-Curl'}>American Curl</MenuItem>
          <MenuItem value={'Bengal'}>Bengal</MenuItem>
          <MenuItem value={'Birman'}>Birman</MenuItem>
          <MenuItem value={'British-Shorthair'}>British Shorthair</MenuItem>
          <MenuItem value={'Calico'}>Calico</MenuItem>
          <MenuItem value={'Devon-Rex'}>Devon Rex</MenuItem>
          <MenuItem value={'Egyptian-Mau'}>Egyptian Mau</MenuItem>
          <MenuItem value={'Exotic-Shorthair'}>Exotic-Shorthairs</MenuItem>
          <MenuItem value={'Japanese-Bobtail'}>Japanese Bobtail</MenuItem>
          <MenuItem value={'Maine-Coon'}>Maine Coon</MenuItem>
          <MenuItem value={'Manx'}>Manx</MenuItem>
          <MenuItem value={'Munchkin'}>Munchkin</MenuItem>
          <MenuItem value={'Persian'}>Persian</MenuItem>
          <MenuItem value={'Ragdoll'}>Ragdoll</MenuItem>
          <MenuItem value={'Russian-Blue'}>Russian Blue</MenuItem>
          <MenuItem value={'Scottish-Fold'}>Scottish Fold</MenuItem>
          <MenuItem value={'Siamese'}>Siamese</MenuItem>
          <MenuItem value={'Singapura'}>Singapura</MenuItem>
          <MenuItem value={'Sphynx'}>Sphynx</MenuItem>
          <MenuItem value={'Other'}>Other / Unknown</MenuItem>
        </Select>
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputLabel>Is your cat male or female?</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="catGender"
            label="Is your cat male or female??"
            value={kittyColor}
            onChange={(e)=>setKittyGender(e.target.value)}
            fullWidth
            autoComplete="catGender"
          >
            <MenuItem value={'Male'}>Male </MenuItem>
            <MenuItem value={'Female'}>Female</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={6}>
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
            <MenuItem value={'Underweight'}>Underweight</MenuItem>
            <MenuItem value={'Slim-and-trim'}>Slim & Trim</MenuItem>
            <MenuItem value={'Average'}>Average</MenuItem>
            <MenuItem value={'A-little-extra'}>A Little Extra</MenuItem>
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
            <MenuItem value={'Blue'}>Blue</MenuItem>
            <MenuItem value={'Chocolate'}>Chocolate</MenuItem>
            <MenuItem value={'Silver'}>Silver</MenuItem>
            <MenuItem value={'Cream'}>Grey</MenuItem>
            <MenuItem value={'Lilac'}>Grey</MenuItem>
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
            <MenuItem value={'Curious'}>Curious</MenuItem>
            <MenuItem value={'Aggressive'}>Aggressive</MenuItem>
            <MenuItem value={'Not Sure'}>Not Sure</MenuItem>
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
            <MenuItem value={4}>4</MenuItem>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={6}>6</MenuItem>
            <MenuItem value={7}>7</MenuItem>
            <MenuItem value={8}>8</MenuItem>
            <MenuItem value={9}>9</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={11}>11</MenuItem>
            <MenuItem value={12}>12</MenuItem>
            <MenuItem value={13}>13</MenuItem>
            <MenuItem value={14}>14</MenuItem>
            <MenuItem value={15}>15</MenuItem>
            <MenuItem value={16}>16</MenuItem>
            <MenuItem value={17}>17</MenuItem>
            <MenuItem value={18}>18</MenuItem>
            <MenuItem value={19}>19</MenuItem>
            <MenuItem value={20}>20</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={12}>
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
