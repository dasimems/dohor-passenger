import { ChatIcon, Menu, NavigationIcon, TripsIcon, UserIcon } from "../assets/icons";
import CountryListJson from "./all_country.json"

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

   Register: {
    name: "Register",
    label: "Register",
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
  },

   ChatDetails: {
    name: "ChatDetails",
    label: "Chat Details",
    navShown: false,
    Icon: ChatIcon
  },

  Profile: {
    name: "Profile",
    label: "Profile",
    navShown: false,
    Icon: UserIcon
  }
};

export const countryData = CountryListJson.map(country => ({name: country.name.common, mobileCode: country.idd.root, countryCode: country.cca2, flag: country.flags.png}));


export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown)

export const padding = 15;