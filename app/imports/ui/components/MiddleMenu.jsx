import React from 'react';
import { Menu, Container, Icon } from 'semantic-ui-react';

export default class MiddleMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="midmenu">
          <Container className='midcont'>
            <Menu.Item>HOME</Menu.Item>
            <Menu.Item>ABOUT US</Menu.Item>
            <Menu.Item>FBO</Menu.Item>
            <Menu.Item>AIR TOURS</Menu.Item>
            <Menu.Item>FLIGHT SCHOOL</Menu.Item>
            <Menu.Item>PILOT SHOP</Menu.Item>
            <Menu.Item>LOCATION</Menu.Item>
            <Menu.Item>CONTACT US</Menu.Item>
            <Menu.Item><Icon name="search"/></Menu.Item>
          </Container>
        </Menu>
    );
  }
}
