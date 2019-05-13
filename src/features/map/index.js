import React from "react";
import { connect } from "react-redux";
import "./styles.css";

import { SPRITE_SIZE } from "../../config/constants";

function getTileSprite(type) {
  switch (type) {
    case 0:
      return "grass";
    case 5:
      return "rock";
    case 6:
      return "tree";
    case 7:
      return "fridge";
  }
}

function MapTile(props) {
  return (
    <div
      style={{ height: SPRITE_SIZE, width: SPRITE_SIZE }}
      className={`tile ${getTileSprite(props.tile)}`}
    />
  );
}

function MapRow(props) {
  return (
    <div className="row">
      {props.tiles.map(tile => (
        <MapTile tile={tile} />
      ))}
    </div>
  );
}

function Map(props) {
  return (
    <div
      style={{
        backgroundColor: "#1c8a1c",
        width: "1200px",
        height: "560px",
        border: '4px solid white'
      }}
    >
      {props.tiles.map(row => (
        <MapRow tiles={row} />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    tiles: state.map.tiles
  };
}
export default connect(mapStateToProps)(Map);
