var a = 1;
var b = 4;
var c = 1;

var discremenate = function(a,b,c){
    return ( b*b - 4*a*c );
    
};
var root1 = 0.0;
var root2 = 0.0;
root1 = ( -b - Math.sqrt(discremenate(a,b,c)))/(2 * a);
root2 = ( -b + Math.sqrt(discremenate(a,b,c)))/(2 * a);

console.log("Roots are: "+root1 + " and " + root2 + ","+discremenate(a,b,c));