import React from 'react';
import BottomMenu from '../components/BottomMenu';
import MiddleMenu from '../components/MiddleMenu';
import CentPicture from '../components/CentPicture';
import TextBox from '../components/TextBox';

export default class BPAviation extends React.Component {

  render() {
    return (
        <div>
          <MiddleMenu/>
          <TextBox/>
          <CentPicture/>
          <BottomMenu/>
        </div>
    );
  }
}
