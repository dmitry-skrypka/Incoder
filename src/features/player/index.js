import React from "react";
import playerWalk from "./player_walk.png";
import { connect } from "react-redux";
import handleMovement from "./movement";

function Player(props) {
    console.log(props)
  return (
    <div
      style={{
        position: "absolute",
        top: props.position[1],
        left: props.position[0],
        backgroundImage: `url('${playerWalk}')`,
        backgroundPosition: props.spriteLocation,
        width: "40px",
        height: "40px"
      }}
    />
  );
}

function mapStateToProps(state) {
  return {
    ...state.player
  };
}

export default connect(mapStateToProps)(handleMovement(Player));
