import { MaterialCommunityIcons } from "@expo/vector-icons";

export const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "Home":
      iconName = "home";
      break;
    case "Descuentos":
      iconName = "ticket-percent-outline";
      break;
    case "Turnos":
      iconName = "calendar-clock";
      break;
    case "Cuenta":
      iconName = "account";
      break;
  }
  return <MaterialCommunityIcons color={color} name={iconName} size={24} />;
};
