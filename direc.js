.pragma library

function separatey(a)
{
    var  eq = "";
    var i = 0;
    var currNumber = 0;
    var lasNumber = 0;
    var prevNo = true

    for(i=0; i<(a.length());i++)
    {
        if(isNaN(charAt(i)))
        {
            if(charAt(i)=== '*'||charAt(i)=== 'x')
            eq= eq + lasNumber +'*';
        }

    }
}
