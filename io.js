
// const io = require("socket.io")(http, {
//     cors: {
//         origin: ["http://localhost:3000"],
//         credentials: true
//     },
//     transports: ['websocket', 'polling', 'flashsocket']
// });

// // Event Khởi tạo kết nối
// io.on("connect", (socket) => {
//   socket.emit("wellcome-msg", `Wellcome user ${socket.id}`)


//   socket.on('message', data => {
//       io.emit('message', data)
//   })

//   socket.on("disconnect", ()=> {
//       io.emit("User has left")
//   })
// });