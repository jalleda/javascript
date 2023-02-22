
         var cr=[23,45,56,34]
    var dr=[23,45,56,"hi"]
    
    var i
   var e=0
   
    if(cr.length==dr.length){
    for(var i=0;i<=cr.length-1;i++){
        if(cr[i]===dr[i]){
            e++
        }
    }
            if(cr.length==e){
                console.log("array are same")
            }
            else{
                console.log("array are not same")
            }
    
    }

else{
    console.log("array are not same")
}
    
   