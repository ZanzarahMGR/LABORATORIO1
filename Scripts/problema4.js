function palindromo_palabra(inputString)
{
    var charArray = inputString.split("");
    var letterObject = {};

    for(var i = 0; i < charArray.length;i++)
    {
           if(!letterObject.hasOwnProperty(charArray[i]))
           {
               letterObject[charArray[i]] = 1;
           }else
           {
               letterObject[charArray[i]]++;

           }
    }
    var Contador = 0;
    for(val in letterObject)
    {
        if(letterObject[val] % 2 != 0)
        {
            Contador++;
        }
    }
   return Contador > 1 ? false :true;
}