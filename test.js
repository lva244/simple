
<script>

var array = [
"http://itravelzone.xyz/five-fabulous-things-to-do-in-shimla/",
"http://itravelzone.xyz/gracia-barcelona/",
"http://itravelzone.xyz/green-vacation-homes-rentals-near-the-sian-kaan-nature-reserve/",
"http://itravelzone.xyz/kashmir-travelogue-a-beginners-guide-to-paradise/",
"http://itravelzone.xyz/15-great-american-road-trips-for-your-bucket-list/",
"http://itravelzone.xyz/views-of-paraguay/",
"http://itravelzone.xyz/discover-australia-like-never-before-exclusively-for-adventure-travelers/",
"http://itravelzone.xyz/trip-to-thailands-best-islands/",
"http://itravelzone.xyz/discovering-moscow-in-new-years-eve/",
"http://itravelzone.xyz/4-things-you-need-to-do-in-ireland-this-summer/",
"http://itravelzone.xyz/bhutan-the-attractive-calmness-of-thunder-dragon-land/",
"http://itravelzone.xyz/things-to-do-in-shanghai/",
"http://itravelzone.xyz/5-unforgettable-experiences-in-tahiti-french-polynesia/",
"http://itravelzone.xyz/top-ten-areas-to-visit-in-alicante/",
"http://itravelzone.xyz/why-put-adelaide-in-your-travel-bucket-list-of-the-new-year/",
"http://itravelzone.xyz/things-to-do-in-rome-summer-time/",
"http://itravelzone.xyz/taj-mahal-the-undying-love/",
"http://itravelzone.xyz/le-mont-saint-michel-the-first-stop-of-an-amazing-cultural-trip-in-europe/",
"http://itravelzone.xyz/richmond-an-all-time-favourite-retreat-with-some-exclusive-attractions/",
"http://itravelzone.xyz/usa-tour-use-of-rv-vehicles/",
"http://itravelzone.xyz/6-most-terrific-places-to-visit-in-los-angeles/",
"http://itravelzone.xyz/discovering-montecatini-terme-in-tuscany/",
"http://itravelzone.xyz/top-10-honeymoon-destinations-in-india/",
"http://itravelzone.xyz/top-things-to-do-in-munich-germany-the-dachau/",
"http://itravelzone.xyz/a-tiny-island-paradise-whens-the-best-time-to-visit-the-maldives/",
"http://itravelzone.xyz/top-3-villasimius-most-beautiful-beaches/",
"http://itravelzone.xyz/european-holidays-places-where-you-can-have-a-new-year-bash/",
"http://itravelzone.xyz/top-world-locations-for-jet-ski/",
"http://itravelzone.xyz/miami-in-3-days-and-on-your-own/",
"http://itravelzone.xyz/for-the-curious-traveler-bangkok-thailand/",
"http://itravelzone.xyz/amsterdam-travel-guide/",
"http://itravelzone.xyz/6-historical-places-to-visit-in-scandinavia/",
"http://itravelzone.xyz/top-10-must-visit-scottish-islands/",
"http://itravelzone.xyz/5-must-watch-tourist-places-in-gold-coast/",
"http://itravelzone.xyz/petra-discover-the-ancient-world-of-jordan/",
"http://itravelzone.xyz/the-things-to-do-in-new-york-city-in-2-days/",
"http://itravelzone.xyz/two-very-different-visions-for-floating-cities/",
"http://itravelzone.xyz/4-things-tourists-love-about-nha-trang/",
"http://itravelzone.xyz/top-5-beach-resorts-in-florida/",
"http://itravelzone.xyz/the-multicultural-singapore-experience/",
"http://itravelzone.xyz/6-reasons-canadian-vacations-are-awesome/",
"http://itravelzone.xyz/verona-as-little-rome-juliet-and-arena/",
"http://itravelzone.xyz/backpacking-thailand-reise-guide/",
"http://itravelzone.xyz/las-vegas-travel-guide/",
"http://itravelzone.xyz/amalfi-coast-rentals/",
"http://itravelzone.xyz/6-megalithic-monuments-of-greece-you-didnt-know/",
"http://itravelzone.xyz/top-tourist-attractions-in-the-dominican-republic/",
"http://itravelzone.xyz/essential-dublin-tourist-attractions-dublin-zooguinness-storehouse-dublin-castle-and-more/",
"http://itravelzone.xyz/top-15-places-to-visit-in-south-america/",
"http://itravelzone.xyz/have-a-great-holiday-time-with-vietnam-exotic-tours/",
"http://itravelzone.xyz/7-spectacular-lakes-in-central-asia/",
"http://itravelzone.xyz/discover-the-charming-town-of-montepulciano/",
"http://itravelzone.xyz/best-small-towns-to-visit-in-ireland/",
"http://itravelzone.xyz/10-great-bazaars-on-the-modern-silk-road/",
"http://itravelzone.xyz/top-short-city-break-destinations/",
"http://itravelzone.xyz/6-alternative-greek-islands/",
"http://itravelzone.xyz/discover-dubai/",
"http://itravelzone.xyz/agreekadventure-four-cities-india-adventure/",
"http://itravelzone.xyz/central-and-south-america-best-dive-sites/",
"http://itravelzone.xyz/stairway-to-musical-heaven-steps-by-the-ocean-front-in-croatia-produce-awesome-melodies/"];

$(document).ready(function(){

checkCookie();
function setCookie(cname,cvalue,exminutes) {
    var d = new Date();
    d.setTime(d.getTime() + (exminutes*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"domain=itravelzone.xyz/;path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
        $('#btn').hide();
        $('#new').append('<iframe width="500" height="300" src="http://itravelzone.xyz/wp-content/uploads/2016/02/Amiana-Resort-Nha-Trang.mp4"></iframe>');
    } /*else {
       user = "cookie";
       if (user != "" && user != null) {
           setCookie("username", user, 5);
       }
    }*/
}

    $('#btn').click(function(){
setCookie("username", "cookie", 5);
window.open(array[Math.floor((Math.random() * array.length-1) )]);
    });
});
</script>
<div id="new">
<button id="btn">Click here to view video</button>
</div>