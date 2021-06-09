var kata='i love javascript';
console.log(kata.length);
var x = "";
for(var i = 0; i <= kata.length - 1; i++) 
{
    if (kata[i] === 'a') 
    {
      x += '$';
    } 
    else if (kata[i] === 'i') 
    {
      x += '$';
    }
    else if (kata[i] === 'u') 
    {
      x += '$';
    }
    else if (kata[i] === 'e') 
    {
      x += '$';
    }
    else if (kata[i] === 'o') 
    {
      x += '$';
    }
    else { x += kata[i];
    }
    console.log(x[i]);
}
console.log(x);