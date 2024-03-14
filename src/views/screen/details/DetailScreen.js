import { View, Text, Button } from 'react-native';
import React from 'react';

export default function DetailScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>DetailScreen</Text>
      <Button title="Kembali" onPress={() => navigation.goBack()} />
    </View>
  );
}
