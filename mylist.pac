function FindProxyForURL(url, host) {
    // Your proxy server name and port
    var proxyserver = '162.243.250.84:3333';
    //
    //  Here's a list of hosts to connect via the PROXY server
    //
    var proxylist = new Array(
        "*.kohls.com",
        "*.target.com",
        "*.eastbay.com",
        "*.puritan.com",
        "*.walmart.com"
    );
    // Return our proxy name for matched domains/hosts
    for(var i=0; i<proxylist.length; i++) {
        var value = proxylist[i];
        if ( localHostOrDomainIs(host, value) ) {
            return "PROXY "+proxyserver;
        }
    }
    return "DIRECT";
}
