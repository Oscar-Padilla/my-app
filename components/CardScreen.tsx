import React, {useState, useEffect} from "react";
import {Box, HStack, VStack, FlatList} from "@gluestack-ui/themed";
import {Avatar, AvatarImage, Heading, Text} from "@gluestack-ui/themed";

type JsonPlaceholder = {
    id: string;
    title: string;
    body: string;
    userId: string;
};

const CardScreen = () => {
    const [data, setData] = useState<JsonPlaceholder[]>([]);

    const getJsonPlaceholder = async () => {
        const response = await
        fetch('https://jsonplaceholder.typicode.com/posts/')
        const json = await response.json()
        setData(json);
        console.log(data)
    }

    useEffect(() => {
        getJsonPlaceholder();
    }, []);

    return <Box p="$10">
        <Heading fontSize="xl" p="4" pb="3">
            Inbox
        </Heading>
        <FlatList 
            data={data} 
            renderItem={({ item }) => 
            <Box borderBottomWidth="1" _dark={{
            borderColor: "muted.50"
        }} borderColor="muted.800" pl={["0", "4"]} pr={["0", "5"]} py="2">
                <HStack space={[2, 3]} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: item.id
                    }}/>
                    <VStack>
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.title}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.body}
                        </Text>
                    </VStack>
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.userId}
                    </Text>
                </HStack>
            </Box>} keyExtractor={item => item.id} />
    </Box>;
}

export default CardScreen