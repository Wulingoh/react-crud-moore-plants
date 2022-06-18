import * as React from "react";
import PromiseFooter from "./PromiseFooter";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { styled } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import { Stack } from "@mui/material";


const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});

const styles = {
  paperContainer: {
    maxWidth: "100%",
    maxHeight: "100vw",
    backgroundImage: `url("/Images/HowToGreenHero.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "400px",
  },
  paperContainerMiddle: {
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundImage: `url("/Images/HowToGreenMiddleImg.png")`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    height: "300px",
  },
};

export const HowToGreen = () => {
  return (
    <main style={{ backgroundColor: "#F3F7F3", marginBottom: "20px" }}>
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Paper
              style={styles.paperContainer}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography
                variant="h4"
                fontWeight={"Bold"}
                fontFamily={"Raleway"}
                color={"whitesmoke"}
              >
                How To Green
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Container maxWidth="sm">
              <Typography variant={"subtitle1"} sx={{ textAlign: "center" }}>
                Houseplants have various types and characteristics such as leaf
                shape, size, and color. <br /> Like cacti, which like sunlight,
                and fern plants, which like water, the environment in which they
                grow easily is different. <br /> It is important to bring it as
                close as possible to the growing environment of your own
                habitat. <br />
                Choose a plant that suits your location and your lifestyle, as
                well as your taste.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ marginBottom: "20px" }}>
        <Grid container spacing={3}>
          <Grid item md={12} xs={12}>
            <Paper
              style={styles.paperContainerMiddle}
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
              }}
            >
              <Typography
                variant="h5"
                fontWeight={"Bold"}
                fontFamily={"Raleway"}
                marginLeft={"10px"}
              >
                Let's Grow
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={12} sm={12}>
            <Typography variant={"p"} sx={{ textAlign: "justify", fontWeight:"600" }}>
              Reconfirmation of breeding environment (place)
            </Typography>
          </Grid>
        </Grid>
      </Box>
      <Divider></Divider>
      <Box
        sx={{
          marginBottom: "20px",
          marginTop: "30px",
          marginLeft: "10px",
          marginRight: "10px",
        }}
      >
        <Grid container spacing={3}>
          <Grid item md={12} sm={12}>
            <Container maxWidth={"sm"}>
              <Typography variant={"p"} sx={{ textAlign: "center" }}>
                In order to grow plants vigorously, it is important to bring the
                growing environment as close as possible to your own habitat.
                Here, we will introduce the important points for placing plants
                when growing plants.
              </Typography>
            </Container>
          </Grid>
        </Grid>
      </Box>
      <Container>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/sunlightGreen.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Sunlight
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    Plants basically want sunlight. Some varieties grow
                    relatively well in poorly lit areas, but manage them in a
                    bright room with at least windows. Depending on the species,
                    manage cacti and succulents in a particularly sunny place in
                    your home.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/ventilationGreen.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Ventilated
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    Ventilation is very important for plants. By sending fresh
                    air with the wind, it grows strong and helps prevent soil
                    from getting stuffy. It is strictly forbidden to blow air
                    conditioning. The leaves will lose their energy due to
                    dryness and temperature change
                  </Typography>
                </Container>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "50px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/temperatureGreen.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Room Temperature
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    Please manage indoors during the season below 10 ℃. Also,
                    avoid managing in places with large temperature differences.
                    If the environment changes frequently, you will lose your
                    energy. Let's adapt to the environment without changing the
                    place as much as possible.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/wateringGreen.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Watering
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    Watering varies by season and variety, but what they have in
                    common is to keep the best timing and to give the right
                    amount to the soil. Let's give water while being conscious
                    of sharpness. It is necessary to pay attention to whether
                    the water in the saucer is left in the pool. In dry areas,
                    spray the leaves frequently.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={12} sm={12}>
              <Typography variant={"p"} sx={{ textAlign: "justify", fontWeight:"600" }}>
                How to choose a pot
              </Typography>
            </Grid>
          </Grid>
        </Box>
        <Divider></Divider>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid item md={12} sm={12}>
              <Container maxWidth={"sm"}>
                <Typography variant={"p"} sx={{ textAlign: "center" }}>
                  There are also types of pots. There are different
                  characteristics such as unglazed pots, terracotta, and plastic
                  pots, so choose the pot that suits your green growth and
                  taste.
                </Typography>
              </Container>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "20px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/potGreenCover1.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Differences between pot and pot cover
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    The pot is perforated, but the pot cover is not. You cannot
                    plant it in the pot cover, but you can replace the pot cover
                    and enjoy the interior coordination of the plant according
                    to the season and the place to put it.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/fiberGreenPot.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Fiber cement / powder coated steel
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    There are various pots such as cement pots and steel pots,
                    which are rich in texture and expression that pottery does
                    not have. Cement is strong and light by being reinforced
                    with fiberglass fiber, and steel is powder-coated to prevent
                    rusting.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box
          sx={{
            marginBottom: "50px",
            marginTop: "30px",
            marginLeft: "10px",
            marginRight: "10px",
          }}
        >
          <Grid container spacing={3}>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/potteryGreenPot.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Pottery
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    It is a pot suitable for planting because it has excellent
                    ventilation and drainage. When planting, choose one with a
                    pot hole. It gives warmth to the interior with the
                    atmosphere unique to pottery. It has the advantage of being
                    heavy and does not easily fall over, but you need to be
                    careful not to drag the bottom when moving.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
            <Grid
              item
              md={6}
              sm={12}
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Stack spacing={2}>
                <Container maxWidth={"sm"}>
                  <Img src="/images/woodGreenPot.png" alt="" />
                </Container>
                <Container maxWidth={"sm"}>
                  <Typography
                    variant="subtitle1"
                    sx={{ fontFamily: "Raleway", fontWeight: "Bold" }}
                  >
                    Wood / natural material
                  </Typography>
                  <Typography
                    variant={"p"}
                    sx={{ textAlign: "center", fontSize: "14px" }}
                  >
                    You can enjoy the relaxing interior unique to pot covers
                    made of wood, vines, bark and fibers. Pots made from plant
                    fibers also have the advantage of being lightweight. Most of
                    them are waterproof, but they deteriorate when water
                    accumulates, so use a saucer.
                  </Typography>
                </Container>
              </Stack>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ marginBottom: "50px" }}>
          <PromiseFooter />
        </Box>
      </Container>
    </main>
  );
};
export default HowToGreen;
