import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function LandingPage() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }
  return (
    <Container maxWidth={false} sx={{ minHeight: "100vh" }}>
      <Grid container justifyContent="center">
        <Grid xs={12} display="flex" justifyContent="center">
          <Typography variant="h1">Hey! Focus!!!</Typography>
        </Grid>
      </Grid>
      <Box sx={{ bgcolor: "background.default" }}></Box>
    </Container>
  );
}
