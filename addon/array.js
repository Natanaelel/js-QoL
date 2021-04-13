Object.defineProperty(Array.prototype,"sum",{get:function(){if(this.every(e=>e+0==e)){return(this.reduce((a,b)=>a+b,0))};return(this.join("").split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}})

Object.defineProperty(Array.prototype,"avg",{get:function(){return(this.reduce((a,b)=>a+b,0)/this.length)}})
Object.defineProperty(Array.prototype,"prc",{get:function(){return(this.reduce((a,b)=>a*b))}})

Object.defineProperty(Array.prototype,"first",{get:function(){return(this[0])}})
Object.defineProperty(Array.prototype,"last",{get:function(){return(this[this.length-1])}})

Array.prototype.sort_by=function(func=x=>x){return([...this].sort((a,b)=>func(a)-func(b)))}

Array.prototype.each_slice=function(len){let ans=[];for(let i=0;i<this.length;i+=len){ans.push(this.slice(i,i+len))};return(ans)}