import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import i1 from "./../../../Assets/images/i1.jpg";
import i2 from "./../../../Assets/images/i2.png";
import i3 from "./../../../Assets/images/i3.png";

const useStyles = makeStyles((theme) => ({
  mainContainer: {
    background: "#000000",
    height: "100%",
    marginTop: "200px",
  },
  cardContainer: {
    maxWidth: 345,
    margin: "3rem auto",
  },
}));

const projects = [
  {
    name: "DASHBOARD",
    description: `JUMP to your personalised dashboard , there's a lot to explore`,

    link: "/dashboard",
    image: i2,
  },

  {
    name: "CHALLENGES",
    description: ` Complete the given tasks and get wonderful perks 
    `,
    image: i1,
    link: "/task",
  },

  {
    name: "RESOURCES",
    description: `GET all your resoures (previous year papers, notes and a lot more) ENJOY !!!`,
    image: i3,
    link: "/resources",
  },
];

const Cards = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="div" className={classes.mainContainer}>
        <Grid container justify="center">
          {/* Projects */}
          {projects.map((project, i) => (
            <Grid item xs={12} sm={8} md={4} key={i}>
              <Card className={classes.cardContainer}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Project 1"
                    height="140"
                    image={project.image}
                  />
                  <CardContent>
                    <Typography variant="h5" gutterBottom>
                      {project.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      {project.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" href={project.link}>
                    Start ASAP !!!
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </React.Fragment>
  );
};

export default Cards;
