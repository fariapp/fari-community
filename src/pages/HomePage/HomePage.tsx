import { css } from "@emotion/css";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import { Page } from "../../components/Page/Page";

const Sponsors: Array<{ image: string; name: string; link: string }> = [
  {
    name: "Netlify",
    image: "https://www.netlify.com/img/global/badges/netlify-color-accent.svg",
    link: "https://www.netlify.com",
  },
];

export function HomePage() {
  return (
    <>
      <Page
        title={null}
        description={null}
        container={{
          maxWidth: "lg",
        }}
        box={{
          mt: "2rem",
        }}
      >
        <Box>
          <Grid
            container
            spacing={3}
            justifyContent="center"
            wrap="nowrap"
            alignItems="center"
          >
            <Grid item>
              <img
                src="/images/app.png"
                alt="Fari Community"
                style={{ height: "70px" }}
              />
            </Grid>
            <Grid item>
              <Typography variant="h1" component="h1" align="center">
                Fari
              </Typography>
            </Grid>
          </Grid>

          <Box mt="1rem">
            <Typography variant="h3" component="h2" gutterBottom align="center">
              The Open TTRPG Community
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            marginTop: "4rem",
          }}
        >
          <Grid container spacing={3} justifyContent="center">
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Fari App",
                description: "The Free and Open-Source Virtual Tabletop.",
                image: "https://gyazo.com/aab8da9319857cc063bd932141e6a924.png",
                imageBackground: "#2c416e",
                link: "https://fari.app",
                cta: "Play Online For Free",
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Fari Games",
                description: "The Ultimate Collection of Open Licensed SRDs.",
                image: "https://gyazo.com/d21713f0cfce917a0f18b46e84f16a33.png",
                imageBackground: "#ebeef2",
                link: "https://fari.games",
                cta: "Read the SRDs",
              })}
            </Grid>

            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Fari RPGs",
                description: "Fun TTRPGs for everyone.",
                image: "https://gyazo.com/e2589ba581d6906ce730916d325875e8.png",
                imageBackground: "#ebeef2",
                link: "https://farigames.itch.io/",
                cta: "Check Out Our Games",
              })}
            </Grid>
            <Grid item md={4} xs={12}>
              {renderCard({
                name: "Discord Server",
                description:
                  "Come and talk with awesome people on Fari's Discord Server.",
                image: "https://gyazo.com/2d70fdabbf5e70cd7783decfde2983bd.png",
                imageBackground: "#5766f2",
                link: "/discord",
                cta: "Join the Discord",
              })}
            </Grid>
          </Grid>
        </Box>
      </Page>
    </>
  );

  function renderCard(renderProps: {
    name: string;
    description: string;
    image: string;
    imageBackground: string;
    cta: string;
    link: string;
  }) {
    return (
      <Card
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <CardMedia
          component="img"
          height="300"
          sx={{
            objectFit: "contain",
            backgroundColor: renderProps.imageBackground,
          }}
          image={renderProps.image}
          alt={renderProps.name}
        />
        <CardContent
          sx={{
            flex: "1 1 auto",
          }}
        >
          <Typography gutterBottom variant="h5" component="div">
            {renderProps.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {renderProps.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Button
                size="large"
                component="a"
                href={renderProps.link}
                target="_blank"
                rel="noopener noreferrer"
                color="secondary"
              >
                {renderProps.cta}
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    );
  }

  function renderSponsors() {
    return (
      <Box py="2rem" mb={"2rem"}>
        <Container>
          <Typography variant="h3" gutterBottom>
            Sponsors
          </Typography>
          <Grid container spacing={4} justifyContent="flex-start">
            {Sponsors.map((sponsor, i) => {
              return (
                <Grid item key={i}>
                  <a href={sponsor.link} target="_blank" rel="noreferrer">
                    <img
                      className={css({ width: "auto", height: "50px" })}
                      src={sponsor.image}
                      title={sponsor.name}
                    />
                  </a>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    );
  }
}

export default HomePage;
