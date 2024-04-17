import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/auth";

export default async function LandingPage() {
  const session = await auth();

  if (session) {
    redirect("/");
  }

  return (
    <Container maxWidth={false} sx={{ minHeight: "100vh" }}>
      <Grid container spacing={6} justifyContent="center">
        <Grid xs={12} display="flex" justifyContent="center">
          <Typography variant="h1">Hey! Focus!!!</Typography>
        </Grid>
        <Grid xs={12} container spacing={2} justifyContent="center">
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3">but,</Typography>
          </Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="contained"
              component={Link}
              href="/api/auth/signin"
              sx={{ py: 3, px: 4, mx: 1 }}
            >
              <Typography variant="body1">login</Typography>
            </Button>
          </Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h3">first</Typography>
          </Grid>
          <Grid xs={12}></Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4">we&apos;re helping you</Typography>
          </Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography
              variant="h3"
              fontStyle="italic"
              fontWeight={700}
              sx={{
                textDecoration: "underline solid white 1px",
              }}
            >
              focus,
            </Typography>
          </Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4">not act</Typography>
          </Grid>
          <Grid
            xs="auto"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h4" fontStyle="italic">
              recklessly
            </Typography>
          </Grid>
          <Grid
            xs={9}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" fontWeight={100} textAlign="center">
              but then...
            </Typography>
          </Grid>
          <Grid
            xs={9}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Typography variant="h2" textAlign="center" fontWeight={700}>
              RIGHT BACK TO THE FOCUSING!
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}
