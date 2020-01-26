import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableNativeFeedback,
  Image,
} from 'react-native';
import {Provider} from 'react-redux';
import store from './src/redux/store/store';
// import rootReducer from './src/redux/reducers/rootReducer'
// import {connect} from 'react-redux';
import Counter from './src/components/Counter';
import UsersList from './src/components/UsersList';
import ImageView from 'react-native-image-viewing';
const App = () => {
  const images = [
    {
      uri: 'https://i.picsum.photos/id/237/400/400.jpg',
    },
  ];

  const [visible, setIsVisible] = useState(false);

  return (
    <Provider store={store}>
      {/* <Counter /> */}
      {/* <UsersList /> */}
      {/* <Text>Image View</Text> */}
      {/* <Button title="open" onPress={() => setIsVisible(true)} /> */}
      <TouchableNativeFeedback onPress={() => setIsVisible(true)}>
        <Image
          source={{
            uri: 'https://i.picsum.photos/id/237/400/400.jpg',
          }}
          style={{flex: 1, width: '100%', height: '100%'}}
        />
      </TouchableNativeFeedback>
      <ImageView
        images={images}
        imageIndex={0}
        visible={visible}
        onRequestClose={() => setIsVisible(false)}
      />
    </Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
