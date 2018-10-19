import React from 'react';
import { Container, Image, Grid, Icon, Button } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    const imageStyle = { paddingTop: '30px', paddingBottom: '20px' };
    const tabStyle = { paddingTop: '10px', paddingBottom: '10px' };
    return (
        <Container>
          <Grid container verticalAlign='middle'>
            <Grid.Row columns='two'>
              <Grid.Column>
                <Image style={imageStyle} src='http://www.bpaviation.com/wp-content/uploads/2014/01/green_logo1.png'/>
              </Grid.Column>
              <Grid.Column>
                <Button icon floated='right' style={tabStyle}><Icon name="youtube"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="google"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="facebook f"/></Button>
                <Button icon floated='right' style={tabStyle}><Icon name="twitter"/></Button>
                <div className="ui right aligned header">info@bpaviation.com | Office: + 1 808 518 4660 | 24-Hour Line:
                  +1 808 375 9244
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
    );
  }
}
