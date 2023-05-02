import React from "react";
import {
  Button,
  Container,
  ButtonGroup,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { AppBar } from "@material-ui/core";
import "./styles.css";

function swaag() {
  alert("Swag se karenge swaagat");
}

const App = () => {
  return (
    <div className="App">
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
            <ButtonGroup variant="text" aria-label="text button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default App;
