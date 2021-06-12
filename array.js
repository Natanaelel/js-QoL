Object.defineProperty(Array.prototype,"sum",{get:function(){if(this.every(e=>e+0==e)){return(this.reduce((a,b)=>a+b,0))};return(this.join("").split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}})
Object.defineProperty(Array.prototype,"prc",{get:function(){return(this.reduce((a,b)=>a*b))}})

Object.defineProperty(Array.prototype,"avg",{get:function(){return(this.map(x=>parseInt(x)).reduce((a,b)=>a+b,0)/this.length)}})
Object.defineProperty(Array.prototype,"med",{get:function(){arr=this.map(x=>parseInt(x)).sort((a,b)=>a-b);return([(arr[arr.length/2-1]+arr[arr.length/2])/2,arr[Math.floor(arr.length/2)]][arr.length%2])}})

Object.defineProperty(Array.prototype,"first",{get:function(){return(this[0])}})
Object.defineProperty(Array.prototype,"last",{get:function(){return(this[this.length-1])}})


Object.defineProperty(Array.prototype,"max",{get:function(){return(this.reduce((a,b)=>Math.max(a,b)))}})
Object.defineProperty(Array.prototype,"min",{get:function(){return(this.reduce((a,b)=>Math.min(a,b)))}})


Array.prototype.sort_by=function(func=x=>x){return([...this].sort((a,b)=>func(a)-func(b)))}

Array.prototype.each_slice=function(len){let ans=[];for(let i=0;i<this.length;i+=len){ans.push(this.slice(i,i+len))};return(ans)}

Array.prototype.rotate = function (len) {
    len = (len%this.length+this.length)%this.length
    return this.slice(len).concat(this.slice(0,len))
}


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


Array.prototype.min_by=function(func=x=>x){
    let min = this[0]
    let minval = func(this[0])
    this.slice(1).forEach(e=>{
        let val = func(e)
        if(val < minval){
            min = e
            minval = val
        }
    })
    return(min)
}

Array.prototype.max_by=function(func=x=>x){
    let max = this[0]
    let maxval = func(this[0])
    this.slice(1).forEach(e=>{
        let val = func(e)
        if(val > maxval){
            max = e
            maxval = val
        }
    })
    return(max)
}
Object.defineProperty(Array.prototype,"chr",{get:function(){return(this.map(c=>String.fromCharCode(c)))}})
Object.defineProperty(Array.prototype,"s",{get:function(){return(this.map(c=>String.fromCharCode(c)).join(""))}})

Object.defineProperty(Array.prototype,"i",{get:function(){return(this.map(e=>parseInt(e)))}})
Object.defineProperty(Array.prototype,"f",{get:function(){return(this.map(e=>parseFloat(e)))}})



Array.prototype.log = function(){
    console.log(this.valueOf())
}

Array.prototype.debug = function(func){
    if(func){
        console.log(func(this))
    }else{
        console.log(this)
    }
}
