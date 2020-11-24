import styles from "../styles/Header.module.css";
import React from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

import {
  createMuiTheme,
  ThemeProvider,
  makeStyles,
} from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: "#222831",
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: "#fbf6f0",
      main: "#0044ff",
      // dark: será calculada com base palette.secondary.main,
      contrastText: "#ffcc00",
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
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
      <nav className={styles.menu}>
        <ThemeProvider theme={theme}>
          <Paper square={false} elevation={3}>
            <Tabs
              value={value}
              indicatorColor="primary"
              textColor="secondary"
              onChange={handleChange}
              // aria-label="disabled tabs example"
            >
              <Tab label="Blog" selected />
              <Tab label="Sobre" />
              <Tab label="Contato" />
            </Tabs>
          </Paper>
        </ThemeProvider>
      </nav>
    </header>
  );
}
