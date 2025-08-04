import { useState } from "react";
import {
  Box,
  AppBar,
  Drawer,
  Toolbar,
  Typography,
  IconButton,
} from "@mui/material";

export default function HomeScreen() {
  const [open, setOpen] = useState(true);

  return (
    <>
      <AppBar
        color="primary"
        position="fixed"
        sx={{ width: open ? `calc(100% - ${300}px)` : "100%" }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" color="white">
            B R A N D
          </Typography>
          <IconButton onClick={() => setOpen(!open)}>
            <Typography color="white">
              {open ? (
                <i class="fa-solid fa-xmark"></i>
              ) : (
                <i class="fa-solid fa-bars"></i>
              )}
            </Typography>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer variant="persistent" anchor="left" open={open}>
        <Box width={300} p={2}>
          <img src="/logo.png" alt="Logo" width="100%" />
          <br />
          <br />
          <Box
            sx={{
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
              bgcolor: "lightgray",
              padding: "0.5rem 1.5rem",
            }}
          >
            <i class="fa-regular fa-house"></i> &nbsp; Home
          </Box>
          <br />
          <Box
            sx={{
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
              bgcolor: "lightgray",
              padding: "0.5rem 1.5rem",
            }}
          >
            <i class="fa-regular fa-house"></i> &nbsp; Home
          </Box>
          <br />
          <Box
            sx={{
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
              bgcolor: "lightgray",
              padding: "0.5rem 1.5rem",
            }}
          >
            <i class="fa-regular fa-house"></i> &nbsp; Home
          </Box>
          <br />
          <Box
            sx={{
              borderRadius: 10,
              cursor: "pointer",
              fontWeight: "bold",
              bgcolor: "lightgray",
              padding: "0.5rem 1.5rem",
            }}
          >
            <i class="fa-regular fa-house"></i> &nbsp; Home
          </Box>
        </Box>
      </Drawer>
    </>
  );
}
