Object.defineProperty(Number.prototype,"chr",{get:function(){return(String.fromCharCode(this))}})
Object.defineProperty(Number.prototype,"to_s",{get:function(){return(this.toString())}})
Object.defineProperty(Number.prototype,"digits",{get:function(){return(this.toString().match(/\d/g).map(c=>parseInt(c)).reverse())}})