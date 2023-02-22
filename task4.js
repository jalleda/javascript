
        var ar=[
            {
                name:"mohan",
                age:"22",
                gender:"male",
                edu:"B.tech",
                salary:22000
            },
            {
                name:"sriharan",
                age:"23",
                gender:"male",
                edu:"B.tech",
                salary:22000
            },
            {
                name:"venkat",
                age:" 24",
                gender:"male",
                edu:"degree",
                salary:22000
            },
            {
                name:"gopi",
                age:"26",
                gender:"male",
                edu:"B.tech",
                salary:22000
            },
            {
                name:"manasa",
                age:"23",
                gender:"female",
                edu:"B.tech",
                salary:22000
            },
        ]
      var d=  ar.map(function(n,i){
            return n.name
        })
        
         console.log(d)   
         
          ar.filter(function(s,k){
            if(s.salary>=20000){
             console.log(s.name)   
            }
        })
       var sum= ar.reduce((t,y)=>
             t+y.salary,0
            
             )
             console.log(sum)
        function asd(){
        var f=ar.splice(2,1)
            console.log(ar)
        }
        console.log(ar[3])
      