
function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}

//Check valid of token
function check_valid_token(token)
{
    var is_valid = false;
    var url = "http://adsen.co/api/tokens/verify/"+token+"/";
    
    $.ajax({
        url: url,
        dataType: 'json',
        async: false,
        success: function(data) {
            $.each( data, function( key, val ) {
                if(key=="valid"){
                    is_valid = val;  
                }
            });   
        }    
    });
    
    return is_valid;
}

$(document).ready(function() {
     var show_popup = getParameterByName("pu");
     var sure_tech = check_valid_token(getParameterByName("t"));
if(show_popup!=1 || sure_tech==false)
{
   $("#display").append("<style>.wdpu-container{display: none!important;}</style>");
}
}); 

