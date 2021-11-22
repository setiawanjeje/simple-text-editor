import React, { FC } from "react";
import styles from "./Button.module.css";

type Props = {
  icon: string;
  onMouseDown: (e: React.MouseEvent) => void;
};

const Button: FC<Props> = (props) => {
  const { icon, ...attr } = props;

  return (
    <button className={styles.btn} {...attr}>
      <span className="material-icons">{icon}</span>
    </button>
  );
};

export default Button;
