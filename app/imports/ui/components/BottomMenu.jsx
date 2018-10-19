import React from 'react';
import { Container, Grid, Button, Icon } from 'semantic-ui-react';

export default class BottomMenu extends React.Component {
  render() {
    const textStyle = { fontSize: '24px' };
    return (
        <Container>
          <Grid columns='four' className='centmenu'>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="plane"/></Button>
              <h3 style={textStyle}>
                Aircraft Handling
              </h3>
              <p>
                Barbers Point Aviation Services is committed to offering premier FBO services with aloha. Barbers Point
                Aviation Services offers 24/7 service.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="truck"/></Button>
              <h3 style={textStyle}>
                Ground Services
              </h3>
              <p>
                Barbers Point Aviation Services include amenities that will fill your passengers with the feeling of
                aloha
                and the spirit of Hawaii. We also offer a comfortable receiving area with wi-fi access for airline crews
                needing to conduct flight planning.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="money bill alternate outline"/></Button>
              <h3 style={textStyle}>
                Check Fuel Prices
              </h3>
              <p>
                24-hour full service Jet-A and 24-Hour self service AVGAS 100. Discounts are available for purchases of
                1500
                gallons or more. We guarantees all of our prices posted online
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
            <Grid.Column>
              <Button massive circular color='green'><Icon name="certificate icon"/></Button>
              <h3 style={textStyle}>
                Flight School
              </h3>
              <p>
                Barbers Point Flight School is a full-service flight school owned and operated by experienced pilots and
                driven by a goal of passing on aeronautical knowledge and experience.
              </p>
              <div className="ui tiny button">
                <i className="cog icon"></i> Learn More
              </div>
            </Grid.Column>
          </Grid>
        </Container>
    );
  }
}
