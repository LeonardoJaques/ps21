import styles from "../styles/Header.module.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: "#fbf6f0",
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: "#393e46",
      main: "#393e46",
      // dark: será calculada com base palette.secondary.main,
      contrastText: "#222831",
    },
    contrastThreshold: 3,
    tonalOffset: 0.2,
  },
});

export default function Header() {
  const [value, setValue] = React.useState(2);
  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <header className={styles.header}>
      <span className={styles.logoText}>Leoanardo Jaques</span>
      <nav className={styles.nav}>
        <Paper elevation={4} className={styles.paper}>
          <ThemeProvider theme={theme}>
            <Tabs
              className={styles.tabs}
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
            >
              <Tab label="Blog" selected />
              <Tab label="Sobre" />
              <Tab label="Contato" />
            </Tabs>
          </ThemeProvider>
        </Paper>
      </nav>
    </header>
  );
}
