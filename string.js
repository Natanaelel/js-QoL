Object.defineProperty(String.prototype,"sum",{get:function(){return(this.split("").map(c=>c.charCodeAt()).reduce((a,b)=>a+b,0))}}) // sum of ascii codes
Object.defineProperty(String.prototype,"chars",{get:function(){return(this.split(""))}}) // array with every char
Object.defineProperty(String.prototype,"ord",{get:function(){return(this.charCodeAt())}}) // ascii code of first char

Object.defineProperty(String.prototype,"i",{get:function(){return(parseInt(this))}}) // int
Object.defineProperty(String.prototype,"f",{get:function(){return(parseFloat(this))}}) // float

Object.defineProperty(String.prototype,"fl",{get:function(){return(parseInt(this))}}) // floor
Object.defineProperty(String.prototype,"ce",{get:function(){return(Math.ceil(parseFloat(this)))}}) // ceil

Object.defineProperty(String.prototype,"bin",{get:function(){return(Math.ceil(parseInt(this,2)))}}) // binary string to decimal
Object.defineProperty(String.prototype,"oct",{get:function(){return(Math.ceil(parseInt(this,8)))}}) // octal string to decimal
Object.defineProperty(String.prototype,"hex",{get:function(){return(Math.ceil(parseInt(this,16)))}}) // hex string to decimal



Object.defineProperty(String.prototype,"reverse",{get:function(){return(this.split("").reverse().join(""))}}) // reverse string

String.prototype.tr = function(rep, sub=""){return(this.split("").map(c=>rep.includes(c)?sub[Math.min(rep.indexOf(c),sub.length-1)]:c).join(""))} // string translate

Object.defineProperty(String.prototype,"bytes",{get:function(){return(this.split("").map(c=>c.charCodeAt()))}}) // array of ascii codes

Object.defineProperty(String.prototype,"squeeze",{get:function(){return(this.replace(/(.)\1+/g, m=>m[0]))}}) // string with consecutive identical chars reduced to one

Object.defineProperty(String.prototype,"ucase",{get:function(){return(this.replace(/./g, m=>m.toUpperCase()))}}) // uppercase string
Object.defineProperty(String.prototype,"dcase",{get:function(){return(this.replace(/./g, m=>m.toLowerCase()))}}) // lowercase string
Object.defineProperty(String.prototype,"swcase",{get:function(){return(this.replace(/./g, m=>m==m.toUpperCase()?m.toLowerCase():m.toUpperCase()))}}) // swapcase string


Object.defineProperty(String.prototype,"esc",{get:function(){return(this.replace(/[\.\\\/\+\*\?\!\[\]\(\)\{\}]/g,"\\"+"$&"))}}) // escape regex special chars
Object.defineProperty(String.prototype,"unesc",{get:function(){return(this.replace(/\\(.)/g,"$1"))}}) // unescape all backslashes