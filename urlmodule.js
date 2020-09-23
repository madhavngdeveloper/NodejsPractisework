url=require("url")
str="https://www.google.com/search?q=paytm&rlz=1C1CHBD_enIN859IN859&oq=paytm&aqs=chrome..69i57j0l7.2051j0j4&sourceid=chrome&ie=UTF-8"
data=url.parse(str,true)
console.log(data.pathname);
console.log(data.host);
console.log(data.search);