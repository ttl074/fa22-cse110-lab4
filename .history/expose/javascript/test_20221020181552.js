function modArray(array,callback){
    const newArr=[]
    for(let i=0;i<array.length;i++){
        newArr.push(callback(array[i]));
    }
    console.log(newArr)
    return newArr;
}
function doSomething(num){
    return num*2
}
modArray([1,2,3],doSomething)