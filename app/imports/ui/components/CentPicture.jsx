import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class CentPicture extends React.Component {
  render() {
    const theStyle = { paddingBottom: '20px' };
    return (
        <Container style={theStyle}>
          <Image fluid
                 src="https://i0.wp.com/www.bpaviation.com/wp-content/uploads/2013/12/fueltruck.jpg?resize=980%2C370"/>
        </Container>
    );
  }
}
