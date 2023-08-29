import React from 'react';
import {Button, Text, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

function HomeScreen() {
	const navigation = useNavigation();
	const onPress = () => {
		navigation.navigate('Detail');
	};
	return (
		<View>
			<Text>Home</Text>
			<Button title="Open Detail" onPress={onPress} />
		</View>
	);
}

function DetailScreen() {
  return (
    <View>
      <Text>Detail</Text>
    </View>
  );
}

function RootStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen component={HomeScreen} name='Home' />
      <Stack.Screen component={DetailScreen} name="Detail" />
    </Stack.Navigator>
  );
}

export default RootStack;
