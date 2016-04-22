$(document).ready(function(){
    checkCookie();

function checkCookie() {
    //var encode = get_parameter('&playable=');
    //if (encode != '') {
    var token = getParameterByName('t');
    var video = getParameterByName('playable');
    
    if(token!="")
    {
        if(check_valid_token(token))
        {
            var title = get_embed(getParameterByName('vid'), 'title');
            $('#video_title').append('<h5>'+ title +'</h5>');
            var thumbnail = get_embed(getParameterByName('vid'), 'thumbnail_url');
            $('#new').append('<div id="btn" style="display: inline; width:350px;height:200px;"><span><img src="'+thumbnail+'" style="height: 180px;width: 320px;"/></span><img src="'+thumbnail+'" style="position: absolute;margin-top:40px;margin-left:-195px;height: 80px;width: 80px;"/></div>');
        } 
    }
    else if (video!="")
    {
        var title = get_embed(getParameterByName('vid'), 'title');
        var iframe = get_embed(getParameterByName('vid'), 'html');
        $('#video_title').append('<h5>'+ title +'</h5>');
        
        $('#new').append(iframe);
        
        suggest_video();
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
            $('#suggest_video_1').append('<img id="'+vid[i]+'" src="'+link_thumbnail[i]+'" style="width:100px; height:100px">');
        }
        else
        {
            $('#suggest_video_2').append('<img id="'+vid[i]+'" src="'+link_thumbnail[i]+'" style="width:100px; height:100px">');
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
    
    if(vid==null)
    {        
        window.open(link_rand+"?vid="+getParameterByName('vid')+'&playable='+getParameterByName('vid'));
    }
    else
    {
        window.open(link_rand+"?vid="+vid+'&playable='+vid);
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
            $.each( data, function( key, val ) {
                if(key==key_word){
                    iframe = val;  
                }
            });   
        }    
    });
          
    return iframe;
}
    
function suggest_video() {
    var vid = [];
    var link_thumbnail = [];
    var link_video = [];
    var url = 'http://www.adsen.co/api/videos/random?number=6';
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
        if(getParameterByName('vid')!='')
        {
            click_event(null);
        }
    });
    
});
