import { ChatIcon, Menu, NavigationIcon, TripsIcon } from "../assets/icons";

export const NavNames = {
  GettingStarted: {
    name: "GettingStarted",
    label: "Getting Started",
    navShown: false,
    Icon: Menu
  },

  Login: {
    name: "Login",
    label: "Login",
    navShown: false,
    Icon: Menu
  },
  OTP: {
    name: "OTP",
    label: "OTP",
    navShown: false,
    Icon: Menu
  },
  Navigation: {
    name: "Navigation",
    label: "Navigation",
    navShown: true,
    Icon: NavigationIcon
  },

  Trips: {
    name: "Trips",
    label: "Trips",
    navShown: true,
    Icon: TripsIcon
  },

  Chat: {
    name: "Chat",
    label: "Chat",
    navShown: true,
    Icon: ChatIcon
  }
};

export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown)

export const padding = 15;