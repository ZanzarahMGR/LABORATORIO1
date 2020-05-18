<?php
function reverseInParentheses($inputString)
{

    if (empty($inputString) || $inputString == '()')
    {
        return '';
    }
    else if (stripos($inputString, '(')  !== false)
    {
        return reverseInParentheses(reverse($inputString));
    }
    else
    {
        return $inputString;
    }
}
?>