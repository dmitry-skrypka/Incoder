import React, { Component } from "react";
import "./styles.css";
import history from "../../config/history";
import ReactAudioPlayer from "react-audio-player";

class Menu extends Component {
  audioComponent = () => (
    <ReactAudioPlayer
      src="https://ericskiff.com/music/Resistor%20Anthems/05%20Come%20and%20Find%20Me.mp3"
      autoPlay={true}
      // controls
      preload
    />
  );

  render() {
    return (
      <div className="menu">
        <div className="menu_logo" />
        <div className="menu_buttons_container">
          <div
            className="menu_button_new_game"
            onClick={() => {
              history.push("/game");
            }}
          >
            START NEW GAME
          </div>
          <div className="menu_button">OPTIONS</div>
          <div className="menu_button">SCORE</div>
        </div>

        {this.audioComponent()}
      </div>
    );
  }
}

export default Menu;
