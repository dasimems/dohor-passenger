import { CarIcon, ChatIcon, HistoryIcon, HomeIcon, Menu, NavigationIcon, Pending, TripsIcon, UserIcon, Wallet, Wallet2 } from "../assets/icons";
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
    label: "Home",
    navShown: true,
    Icon: HomeIcon
  },

  Wallet: {
    name: "Wallet",
    label: "Wallet",
    navShown: true,
    Icon: Wallet2
  },

  History: {
    name: "History",
    label: "History",
    navShown: true,
    Icon: HistoryIcon
  },

  Trips: {
    name: "Trips",
    label: "Rides",
    navShown: true,
    Icon: CarIcon
  },

  Chat: {
    name: "Chat",
    label: "Messages",
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
    label: "Account",
    navShown: true,
    Icon: UserIcon
  }
};

export const countryData = CountryListJson.map(country => ({name: country.name.common, mobileCode: country.idd.root, countryCode: country.cca2, flag: country.flags.png}));


export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown)

export const padding = 15;