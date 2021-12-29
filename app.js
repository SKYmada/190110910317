const express = require("express"); //导入express框架

const app = express();

app.use('/',express.static("public"));
app.use('/',express.static("photo"));
app.get('/');

app.listen(10317, console.log("服务器就绪"))