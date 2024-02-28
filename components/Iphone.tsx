import { Box, Center, Button, ButtonText, ButtonIcon, ButtonGroup, Icon, AddIcon, InfoIcon, ButtonSpinner, ArrowUpIcon, Heading, Text, HStack, VStack, ThreeDotsIcon, Input, InputField } from '@gluestack-ui/themed';
import { EditIcon, ArrowLeftIcon } from 'lucide-react-native';
import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


const Button1 = () => {
    return <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={false}>
    <ButtonText>
        Button 1
    </ButtonText>
</Button>;
}

const Button2 = () => {
    return <Button action={"primary"} variant={"solid"} size={"lg"} isDisabled={false}>
    <ButtonText>
        Button 2
    </ButtonText>
</Button>;
}

const Tab = createBottomTabNavigator();

const Iphone = () => {
    return <Tab.Navigator>
    <Tab.Screen name="Home" component={Button1} />
    <Tab.Screen name="Settings" component={Button2} />
  </Tab.Navigator>  
};
export default Iphone;