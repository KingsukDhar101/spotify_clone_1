export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  token:
    "BQBAffUFp4WKQX9MconBYc1Os1t5QA7IjLIYJ0nQtBzKw7dwFPYGuQkX8554OFByjkbOKZmbxWm7-llYIdZL3aezMZ7dnrKcV0Waaa65yrYQ2oW-WcYjFOXALlYf4ARwlkQLoVWFdAuWodBx60KxuVVsSzAwChgrkvr20jSwPNHv9937hrEBr8l6vKFCqK_cKxWg7ra212_ya6k5K3MFQw",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        user: action.token,
      };
    default:
      return state;
  }
};

export default reducer;
