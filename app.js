const express = require("express"); //导入express框架

const app = express();

app.get('/', (req,res) => {
    res.send("服务器启动成功")

})

app.listen(10317, console.log("服务器就绪"))