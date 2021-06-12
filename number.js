Object.defineProperty(Number.prototype,"chr",{get:function(){return(String.fromCharCode(this))}}) // ascii char from code
Object.defineProperty(Number.prototype,"s",{get:function(){return(this.toString())}}) // string
Object.defineProperty(Number.prototype,"digits",{get:function(){return(this.toString().match(/\d/g).map(c=>parseInt(c)).reverse())}}) // array of digits

Object.defineProperty(Number.prototype,"abs",{get:function(){return(Math.abs(this))}}) // absolute value
Object.defineProperty(Number.prototype,"sqrt",{get:function(){return(Math.sqrt(this))}}) // absolute value

Object.defineProperty(Number.prototype,"fl",{get:function(){return(Math.floor(this))}}) // floor
Object.defineProperty(Number.prototype,"ce",{get:function(){return(Math.ceil(this))}}) // ceil
Object.defineProperty(Number.prototype,"rd",{get:function(){return(Math.round(this))}}) // round
Object.defineProperty(Number.prototype,"i",{get:function(){return(parseInt(this))}}) // int

Object.defineProperty(Number.prototype,"bin",{get:function(){return(this.toString(2))}}) // binary string
Object.defineProperty(Number.prototype,"oct",{get:function(){return(this.toString(8))}}) // octal string
Object.defineProperty(Number.prototype,"hex",{get:function(){return(this.toString(16))}}) // hexadecimal string -> "ffaa90"
Object.defineProperty(Number.prototype,"Hex",{get:function(){return(this.toString(16).toUpperCase())}}) //hexadecimal string -> "FFAA90"

Object.defineProperty(Number.prototype,"prime",{
    get:function(){
        if(this <= 1){return(false)}
        if(this == 2){return(true)}
        for(let i = Math.ceil(Math.sqrt(this)); i > 1; i--){
            if(this%i==0)return(false)
        }
        return(true)
    }
}) // check if number is prime





Number.prototype.log = function(){
    console.log(this.valueOf())
}

Number.prototype.debug = function(func){
    if(func){
        console.log(func(this))
    }else{
        console.log(this)
    }
}
