// https://developer.spotify.com/
// documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize";
const redirectUri = "http://localhost:3000/";

const clientId = "8adbf19a630d407ca354468126be3264";

const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  " "
)}&response_type=token&show_dialog=true`;

export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

// https://accounts.spotify.com/authorize?
// client_id=8adbf19a630d407ca354468126be3264
// redirect_uri=http://localhost:3000/
// scope=user-read-playback-state%20user-modify-playback-state%20user-read-currently-playing
// response_type=token
// show_dialog=true
//localhost:3000/
// #access_token=BQAYP6iC15moFWNML8TN81k0TMGrTBjt5t8QXEOfStAQDhvTx7fw7iw4_-C1KZNLinaKmktdsupkt2pmhafalao4BsMUuzr-FoefbiO-qy-hAxNNE_rO8vVZ7Cs3p8YGfMuyUdQ5a7BxVrJAIKLKpd2EmemyZhSxb1xgmEmpKRuGBCGEGldrdQO7S8jF9pCPWwsspGcl8mkiI7H-wGC6SA&token_type=Bearer&expires_in=3600

export const greenColor = "#1db954";
export const black = "#191414";
