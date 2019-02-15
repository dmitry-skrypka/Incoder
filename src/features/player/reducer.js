const initialState = {
  position: [0, 40],
  spriteLocation: "0 0",
  direction: "EAST",
  walkIndex: 0,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MOVE_PLAYER":
      return {
        ...action.payload
      };
    default:
      return state;
  }
};

export default playerReducer;
