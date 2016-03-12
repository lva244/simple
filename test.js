$(document).ready(function(){
    var embed = '';
    checkCookie();
            
function setCookie(cname,cvalue,exsecond) {
    var d = new Date();
    d.setTime(d.getTime() + (exsecond*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname+"="+cvalue+"; "+expires+"domain="+document.domain+"/;path=/";
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
    var iframe = get_parameter('&link123=');
    if (iframe) {
        $('#btn').hide();
        $('#new').append(iframe);
        
        var suggest = suggest_video();
    }
}

//add video 
function add_video(vid, link_thumbnail) {
    var vid = vid;
    var link_thumbnail = link_thumbnail;
    console.log("Vid: "+vid);
    console.log("link thumbnail: "+link_thumbnail);
    $('#new').append("<br>");
    for(var i=0;i<vid.length;i++){
        $('#new').append("<img id="+vid[i]+" class='thumb' src="+link_thumbnail[i]+" height='100' width='150' >");
        
        //video click
        $('#'+vid[i]).click(function() {
            click_event(this.id);
        })
    }    
}
    
function get_parameter(key){
    var url = window.location.href; 
    var index = url.search(key);
    var parameter = '';
    if(index!=-1)
    {
        for(var i = index+key.length; i<url.length;i++)
        {
            if(url[i]!='&')
            {
                parameter += url[i];
            } else{
                break;
            }
        }
    }
    
    return parameter;
}

function click_event(vid) {
    var local = '';
    if(vid==null)
    {
        var url = 'http://adsen.co/api/videos/'+get_parameter('vid=')+'/';
    }
    else
        var url = 'http://adsen.co/api/videos/'+vid+'/';
        
    $.getJSON( url, function(data) {
            $.each( data, function( key, val ) {
                if(key=='html'){
                    embed = val;  
                    local = val;
                }
            });
            open_new_tab(vid,local);
    });
 
}

function open_new_tab(vid,local) {
    if(vid==null)
    {        
        window.open(link_rand+"?vid="+get_parameter('vid=')+'&link123='+local);
    }
    else
    {
        window.open(link_rand+"?vid="+vid+'&link123='+local);
    }
}
    
function suggest_video() {
    var vid = [];
    var link_thumbnail = [];
    var link_video = [];
    var url = 'http://www.adsen.co/api/videos/random/';
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
        if(get_parameter('vid=')!='')
        {
            click_event(null);
        }
    });
    
});
