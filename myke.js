function caesarCipher(s, k) {
    let encryptedString = "";

 for (let i = 0; i < s.length; i++) {
   const char = s[i];

   // Check if the character is a letter
   if (/[a-zA-Z]/.test(char)) {
     // Determine the base alphabet based on the case (upper or lower)
     const baseAlphabet = char === char.toUpperCase() ? 'A'.charCodeAt() : 'a'.charCodeAt();

     // Calculate the new position after rotation
     const newPos = (char.charCodeAt() - baseAlphabet + k) % 26;

     // Convert the new position back to a character and append to the result
     const encryptedChar = String.fromCharCode(baseAlphabet + newPos);
     encryptedString += encryptedChar;
   } else {
     // Non-letter characters remain unchanged
     encryptedString += char;
   }
 }

 return encryptedString;

}
console.log(caesarCipher('middle-Outz',2));
console.log(caesarCipher('There\'s-a-starman-waitung-in-the-sky',3));
console.log(caesarCipher('Pz-/aI/J`EvfthGH',66));