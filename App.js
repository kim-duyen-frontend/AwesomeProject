import React from 'react';
import {Text, View, Image, TextInput, Button} from 'react-native';

const App = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text style={{fontSize: 20, color: '#f80'}}>
        Hello Kim Duyên, React Native
      </Text>
      <TextInput
        style={{
          width: 200,
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
        }}
        defaultValue="You can type in me"
      />
      <Button title="Click me" />
      <Image source={{uri: 'https://reactnative.dev/docs/assets/p_cat2.png'}} style={{ width: 200, height: 200 }} />
    </View>
  );
};

export default App;
