import { useNavigate } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Settings } from "@mui/icons-material";

const getIcon = (icon) => {
  switch (icon) {
    case "HOME":
      return <Home />;
    case "TASKS":
      return <Home />;
    case "SETTINGS":
      return <Settings />;
    default:
      return <Home />;
  }
};

const MenuListItems = ({ list }) => {
  const navigate = useNavigate();
  
return (
    <List>
    {List.map(({ text, icon }, index) => (
      <ListItem key={index}>
        <ListItemIcon>
        { getIcon(icon) }
            <ListItemText primary={ text } />
        </ListItemIcon>
      </ListItem>
    ))}
  </List>
);

}

export default MenuListItems;