//https://developer.spotify.com/
//documentation/web-playback-sdk/quick-start/

export const authEndpoint = "https://accounts.spotify.com/authorize"; 

const redirectUri = "http://localhost:3000/";

const clientId= "940e9df64b3248a3825dc1297482e208";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

// look more into reduce functions


export const getTokenFromUrl = () =>{
    return window.location.hash 
    .substring(1)
    .split("&")
    .reduce((initial, item ) => {
        // #accessToken=mysuperKey&name=john&joe
    //the reduce splits the url from = and takes the acessToken
//go into the initial array that is being returned and for the accessToken, [parts[0]], decodeURIComponent that is "mysuperkey" and we passing it to [parts[1]]
        let parts = item.split("=");
        initial[parts[0]] = decodeURIComponent(parts[1]);

        return initial;
     }, {});
};

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show-dialog=true`;