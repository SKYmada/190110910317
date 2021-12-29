const express = require("express"); //导入express框架
const ejs = require("ejs")
const app = express();

app.use('/photo',express.static("photo"));
app.use(express.static("node_modules"));

//欢迎页面
app.get('/',(req, res)=>{
    res.render('index.ejs', {
        username:null
    })
})
app.get('/index.ejs',(req, res)=>{

    res.render('index.ejs', {
        username:null
    })

})

//登陆页面
app.get('/login.ejs',(req, res)=>{

    res.render('login.ejs', {
        username:null,
        info:null
    })

})

//注册
app.get('/reg.ejs',(req, res)=>{

    res.render('reg.ejs', {
        username:null,
        info:null
    })

})

app.listen(10317, console.log("服务器就绪"))