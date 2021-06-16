# Password Generator

```JavaScript
function changeVocals (str) 
{
    let result = ''
    for (let i = 0; i < str.length; i++) 
    {
        if (str[i] === 'a') {
            result += 'b'
        } else if (str[i] === 'e') {
            result += 'f'
        } else if (str[i] === 'i') {
            result += 'j'
        } else if (str[i] === 'o') {
            result += 'p'
        } else if (str[i] === 'u') {
            result += 'v'
        } else if (str[i] === 'A') {
            result += 'B'
        } else if (str[i] === 'E') {
            result += 'F'
        } else if (str[i] === 'I') {
            result += 'J'
        } else if (str[i] === 'O') {
            result += 'P'
        } else if (str[i] === 'U') {
            result += 'V'
        } else {
            result += str[i]
        }

    }
    return result
}

function reverseWord (str) 
{
    var revers = "";

    for (var j = str.length - 1; j >= 0; j--) {
      var tmp = str[j];
      revers += tmp;
    }
  
    return revers;
}

function setLowerUpperCase (str) 
{
    var upAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowAbc = "abcdefghijklmnopqrstuvwxyz";
    var processedStr2 = "";
  
    for (var i = 0; i < str.length; i++) 
    {
      var inspector3 = str[i];
      if (upAbc.indexOf(inspector3) !== -1) 
      {
        processedStr2 += inspector3.toLowerCase();
        // console.log(processedStr2);
      }
  
      else if (lowAbc.indexOf(inspector3) !== -1) 
      {
        processedStr2 += inspector3.toUpperCase();
        // console.log(processedStr2);
      }
      else 
      {
        processedStr2 += inspector3;
      }
  
    }
    return processedStr2;
  }

  function removeSpaces (str) 
  {
    var processedStr3 = "";
  
    for (var i = 0; i < str.length; i++) 
    {
      var inspector4 = str[i];
      if (inspector4 === " ") 
      {
        processedStr3 += "";
      } 
      else 
      {
        processedStr3 += inspector4
      }
    }
  
    return processedStr3;
  
  }
  
  function passwordGenerator (name) 
  {
    var changedVocals = changeVocals(name);
    var reversedWord = reverseWord(changedVocals);
    var settedCase = setLowerUpperCase(reversedWord);
    var goodbyeSpaces = removeSpaces(settedCase);
  
    if (goodbyeSpaces.length >= 5) 
    {
      return goodbyeSpaces;
    }
    else 
    {
      return "Minimal karakter yang diinputkan adalah 5 karakter";
    }
  }

  console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
  console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
  console.log(passwordGenerator('Alexei')); // 'JFXFLb'
  console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'


```