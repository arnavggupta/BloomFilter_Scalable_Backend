import crypto from "crypto";

class BloomFilter{

    constructor(size,hashcount){
        this.bitArray= new Array(size).fill(0);
        this.size=size;
        this.hashcount=hashcount; 
    }
    hash(value,seed){
        const hash= crypto.createHash("md5");
hash.update(value+seed.toString());
return parseInt(hash.digest("hex"),16)%this.size;
    }
    add(value){
        for(let i=0;i<this.hashcount;i++){
           
            const index=this.hash(value,i);
            this.bitArray[index]=1;
        }
    }

    alreadyexits(value){

        for(let i=0;i<this.hashcount;i++){
            const index= this.hash(value,i);
            if(this.bitArray[index]===0){
                return false;
            }
        }
        return true;
    }




};

export default BloomFilter;