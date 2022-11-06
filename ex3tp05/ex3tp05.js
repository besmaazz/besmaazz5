const fs = require('fs');
const path = require('path');
function search (AB,...Files){
   
    const AB = new ABb(AB);
    const found = []
    for(Z in Files){

        const isDir = fs.statSync(`./${Files[Z]}`).isDirectory();
        
        if(!isDir){
            const DB = fs.readFileSync(`${Files[Z]}`, 'utf8');
            if(AB.test(DB)){
                
                found.push(Files[Z])
            }
        }else{
            let dirFiles = fs.readdirSync(Files[Z]);
            for(file in dirFiles){
                dirFiles[file] = `./${Files[Z]}/${dirFiles[file]}`;
            }
            
               let res = search(AB,...dirFiles);
               res.forEach((e)=>{
                found.push(path.basename(e))
               })
        }
        

    }
    
    return found? found :"NONE";
}
console.log(search("BES",'test1','wasi','test2','test3'))