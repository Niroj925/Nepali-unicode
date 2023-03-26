
import letters from './alphabet/alphabet.json' assert { type: "json" };

const isVowel=(str)=>{
    if(str==='a'||str==='e'||str==='i'||str==='o'||str==='u'){
      return true;
    }else{
      return false;
    }
  }

  const nepaliscript = (last_word) => {
    if (typeof last_word !== "string") {
      console.error("The argument must be a string.");
      return;
    }

   let isStartVowels=isVowel(last_word[0])
    const chars = [];
    const nepChars=[];
    
    for (let i=0; i<last_word.length; i++) {
      const previousChar=last_word[i-1];
      const currentChar = last_word[i];
      const nextChar = last_word[i + 1]?last_word[i+1]:!(isVowel(last_word[last_word.length-1]))?'a':'';
      const afterNextChar=last_word[i+2]?last_word[i+2]:!(isVowel(last_word[last_word.length-1]))?'a':'';
      const aanChar=last_word[i+3]?last_word[i+3]:!(isVowel(last_word[last_word.length-1]))?'a':'';
      // console.log(`currentChar=${currentChar},nextChar=${nextChar},afterNextChar=${afterNextChar},aanChar=${aanChar}`)
      if(isStartVowels){
        if (
          (currentChar === "a" && nextChar === "a") ||
          (currentChar === "i" && nextChar === "i") ||
          (currentChar === "a" && nextChar === "i") ||
          (currentChar === "a" && nextChar === "u") ||
          (currentChar === "o" && nextChar === "u") ||
          (currentChar === "u" && nextChar === "u")
        ) {
          chars.push(currentChar + nextChar);
          nepChars.push(letters.vowel[currentChar+nextChar]);
          
          if(
            (afterNextChar=== "a") ||
            (afterNextChar === "i") ||
            (afterNextChar === "u") ||
            (afterNextChar === "e") ||
            (afterNextChar === "o")
          ) {
            chars.push(afterNextChar);
            nepChars.push(letters.vowel[afterNextChar]);
             i++;
          }
           i++;     
        }else{
          chars.push(currentChar);
          nepChars.push(letters.vowel[currentChar]);
        }
        isStartVowels=!isStartVowels
      }
      else if(currentChar === "r" && nextChar === "r" && afterNextChar==="i"){
        chars.push(currentChar + nextChar+afterNextChar);
         nepChars.push(letters.vowel[currentChar+nextChar+afterNextChar]);
         i=i+2
      }
      else if(currentChar==="*"&&nextChar==="*"){
        chars.push(currentChar + nextChar);
        nepChars.push(letters.voweldependent[currentChar+nextChar]);
        i++;
      }
      else if (
        (currentChar === "a" && nextChar === "a") ||
        (currentChar === "i" && nextChar === "i") ||
        (currentChar === "a" && nextChar === "i") ||
        (currentChar === "a" && nextChar === "u") ||
        (currentChar === "o" && nextChar === "u") ||
        (currentChar === "u" && nextChar === "u")
      ) {
        chars.push(currentChar + nextChar);
        nepChars.push(letters.voweldependent[currentChar+nextChar]);
        i++;
        if(
          (afterNextChar=== "a") ||
          (afterNextChar === "i") ||
          (afterNextChar === "u") ||
          (afterNextChar === "e") ||
          (afterNextChar === "o")
        ) {
          chars.push(afterNextChar);
          nepChars.push(letters.vowel[afterNextChar]);
           i++;
        }else{

        }
      } else if(
        (currentChar === "a") ||
        (currentChar === "i") ||
        (currentChar === "u") ||
        (currentChar === "e") ||
        (currentChar === "o")
      ) {

         if(previousChar==='o'&&currentChar==='i'){
          chars.push(currentChar);
        nepChars.push(letters.vowel[currentChar]);
         }else{
        chars.push(currentChar);
        nepChars.push(letters.voweldependent[currentChar]);
         }
      }
      else if(last_word[i]===' '){
        chars.push(currentChar);
        nepChars.push(letters.voweldependent[currentChar]);
      }
      else {
         if (
          (currentChar === "c" && nextChar === "h" && afterNextChar==="h")||
          (currentChar === "k" && nextChar === "s" && afterNextChar==="h")
        ){
          chars.push(currentChar + nextChar+afterNextChar);
         if(!isVowel(aanChar)&&nextChar!=" "){
          nepChars.push(letters.halfconsonant[currentChar+nextChar+afterNextChar]);
         }else{
          nepChars.push(letters.consonant[currentChar+nextChar+afterNextChar]);
         }
        i=i+2; 
       
        }

        else if (
          (currentChar === "k" && nextChar === "h") ||
          (currentChar === "g" && nextChar === "h") ||
          (currentChar === "N" && nextChar === "g") ||
          (currentChar === "c" && nextChar === "h") ||
          (currentChar === "j" && nextChar === "h") ||
          (currentChar === "n" && nextChar === "g") ||
          (currentChar === "T" && nextChar === "h") ||
          (currentChar === "D" && nextChar === "h") ||
          (currentChar === "t" && nextChar === "h") ||
          (currentChar === "d" && nextChar === "h") ||
          (currentChar === "p" && nextChar === "h") ||
          (currentChar === "b" && nextChar === "h") ||
          (currentChar === "s" && nextChar === "h") ||
          (currentChar === "S" && nextChar === "h") ||
          (currentChar === "t" && nextChar === "r") ||
          (currentChar === "G" && nextChar === "y")
        ){
          chars.push(currentChar + nextChar);
          if(!isVowel(afterNextChar)&&nextChar!=" "){
            nepChars.push(letters.halfconsonant[currentChar+nextChar]);
          }else{
          nepChars.push(letters.consonant[currentChar+nextChar]);
          }
        i++;
        } 
        else{
          chars.push(currentChar);
          if(!isVowel(nextChar)&&nextChar!=" ")
          {
        nepChars.push(letters.halfconsonant[currentChar]);
          }else{
        nepChars.push(letters.consonant[currentChar]);
          }
      }
      }
    }
    return nepChars.join('');
  }
export default nepaliscript;
