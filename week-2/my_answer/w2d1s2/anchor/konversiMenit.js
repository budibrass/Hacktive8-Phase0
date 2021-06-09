var angka=67;

var menit=Math.floor(angka/60);
var detik=angka%60;

var tmp=0;
if(detik<10)
{
    
    console.log('detik = ' + angka);
    console.log('maka output adalah ' + menit + ':0'+detik);
}
else
{
    console.log('detik = ' + angka);
    console.log('maka output adalah ' + menit + ':'+detik);
}


