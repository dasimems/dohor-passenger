import {
  Linking,
  Alert,
  TouchableOpacity
} from "react-native";
import React, { useCallback } from "react";
import { useActionContext } from "../../context";

const UrlOpening = ({url, children}) => {

    const { openModal } = useActionContext();
  
    const handlePress = useCallback(
      async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = url? await Linking.canOpenURL(url): null;

        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
        //   Alert.alert(`Don't know how to open this URL: ${url}`);
            openModal();
        }
      },
      [url]
    );

  return <TouchableOpacity onPress={handlePress} >
    {children}
  </TouchableOpacity>;
  
}

export default UrlOpening