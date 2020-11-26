import React, { useState } from "react";
import Header from "../Header";
import Footer from "../Footer";
import Section from "../Section";
import styles from "./Compose.module.css";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Paper from "@material-ui/core/Paper";

import { createMuiTheme } from "@material-ui/core/styles";
import BlueGrey from "@material-ui/core/colors/blueGrey";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: BlueGrey[50],
    },
    secondary: {
      main: "#fbf6f0",
    },
  },
});

export default function Compose() {
  const [value, setValue] = useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.composeSection}>
      <Header />
      <form noValidate autoComplete="off">
        <Section
          title={
            <div className={styles.paper}>
              <TextField
                className={styles.textForm}
                id="standard-basic"
                label="Insert Post"
              />
            </div>
          }
          text={
            <Paper elevation={4} className={styles.paper}>
              <FormControl component="fieldset">
                <FormLabel
                  component="legend"
                  color="primary"
                  className={styles.textForm}
                >
                  Area
                </FormLabel>
                <RadioGroup
                  aria-label="Marketing"
                  name="#Gestao Marketing"
                  value={value}
                  onChange={handleChange}
                  className={styles.textColor}
                >
                  <FormControlLabel
                    value="GesProjetos"
                    control={<Radio />}
                    label="#Gestão Projetos"
                  />
                  <FormControlLabel
                    value="Projetos"
                    control={<Radio />}
                    label="#Gestao Marketing"
                  />
                  <FormControlLabel
                    value=""
                    control={<Radio />}
                    label="#Análise Sistemas"
                  />
                </RadioGroup>
              </FormControl>
            </Paper>
          }
        />
      </form>
      <Footer />
    </div>
  );
}
