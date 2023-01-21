let user = prompt("Enter Snake, Water or Gun : ")
let cpuI = Math.floor(Math.random()*3)
let cpu=["Snake", "Water", "Gun"][cpuI]

const match = (cpu,user)=>{
     if(cpu==user){
        return "MATCH TIED"
     }
      // CPU IS SNAKE
     else if(cpu==="Snake" && user==="Water"){
        return "cpu"
     }

     else if(cpu==="Snake" && user==="Gun"){
        return "user"
     }

     // CPU IS GUN
     else if(cpu==="Gun" && user==="Water"){
        return "user"
     }

     else if(cpu==="Gun" && user==="Snake"){
        return "cpu"
     }

     // CPU IS WATER

     else if(cpu==="Water" && user==="Snake"){
        return "user"
     }

     else if(cpu==="Water" && user==="Gun"){
        return "cpu"
     }

}
let res = match(cpu,user)
document.write(`CPU : ${cpu} <br>  User : ${user} <br> The winner is : ${res}`)