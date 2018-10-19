import React from 'react';
import { Container } from 'semantic-ui-react';

export default class TextBox extends React.Component {
  render() {
    const textStyle = { paddingTop: '20px', paddingBottom: '20px', fontSize: '24px' };
    return (
        <Container style={textStyle}>
          <p>
            Aloha and welcome to Barbers Point Aviation Services. Thank you for coming to visit our historic piece of
            paradise
            at Kalaeloa Airport. Formerly Barbers Point Naval Air Station, the airport’s military past means long
            runways,
            and
            convenient ocean arrivals and departures. With a full range of FBO services, and 24/7 fuel operations we
            are
            committed to offering premier aircraft handling with aloha.
          </p>
        </Container>
    );
  }
}
