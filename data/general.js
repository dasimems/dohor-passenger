export const NavNames = {
  GettingStarted: {
    name: "GettingStarted",
    label: "Getting Started",
    navShown: false
  },
  Navigation: {
    name: "Navigation",
    label: "Navigation",
    navShown: true
  },

  Trips: {
    name: "Trips",
    label: "Trips",
    navShown: true
  },

  Chat: {
    name: "Chat",
    label: "Chat",
    navShown: true
  }
};

export const allNav = Object.keys(NavNames).map(nav => NavNames[nav]);