import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Home from './src/Containers/Home/Home';
import { themes, Ithemes } from './src/constants/themes';
import { ThemeContext } from './src/utils/themeContext';

const Drawer = createDrawerNavigator();

function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

export default function App() {
  const [theme, setTheme] = useState(themes.light);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => CustomDrawerContent({ ...props })}
        >
          <Drawer.Screen name="Home" component={Home} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeContext.Provider>
  );
}
