import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToggleMode from './ToggleModeComponent'
import FacebookEmojiCounter from './Facebookemoji'

ReactDOM.render(
  <React.Fragment>
  <FacebookEmojiCounter type= "Like"/>
  < FacebookEmojiCounter type= "Love"/>
  < FacebookEmojiCounter type= "happy"/>
  < ToggleMode/>
  </React.Fragment>,
 document.getElementById('root'));

