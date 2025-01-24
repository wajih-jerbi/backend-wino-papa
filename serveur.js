const http= require('http');
const serveur=http.createServer((req,res)=>{
    
    
    
    if(req.url=="/home"){
        res.statusCode=200
        res.write("welcome from home ")
    }else if(req.url=="/taraji"){
        res.statusCode=200
        res.write("taraji ye dawla ");
    }else{
        res.statusCode=404
        res.write("not found")
    }
    
    
        res.end();


})

serveur.listen(5000,()=>{
    console.log("seveur est connecté convenablement ");
})


