//1.创建一个空对象，变量名为user；
var user = new Object();
user.name = "John";
user.surname = "Mike";
console.log("name:"+user.name+",surname:"+user.surname);
user.name = "Peter";
console.log("name:"+user.name+",surname:"+user.surname);
delete user.name
console.log("user:"+user.name);//will console undefined

//2.计算下面fruit对象共有多少个水果，应该输出50
var fruit = {
    apple: 20,
    pear: 20,
    peach: 10
    };
console.log(fruit.apple + fruit.pear + fruit.peach);