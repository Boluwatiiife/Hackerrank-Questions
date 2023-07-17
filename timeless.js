 // code to convert 12hr time to 24hr time.

   function timeConversion(s){
   
    if(s[0]>0&&s[0]<2&&s[1]>1&&s[1]<3&&s[8]==='A'){
        return '0'+'0'+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
     else if(s[0]<2&&s[1]<10&&s[8]==='A'){
        return s[0]+s[1]+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[0]<1&&s[1]>0&&s[1]<2&&s[8]==='P'){
        return '1'+3+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[0]==0&&s[1]==2&&s[8]==='P'){
        return '1'+4+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]>2&&s[1]<4&&s[8]==='P'){
        return '1'+5+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]>3&&s[1]<5&&s[8]==='P'){
        return '1'+6+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]>4&&s[1]<6&&s[8]==='P'){
        return '1'+7+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]==6&&s[8]==='P'){
        return '1'+8+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]==7&&s[8]==='P'){
        return '1'+9+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]==8&&s[8]==='P'){
       // console.log('2'+0+t[2]+t[3]+t[4]+t[5]+t[6]+t[7]);
        return '2'+0+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]==9&&s[8]==='P'){
        return '2'+1+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[1]==0&&s[8]==='P'){
        return '2'+2+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[0]>0&&s[0]<2&&s[1]==1&&s[8]==='P'){
        return '2'+3+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else if(s[0]>0&&s[0]<2&&s[1]==2&&s[8]==='P'){
        return '1'+2+s[2]+s[3]+s[4]+s[5]+s[6]+s[7];
    }
    else{
        console.log('i dont know the time');
    }
   }
    console.log(timeConversion('06:32:33PM'));