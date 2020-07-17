import React, { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

export interface TransitionOnEnterProps {
  transitionDuration: number;
  delayToStart: number;
  children: JSX.Element;
}

const TransitionOnEnter = (props: TransitionOnEnterProps) => {
  const [inProp, setInProp] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setInProp(true);
    }, props.delayToStart);
  });

  return (
    <CSSTransition
      unmountOnExit
      in={inProp}
      classNames="animation"
      timeout={props.transitionDuration}
    >
      {props.children}
    </CSSTransition>
  );
};

export default TransitionOnEnter;
