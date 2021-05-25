// sum of elements in array, if any element is string: return sum of ascii chars
Object.defineProperty(Array.prototype,"sum",{get:function(){if(this.every(e=>e+0==e)){return(this.reduce((a,b)=>a+b,0))};return(this.join("").split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}})



Object.defineProperty(Array.prototype,"avg",{get:function(){return(this.reduce((a,b)=>a+b,0)/this.length)}})
Object.defineProperty(Array.prototype,"prc",{get:function(){return(this.reduce((a,b)=>a*b))}})

Object.defineProperty(Array.prototype,"first",{get:function(){return(this[0])}})
Object.defineProperty(Array.prototype,"last",{get:function(){return(this[this.length-1])}})

Object.defineProperty(Array.prototype,"uniq",{
    get:function(){
        let arr = []
        this.forEach(e => {
            if(!arr.includes(e)){
                arr.push(e)
            }
        });
        return(arr)
    }
})

Object.defineProperty(Array.prototype,"max",{get:function(){return(this.reduce((a,b)=>Math.max(a,b)))}})
Object.defineProperty(Array.prototype,"min",{get:function(){return(this.reduce((a,b)=>Math.min(a,b)))}})

Array.prototype.each_slice=function(len){let ans=[];for(let i=0;i<this.length;i+=len){ans.push(this.slice(i,i+len))};return(ans)}


Array.prototype.sort_by=function(func=x=>x){return([...this].sort((a,b)=>func(a)-func(b)))}
Array.prototype.max_by=function(func=x=>x){return(this.reduce((a,b)=>{return([a,b].find(x=>func(x)==Math.max(func(a),func(b))))}))}
Array.prototype.min_by=function(func=x=>x){return(this.reduce((a,b)=>{return([a,b].find(x=>func(x)==Math.min(func(a),func(b))))}))}


Object.defineProperty(Array.prototype,"chr",{get:function(){return(this.map(c=>String.fromCharCode(c)))}})
Object.defineProperty(Array.prototype,"s",{get:function(){return(this.map(c=>String.fromCharCode(c)).join(""))}})

