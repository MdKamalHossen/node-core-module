const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === "/"){
    res.write('Hellow Kamal Your are next Programmer try Your Best');
    res.write('MERN STACK');
    res.end();
    }
    else if(req.url ==="/about"){
        res.write("this is about Page");
        res.end();
    }
    else{
        res.write("Not found");
        res.end();
    }
});


server.listen(3000);
console.log('Server create success');