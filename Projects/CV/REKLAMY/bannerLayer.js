/*var obecnyBaner = 0;
var czasOut = 20;
var tableFoto = new Array ("REKLAMY/kreatywnie.jpg", "REKLAMY/mapa_mysli.jpg", "REKLAMY/team_work.jpg", "REKLAMY/zegar.jpg");
function lookPhoto(){
  tekst = "<img src="" + tableFoto[obecnyBaner]+ "">;";
  document.getElementById("bannerLayer").innerHTML = tekst;
          if((++obecnyBaner)>=tableFoto.lenght)obecnyBaner = 0;
  timerID = setTimeout ("lookPhoto()", timeout * 1000);
*/
var currentBanner = 0;
var timeout = 20;
var bannerArray = new Array(
    "kreatywnie.jpg", "mapa_mysli.jpg", "team_work.jpg",
    "zegar.jpg"
    );
function printBanner()
{
  tekst = "<IMG SRC='" + bannerArray[currentBanner] + "'>";
  document.getElementById("bannerLayer").innerHTML=tekst;
  if((++currentBanner) >= bannerArray.length) currentBanner = 0;
  timerID = setTimeout("printBanner()", timeout * 1000);
}
