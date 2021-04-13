Object.defineProperty(String.prototype,"sum",{get:function(){return(this.split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}})
Object.defineProperty(String.prototype,"chars",{get:function(){return(this.split(""))}})
Object.defineProperty(String.prototype,"ord",{get:function(){return(this.charCodeAt())}})
Object.defineProperty(String.prototype,"to_i",{get:function(){return(parseInt(this))}})
Object.defineProperty(String.prototype,"reverse",{get:function(){return(this.split("").reverse().join(""))}})
String.prototype.tr = function(rep, sub){return(this.split("").map(c=>rep.includes(c)?sub[Math.min(rep.indexOf(c),sub.length-1)]:c).join(""))}

