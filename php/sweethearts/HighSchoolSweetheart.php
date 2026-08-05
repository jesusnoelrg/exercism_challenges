<?php

class HighSchoolSweetheart
{
    public function firstLetter(string $name): string
    {
        return substr(trim($name),0,1);
    }

    public function initial(string $name): string
    {
        return strtoupper($this->firstLetter($name)) . ".";
    }

    public function initials(string $name): string
    {
        $names = explode(" ", $name);
        $firstName = $this->firstLetter($names[0]);
        $lastName = $this->firstLetter($names[1]);
        return "$firstName. $lastName.";
    }

    public function pair(string $sweetheart_a, string $sweetheart_b): string
    {
        $a = $this->initials($sweetheart_a);
        $b = $this->initials($sweetheart_b); 
        return "     ******       ******\n" .
               "   **      **   **      **\n" .
               " **         ** **         **\n" .
               "**            *            **\n" .
               "**                         **\n" .
               "**     $a  +  $b     **\n" .
               " **                       **\n" .
               "   **                   **\n" .
               "     **               **\n" .
               "       **           **\n" .
               "         **       **\n" .
               "           **   **\n" .
               "             ***\n" .
               "              *";
    }
}
