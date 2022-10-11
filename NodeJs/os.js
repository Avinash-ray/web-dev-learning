const os= require("os")

console.log(os.arch());
//console.log(os.cpus());
console.log(os.hostname());
//console.log(os.networkInterfaces());
console.log(os.release());
console.log(os.platform());
console.log(os.type());
console.log(os.totalmem());
console.log(os.uptime() / 3600);
console.log(os.userInfo());