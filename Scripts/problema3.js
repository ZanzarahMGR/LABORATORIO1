function palindromo(palabra)
{   
    var palabra_reves = palabra.split("").reverse().join("");
    if (palabra === palabra_reves)
    {
        var verdadero = "La palabra "+palabra+" es palindromo";
        return verdadero;
    }
    else
    {
        var falso = "La palabra "+palabra+" no es palindromo";
        return falso;
    }

}