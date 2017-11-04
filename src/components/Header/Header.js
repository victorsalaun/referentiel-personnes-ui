import React from "react";
import { AppBar } from "material-ui";

const styles = {
  title: {
    cursor: "pointer"
  }
};

const Header = () =>
  <AppBar title={<span style={styles.title}>Personnes | SOFTEAM</span>} />;

export default Header;