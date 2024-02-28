import 'react-native-gesture-handler';
import { Box, Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, Heading, Text, HStack, VStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';


const Button1 = () => {
    const navigation = useNavigation();
    return <Button onPress={() => navigation.navigate('Notifications')}>
        <ButtonText>
            Button 1
        </ButtonText>
    </Button>;
}

const Button2 = () => {
    const navigation = useNavigation();
    return <Button onPress={() => navigation.goBack()}>
        <ButtonText>
            Button 2
        </ButtonText>
    </Button>;
}

const Drawer = createDrawerNavigator();

const Iphone2 = () => {
    return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component={Button2} />
        <Drawer.Screen name="Notifications" component={Button1} />
      </Drawer.Navigator>
};
export default Iphone2;