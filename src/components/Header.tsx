import React from "react";
import colors from "../shared/colors";

const style = {
  background: {
    width: "100%",
    backgroundColor: colors.mainColor,
    color: colors.mainTextColor
  },
  nameContainer: {
    padding: "20px"
  },
  name: {
    fontSize: "1em"
  },
  jobTitle: {
    fontSize: "1.5em"
  }
};

function Header() {
  return (
    <header style={style.background}>
      <div style={style.nameContainer}>
        <div style={style.name}>Gustavo Passos</div>
        <div style={style.jobTitle}>Game & Software Developer</div>
      </div>
    </header>
  );
}

export default Header;
