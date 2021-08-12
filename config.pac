function FindProxyForURL(url, host) {
  if(isInNet(myIpAddress(),"192.168.0.0","255.255.255.0")){
    return "PROXY 192.168.1.101:3128; DIRECT";
  }
  else{
    return "DIRECT";
  }
}
