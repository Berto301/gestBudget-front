import socketIOClient from "socket.io-client";
const ENDPOINT =process.env?.REACT_APP_SERVER
const socket = socketIOClient(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});
export {ENDPOINT,socket}
export default socket