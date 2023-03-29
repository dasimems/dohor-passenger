import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { lato } from './fonts';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Providers } from './components';
import { GettingStarted } from './screens';
import { NavNames } from './data/general';


const Stack = createNativeStackNavigator();

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

      {fontsLoaded && <Providers>

        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Group>

              <Stack.Screen name={NavNames.GettingStarted.name} component={GettingStarted} />

            </Stack.Group>
          </Stack.Navigator>
        </NavigationContainer>
        
        
        </Providers>}
    
    </>
  );
}

const styles = StyleSheet.create({});
