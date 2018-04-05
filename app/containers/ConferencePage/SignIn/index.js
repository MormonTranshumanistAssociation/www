import * as React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import styled from 'styled-components';
import { compose, graphql } from 'react-apollo';
import { inject, observer } from 'mobx-react';
import { Title } from 'components/MarkdownProfiles';
import Button from 'components/Button';
import gql from 'graphql-tag';

// import lock, { checkSession, getUserInfo } from '../auth0Lock';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const ButtonRow = styled(Row)`
  margin-top: 16px;
  align-items: flex-start;
`;

const InputLabel = styled.label`
  display: flex; 
  flex: none;
`;
const InputField = styled.input`
  display: flex;
  flex: 1;
  margin: 4px 0;
  border: 1px solid #ddd;
  height: 2em;
  padding: 0.5em;
  border-radius: 2px;
  max-width: 20em;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 1em;
`;

const loginUserMutation = gql`
  mutation LoginUser($input: LoginUserInput!) {
    loginUser(input: $input) {
      token
      user {
        id
        username
        createdAt
      }
    }
  }
`;

class SignIn extends React.PureComponent {

  constructor() {
    super();
    this.state = {
      error: null,
      username: '',
      password: '',
      profile: null,
    };
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.authenticate();
    return false;
  };

  authenticate = async () => {
    const { loginUser, authStore = {} } = this.props;

    let token = authStore.token;
    let error = null;
    try {
      console.log({ token });
      if (!token) {
        const { username, password } = this.state;
        const response = await loginUser({ username, password });
        console.log({ response });
        token = _.get(response, 'data.loginUser.token');
        console.log({ token });
      }
    } catch (err) {
      error = err;
      token = null;
    } finally {
      this.setState({ error });
      authStore.setToken(token);
    }
  };

  signOut = () => {
    this.props.authStore.setToken(null);
  };

  renderForm = () => (
    <Form onSubmit={this.handleSubmit}>
      <Row>
        <InputLabel for="username">Username</InputLabel>
        <InputField
          id="username"
          name="username"
          value={this.state.username}
          onChange={this.handleInputChange}
        />
      </Row>
      <Row>
        <InputLabel for="password">Password</InputLabel>
        <InputField
          id="password"
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
        />
      </Row>
      <ButtonRow>
        <Button><input type="submit" value="Log in" /></Button>
      </ButtonRow>
    </Form>
  );

  renderLogoutButton = () => (
    <Button><button onClick={this.signOut}>Log out</button></Button>
  );

  render() {
    const { error } = this.state;
    const { authStore = {} } = this.props;
    return (
      <div>
        <Title>Admin Login</Title>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
        {!authStore.token && this.renderForm()}
        {!!authStore.token && this.renderLogoutButton()}
      </div>
    );
  }
}

SignIn.propTypes = {
  loginUser: PropTypes.func,
  authStore: PropTypes.object,
};

export default compose(
  graphql(loginUserMutation, {
    props: (props) => ({
      ...props,
      loginUser: ({ username, password }) =>
        props.mutate({
          variables: { input: { username, password } },
        }),
    }),
  }),
  inject('authStore'),
  observer,
)(SignIn);
