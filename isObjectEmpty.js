function isEmpty(obj){
    if(obj.length===0){
        return true;
    }else if(Object.keys(obj).length===0){
        return true;
    }else if(obj.length>0){
        return false;
    }else if(Object.keys(obj).length>0){
        return false;
    }else if((Object.keys(obj).length>0)&&(obj.length=0)){
        return false
    }
}
console.log(isEmpty({'x':5,'y':42}));
console.log(isEmpty([1,2,3]));
console.log(isEmpty({}));
console.log(isEmpty([]));
console.log(isEmpty({"length": 0}))