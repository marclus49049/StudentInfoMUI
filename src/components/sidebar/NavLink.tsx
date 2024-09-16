import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../colors";

type Props = {
  text: string;
  link: string;
  isActive: boolean;
};

export const NavLink = ({ text, link, isActive }: Props) => {
  return (
    <Link
      to={link}
      style={{
        padding: "4px",
        borderRadius: "4px",
        textDecoration: "none",
        background: isActive ? colors.gray[400] : colors?.white,
        color: isActive ? colors?.text : colors?.gray[700],
      }}
    >
      <Typography variant="button">{text}</Typography>
    </Link>
  );
};
