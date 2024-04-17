import * as React from "react";
import { PaletteMode, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

export default function LandingPage() {
  return (
    <Container>
      <Grid container>
        <Grid xs={12}>
          <Typography variant="h1">Hello, world!</Typography>
        </Grid>
      </Grid>
      <Box sx={{ bgcolor: "background.default" }}></Box>
    </Container>
  );
}
