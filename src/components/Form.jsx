import { useState, useEffect } from "react";
import { Box, TextField, Button, makeStyles } from "@material-ui/core";
import { getWeather } from "../services/api";
import Information from "./Information";

const useStyles = makeStyles({
  component: {
    padding: 10,
    display: "flex",
    background: "#c2a5a4",
  },
  input: {
    color: "#fff",
    marginRight: 15,
  },
  labelRoot: {
    fontSize: 15,
    color: "black",
  },
  button: {
    background: "#e67e22",
    color: "#fff",
    width: 150,
    height: 40,
    marginTop: 5,
    "&:hover": {
      background: "#3E3736",
    },
  },
});

const Form = () => {
  const classes = useStyles();
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [click, handleClick] = useState(false);
  const [data, setData] = useState();


  /* Asynchronous call with a promise to return data. 
  Function will wait for data to return, then set the data */
  useEffect(() => {
    const weatherInfo = async () => {
      city &&
        (await getWeather(city, country).then((response) => {
          setData(response.data);
        }));
    };
    weatherInfo();
    console.log(city, country);
    console.log(data);
    handleClick(false);
  }, [click]);

  const handleCityChange = (city) => {
    setCity(city);
  };

  const handleCountryChange = (country) => {
    setCountry(country);
  };

  return (
    <>
      <Box className={classes.component}>

        {/* City textfield */}
        <TextField
          InputProps={{ className: classes.input }}
          onChange={(e) => handleCityChange(e.target.value)}
          className={classes.input}
          label="City"
          InputLabelProps={{
            classes: { root: classes.labelRoot },
          }}
        />

        {/* Country textfield */}
        <TextField
          InputProps={{ className: classes.input }}
          onChange={(e) => handleCountryChange(e.target.value)}
          className={classes.input}
          label="Country"
          InputLabelProps={{
            classes: { root: classes.labelRoot },
          }}
        />

        {/* Get Weather button */}
        <Button
          variant="contained"
          onClick={() => handleClick(true)}
          className={classes.button}
        >
          Get Weather
        </Button>
      </Box>
      <Information data={data} city={city} country={country} />
    </>
  );
};

export default Form;
