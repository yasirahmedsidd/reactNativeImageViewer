import React, {useEffect} from 'react';
import {ScrollView, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchUser} from '../redux/actions/';
import PropTypes from 'prop-types';

const UsersList = props => {
  //   useEffect(() => {
  //     props.fetchUser();
  //   }, []);

  //   console.log(props.setError);
  return (
    <ScrollView>
      <Button
        title="fetch Users"
        onPress={() => {
          props.fetchUser();
        }}
      />
      <Text>{JSON.stringify(props.users.length)}</Text>
      <Text>{JSON.stringify(props.error)}</Text>
      <Text>{JSON.stringify(props.loading)}</Text>
    </ScrollView>
  );
};
const mapStateToProps = state => ({
  users: state.user.users,
  error: state.user.error,
  loading: state.user.loading,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({fetchUser}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);
