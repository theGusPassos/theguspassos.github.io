import React from "react";
import colors from "../shared/colors";

const style = {
  background: {
    width: "100%",
    backgroundColor: colors.mainColor,
    color: colors.mainTextColor
  },
  nameContainer: {
    padding: "10px"
  },
  name: {
    fontSize: "1.3em"
  },
  jobTitle: {
    fontSize: "1.6em"
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
