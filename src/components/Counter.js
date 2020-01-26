import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {setCount} from '../redux/actions/';
const Counter = ({count, setCount}) => {
  return (
    <View>
      <Text>This is a redux connected component</Text>
      <Text>
        Count from Redux <Text>{count}</Text>
      </Text>
      <Button title="ADD COUNT" onPress={() => setCount(count + 1)} />
      <Button
        title="SUB COUNT"
        onPress={() => count > 0 && setCount(count - 1)}
      />
      <Button title="RES COUNT" onPress={() => setCount(0)} />
    </View>
  );
};
const mapStateToProps = state => ({
  count: state.count.count,
});

const mapDispatchToProps = dispatch => bindActionCreators({setCount}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
