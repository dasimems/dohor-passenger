import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { lato } from './fonts';

export default function App() {

  const [fontsLoaded] = useFonts({
    [lato.regular.default]: require("./fonts/Lato-Regular.ttf"),
    [lato.regular.italic]: require("./fonts/Lato-Italic.ttf"),
    [lato.black.default]: require("./fonts/Lato-Black.ttf"),
    [lato.black.italic]: require("./fonts/Lato-BlackItalic.ttf"),
    [lato.bold.default]: require("./fonts/Lato-Bold.ttf"),
    [lato.bold.italic]: require("./fonts/Lato-BoldItalic.ttf"),
  });

  return (
    <>

      {fontsLoaded && <></>}
    
    </>
  );
}

const styles = StyleSheet.create({});
