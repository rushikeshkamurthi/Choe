import { createDrawerNavigator } from '@react-navigation/drawer';
import { useContext, useEffect } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-paper';
import { GlobalContext } from '../../../App';



const Drawer = createDrawerNavigator();

const DashBoard = () => {
    return(
        <View>
            <Text>DashBoard</Text>
        </View>
    );
}
const Inventory = () => {
    return(
        <View>
            <Text>Inventory</Text>
        </View>
    );
}
const Orders = () => {
    return(
        <View>
            <Text>Orders</Text>
        </View>
    );
}
const LogOut = () => {
    const { isAdminLoggedIn, setisAdminLoggedIn}= useContext(GlobalContext);

    useEffect(() => {
        setisAdminLoggedIn(false);
    }, [])
    
    return(
        <View>
            <Text></Text>
        </View>
    );
}

const AdminHome = () => {
    return (
        <Drawer.Navigator>
          <Drawer.Screen name="Dash Board" component={DashBoard} />
          <Drawer.Screen name="Inventory" component={Inventory} />
          <Drawer.Screen name="Orders" component={Orders} />
          <Drawer.Screen name="Log Out" component={LogOut} />
        </Drawer.Navigator>
      );
}

export default AdminHome