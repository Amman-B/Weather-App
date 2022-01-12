import { Box, makeStyles, Container, Grid } from "@material-ui/core";
import logo from '../images/bg.jpg';
import Form from "./Form";
const useStyles = makeStyles({
    component: {
        height: '80vh',
        width: '100%',
        marginTop: 10,
        marginLeft: 2
    },
    leftContainer: {
        backgroundImage: `URL(${logo})`,
        height: 'auto',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        borderRadius: '20px 0px 0px 20px'
    },
    rightContainer: {
        background: 'linear-gradient(to right, #e74c3c, #e67e22)',
        height: 'auto',
    }
})


const Weather = () => {
    const classes = useStyles();
    return (
      <Container maxWidth="lg">
            <Grid container spacing={2} className={classes.component}>
                <Grid item xs={4 } lg={ 4} className={classes.leftContainer}></Grid>
          <Grid item xs={8 } lg={8 } className={classes.rightContainer}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    );
}

export default Weather;