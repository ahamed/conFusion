var quad = require("./quard");
var prmpt = require("prompt");
prmpt.get(['a','b','c'],function(err,result){
   if(err){onErr(err);} 
    console.log("Command line input received : ");
    console.log("a: "+result.a);
    console.log("b: "+result.b);
    console.log("c: "+result.c);
    
    quad(result.a,result.b,result.c,function(Err,quardratic){
    if(Err){
        console.log("Errors: ",Err);
    }else{
        console.log("The roots are:- "+ quardratic.root1()+", "+quardratic.root2());
    }
});
});

