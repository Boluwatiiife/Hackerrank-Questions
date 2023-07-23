function cipher(s:string,k:number){
    let alphabets:any=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    let resultt:any=[];
    for(let j=0;j<s.length;j++){
        if(s[j]==='-'){
            resultt.push(s[j]);
        }else if(s[j]==='\''){
            resultt.push(s[j])
        }
        for(let i=0;i<alphabets.length;i++){

            if(s[j]===alphabets[i]&&i+k>alphabets.length){
                resultt.push(alphabets[((i+k)-alphabets.length)]);
                }else if(s[j]===alphabets[i]){
                    resultt.push(alphabets[i+k]);
                }
            }
        }
        return resultt.join('');
    }
console.log(cipher('middle-outz',2));
console.log(cipher('there\'s-a-starman-waitung-in-the-sky',3));