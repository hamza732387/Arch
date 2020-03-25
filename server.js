const
    express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    port = process.env.PORT || 3000
;
//  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(__dirname + "/Files"));

app.get("/" , (req , res)=>{
    res.sendFile(__dirname + '/Files/index.html')
})
app.get("/donate" , (req , res)=>{
    res.sendFile(__dirname + '/Files/donate.html')
})
app.get("/thankyou" , (req , res)=>{
    res.sendFile(__dirname + '/Files/Thankyou.html')
})

app.listen(port, () => {
    console.log(`server is listening on port ${port}`);
});
