

export class IdGenerate{
    public idGenerate():String{
        var d=new Date();
var y= d.getFullYear();
var m=d.getMonth();
var dd=d.getDate();
var h=d.getHours();
var mm=d.getMinutes();
var s=d.getSeconds();
const id=y+''+m+''+dd+''+h+''+mm+''+s;
console.log
        return id
        console.log
    }
}





