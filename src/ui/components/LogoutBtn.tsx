import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

import Link from "next/link";

export default function LogoutBtn() {
  return (
    <Box position="absolute" right="1vw" pt={1}>
      <Button variant="contained" component={Link} href="/api/auth/signout">
        <Typography variant="body1">logout</Typography>
      </Button>
    </Box>
  );
}
