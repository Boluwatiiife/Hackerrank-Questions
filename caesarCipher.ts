function cipher(s:string,k:number){
    let alphabets:any=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let resultt:any=[];
    for(let j=0;j<s.length;j++){
        if(/[a-zA-Z]/.test(s[j])){
        if(s[j]==='-'){
            resultt.push(s[j]);
        }else if(s[j]==='\''){
            resultt.push(s[j])
        }else if(s[j]==='/'){
            resultt.push(s[j]);
        }else if(s[j]==='`'){
            resultt.push(s[j]);
        }
        for(let i=0;i<alphabets.length;i++){

            if(s[j]===alphabets[i]&&i+k>alphabets.length){
                resultt.push(alphabets[((i+k)-alphabets.length)]);
                }else if(s[j]===alphabets[i]){
                    resultt.push(alphabets[i+k]);
                }else if(s[j].toLowerCase() ===alphabets[i]&&i+k>alphabets.length){
                    resultt.push(alphabets[((i+k)-alphabets.length)].toUpperCase());
                }else if(s[j].toLowerCase() ===alphabets[i]){
                    resultt.push(alphabets[i+k].toUpperCase());
                }
            }
        }else{
            resultt.push(s[j]);
        }
        //return resultt.join('');
    }
    return resultt.join('');
}
console.log(cipher('mid321dle-outz',2));
console.log(cipher('there\'s-a-starman-WAITINGG-in-the-sky',3));
// console.log(cipher('Pz-/aI/J`EvfthGH',66));
console.log(cipher('i wil/l make i\'t in JESUS-nam`e',23))
console.log(cipher('Pz-/aI/J`EvfthGH',23));
console.log(cipher('Always-Look-on-the-Bright-Side-of-Life',5));