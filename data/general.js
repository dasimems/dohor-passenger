import { Bank, CarIcon, ChatIcon, ConvertIcon, CustomerSupport, HistoryIcon, HomeIcon, Menu, NotificationIcon, SecurityIcon, StarIcon, UserIcon, Wallet2 } from "../assets/icons";
import { Coin } from "../assets/images";
import CountryListJson from "./all_country.json"

export const NavNames = {
  GettingStarted: {
    name: "GettingStarted",
    label: "Getting Started",
    navShown: false,
    profileLink: false,
    Icon: Menu
  },

  Notification: {
    name: "Notification",
    label: "Notification",
    navShown: false,
    profileLink: false,
    Icon: NotificationIcon
  },

  Login: {
    name: "Login",
    label: "Login",
    navShown: false,
    profileLink: false,
    Icon: Menu
  },

   Register: {
    name: "Register",
    label: "Register",
    navShown: false,
    profileLink: false,
    Icon: Menu
  },
  OTP: {
    name: "OTP",
    label: "OTP",
    navShown: false,
    profileLink: false,
    Icon: Menu
  },
  Navigation: {
    name: "Navigation",
    label: "Home",
    navShown: true,
    profileLink: false,
    Icon: HomeIcon
  },

  Wallet: {
    name: "Wallet",
    label: "Wallet",
    navShown: true,
    profileLink: false,
    Icon: Wallet2
  },

  // History: {
  //   name: "History",
  //   label: "History",
  //   navShown: true,
  //   profileLink: false,
  //   Icon: HistoryIcon
  // },

  Trips: {
    name: "Trips",
    label: "History",
    navShown: true,
    profileLink: false,
    Icon: HistoryIcon
  },

  Chat: {
    name: "Chat",
    label: "Messages",
    navShown: true,
    profileLink: false,
    Icon: ChatIcon
  },

   ChatDetails: {
    name: "ChatDetails",
    label: "Chat Details",
    navShown: false,
    profileLink: false,
    Icon: ChatIcon
  },

  Profile: {
    name: "Profile",
    label: "Account",
    navShown: true,
    profileLink: false,
    Icon: UserIcon
  },

  ProfileSettings: {
    name: "ProfileSettings",
    label: "Profile Settings",
    navShown: false,
    profileLink: true,
    Icon: UserIcon
  },

  Withdraw: {
    name: "Withdraw",
    label: "Withdraw",
    navShown: false,
    profileLink: false,
    Icon: Bank
  },

  RatingDetails: {
    name: "RatingDetails",
    label: "Rating Details",
    navShown: false,
    profileLink: false,
    Icon: StarIcon
  },

  ExtraRatingDetails: {
    name: "ExtraRatingDetails",
    label: "Extra Rating Details",
    navShown: false,
    profileLink: false,
    Icon: StarIcon
  },

  Ratings: {
    name: "Ratings",
    label: "Ratings",
    navShown: false,
    profileLink: false,
    Icon: StarIcon
  },

  Transactions: {
    name: "Transactions",
    label: "Transactions",
    navShown: false,
    profileLink: false,
    Icon: ConvertIcon
  },

  NewBank: {
    name: "NewBank",
    label: "New Bank",
    navShown: false,
    profileLink: false,
    Icon: Bank
  },

  Password: {
    name: "Password",
    label: "Password",
    navShown: false,
    profileLink: true,
    Icon: SecurityIcon
  },

  VehicleDetails: {
    name: "VehicleDetails",
    label: "Vehicle Details",
    navShown: false,
    profileLink: true,
    Icon: CarIcon
  },

  CreditDetails: {
    name: "CreditDetails",
    label: "Credit Details",
    navShown: false,
    profileLink: false,
    Icon: Coin
  },
  // CustomerSupport: {
  //   name: "CustomerSupport",
  //   label: "Customer Support",
  //   navShown: false,
  //   profileLink: true,
  //   Icon: CustomerSupport
  // }
};

export const countryData = CountryListJson.map(country => ({name: country.name.common, mobileCode: country.idd.root, countryCode: country.cca2, flag: country.flags.png}));


export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);
export const screenNav = allNav.filter(nav => nav.navShown)
export const profileLinks = allNav.filter(nav => nav.profileLink)

export const padding = 15;