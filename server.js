
const
    io = require("socket.io"),
    server = io.listen(3000);

let
    sequenceNumberByClient = new Map();
	
console.log("Server Started on Port 3000 at date: ");
console.log(new Date(Date.now()).toLocaleString());
// event fired every time a new client connects:
server.on("connection", (socket) => {
    console.info(`Client connected [id=${socket.id}]`);
    // initialize this client's sequence number
    sequenceNumberByClient.set(socket, 1);
	
	socket.on("registeruser", function (data) {
    console.log('registeruser->');console.log(data);
  });
  
  socket.on("JSON", function (data) {
    console.log('JSON->');console.log(data);
  });
  
	socket.on("connectiontest", function (data) {
    console.log('connectiontest->');console.log(data);
  });
  
	socket.on("devices", function (data) {
    console.log('devices->');console.log(data);
  });
  
	socket.on("commands", function (data) {
    console.log('commands->');console.log(data);
  });

    // when socket disconnects, remove it from the list:
    socket.on("disconnect", () => {
        sequenceNumberByClient.delete(socket);
        console.info(`Client gone [id=${socket.id}]`);
    });
});

// sends each client its current sequence number
 // setInterval(() => {
 //   for (const [client, sequenceNumber] of sequenceNumberByClient.entries()) {
        //client.emit("deviceStatus", {user_id:'UR09370093519-382B7804F503',c_type:40,data_val1:'EL110'});
		 // client.emit("commandStatus", {user_id:'HB382B7804F503',c_type:45,data_val1:'31559',data_val2:'EL110',data_val3:'5'});
    	 // client.emit("deviceStatus", {user_id:'UR09370093519-382B7804F503',c_type:41,data_val1:'30559',data_val2:'EL110',data_val3:'5'});
    	  //client.emit('atime', {user_id:'HB382B7804F503',c_type:5});
		
	}
//},40000);  