$(document).ready(function(){
    checkCookie();
    
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}
    
function setCookie(cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + (exhours*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires + ";domain=."+window.location.hostname+";path=/";
}

function checkCookie() {
    //var encode = get_parameter('&playable=');
    //if (encode != '') {
    var token = getCookie("maso");
    var playable = getCookie("playable");
    
    if(token!="" && playable=="")
    {
        if(check_valid_token(token))
        {
            allow = true;
            var embed = get_embed(getCookie('phim_uuid'));
            var width = screen.width;
            var height = screen.height;
            var title = get_param_in_embed('title', embed);
            $('#video_title').append('<h4>'+ title +'</h4>');
            var thumbnail = get_param_in_embed('thumbnail_url', embed);
            $('#new').append('<div style="position: relative; left: 0; top: 0;"><div id="btn" style="display: inline; width:'+width+'px;height:'+(height/2)+'px; position: relative; left: 0; top: 0;"><span><img src="'+thumbnail+'" style="height:'+((height/3))+'px!important;width:'+(width-15)+'px!important;"/></span><img src="http://cloudtechzone.com/wp-content/uploads/button_play.png" style="position: absolute;margin-top:'+(height/9)+'px;margin-left:-'+(width/2+25)+'px;height:80px;width:80px;"/></div><div style="position: relative; opacity: 0.5;height:'+((height/3))+'px!important;width:'+(width-15)+'px!important;"><center><script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script><!-- MediumRec --><ins class="adsbygoogle"
     style="display:inline-block;width:300px;height:250px"
     data-ad-client="ca-pub-8695140031622949"
     data-ad-slot="3951879313"></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script></center></div></div>');
        } 
    }
    else if (playable!="" && token!="")
    {
        if(check_valid_token(token))
        {
            allow = true;
            var embed = get_embed(getCookie('phim_uuid'));
            var title = get_param_in_embed('title', embed);
            var iframe = get_param_in_embed('html', embed);
            $('#video_title').append('<h5>'+ title +'</h5>');
            
            $('#new').append(iframe);
            
            suggest_video();
        }
    }
        
    /*} else {
        var title = get_embed(get_parameter('vid='), 'title');
        if(title!="")
        {
            $('#video_title').append('<h1>'+ title +'</h1>');
            var thumbnail = get_embed(get_parameter('vid='), 'thumbnail_url');
            $('#new').append('<div id="btn" style="display: inline-block;  color: red;"><img src="'+thumbnail+'"/ width="100" height="70" ><div style="display: inline-block;"><p>WATCH VIDEO HERE.</p></div>');
        }
    }*/
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

//add video 
function add_video(vid, link_thumbnail) {
    var vid = vid;
    var link_thumbnail = link_thumbnail;
    $('#new').append("<br>");
    for(var i=0;i<vid.length;i++){
        
        if(i%2==0)
        {
            $('#suggest_video_1').append('<img id="'+vid[i]+'" src="'+link_thumbnail[i]+'" style="width:100px; height:100px!important;">');
        }
        else
        {
            $('#suggest_video_2').append('<img id="'+vid[i]+'" src="'+link_thumbnail[i]+'" style="width:100px; height:100px!important;">');
        }
        
        //video click
        $('#'+vid[i]).click(function() {
            click_event(this.id);
        })
    }    
}

function getParameterByName(name) {
    url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
} 

function click_event(vid) {
    var token = getCookie("maso");
    if(vid==null)
    {  
        if(check_valid_token(token))
        {
            setCookie("playable",getCookie("phim_uuid"),1);
            setCookie("pu",1,1);
            //window.open(link_rand+"?vid="+getParameterByName('vid')+'&playable='+getParameterByName('vid')+'&t='+token+'&pu='+'1');
            window.open(link_rand);
        }
    }
    else
    {
        if(check_valid_token(token))
        {
            setCookie("phim_uuid", vid, 1);
            setCookie("pu", null, 1);
            //window.open(link_rand+"?vid="+vid+'&playable='+vid+'&t='+token);
            window.open(link_rand);
        }
    }
}

function get_embed(vid, key_word) {
    
    var iframe = '';
    var url = 'http://adsen.co/api/videos/'+vid+'/';
    
    $.ajax({
        url: url,
        dataType: 'json',
        async: false,
        success: function(data) {
            iframe = data;
        }    
    });
          
    return iframe;
}

function get_param_in_embed(param, data)
{
    var iframe = '';
    $.each( data, function( key, val ) {
        if(key==param){
            iframe = val;  
        }
    }); 
    
    return iframe;
}
    
function suggest_video() {
    var vid = [];
    var link_thumbnail = [];
    var link_video = [];
    var url = 'http://www.adsen.co/api/videos/random/?number=6';
    $.getJSON(url, function(data) {
        $.each( data, function(keys, vals) {
            $.each( vals, function(key, val) {
                if(key=='id'){
                    vid.push(val);
                }
                if(key=='thumbnail_url'){
                    link_thumbnail.push(val);
                }
                if(key=='html'){
                    link_video.push(val);
                }
            })
        })
        add_video(vid, link_thumbnail);
    })
   
    //window.open(link_rand+"?vid="+get_version());
};    
    
    
    //btn click
    $('#btn').click(function(){
        if(getCookie('phim_uuid')!='')
        {
            click_event(null);
        }
    });
    
});
