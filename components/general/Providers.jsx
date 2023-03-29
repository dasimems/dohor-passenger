import React from "react";
import {
  ActionProvider,
  FormProvider,
  NavigationProvider,
  UserProvider
} from "../../context";

const Providers = ({ children }) => {
  return (
    <ActionProvider>
      <FormProvider>
        <UserProvider>
          <NavigationProvider>
            {children}
          </NavigationProvider>
        </UserProvider>
      </FormProvider>
    </ActionProvider>
  );
};

export default Providers;
