import React, { Component } from 'react';
import { Container, Header, Content, ListItem, CheckBox, Text, Body } from 'native-base';
export default class CheckBoxExample extends Component {
  render() {
    return (
      <Container>
        <Content>
          <ListItem>
            <CheckBox checked={true} />
            <Body>
              <Text>Two Factor Authentication</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Body>
              <Text>Clear data after 24 hours</Text>
            </Body>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} color="green"/>
            <Body>
              <Text>Share Personal data with application</Text>
            </Body>
          </ListItem>
        </Content>
      </Container>
    );
  }
}