import React, { useState, createContext, useEffect } from 'react';
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
import NewNote from './src/Containers/NewNote/NewNote';

var Datastore = require('react-native-local-mongodb');

const Drawer = createDrawerNavigator();


function CustomDrawerContent(props: any) {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label="Home"
        onPress={() => props.navigation.navigate('Home')}
        />
      <DrawerItem
        label="Close drawer"
        onPress={() => props.navigation.closeDrawer()}
        />
    </DrawerContentScrollView>
  );
}
interface NoteVariable {
  note: string
};

let setNotes: React.Dispatch<React.SetStateAction<NoteVariable[]>> = () => undefined
export const AppContext = createContext({notes:[{note:''}],setNotes:setNotes });


export default function App() {
  const [theme, setTheme] = useState(themes.light);
  const notesVar = [{ note: '' } ]
  const [notes,setNotes] = useState<NoteVariable[]>(notesVar);

  useEffect(() => {
    const db = new Datastore({ filename: 'asyncStorageKey', autoload: true });
    db.insert([{ a: 5 }, { a: 42 }, {system: 'solar', test:'test'}], function (err:any, newDocs:any) {
      // Two documents were inserted in the database
      console.log(newDocs,'2')
  
    });
    db.find({ system: 'solar' }, function (err:any, docs:any) {
      console.log(docs,'2')
      // docs is an array containing documents Mars, Earth, Jupiter
      // If no document is found, docs is equal to []
  }); 
  } ,[])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <AppContext.Provider value={{notes,setNotes}}>
      <NavigationContainer>
        <Drawer.Navigator
          drawerContent={props => CustomDrawerContent({ ...props })}
        >
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="NewNote" component={NewNote} />
        </Drawer.Navigator>
      </NavigationContainer>
      </AppContext.Provider>
    </ThemeContext.Provider>
  );
}
