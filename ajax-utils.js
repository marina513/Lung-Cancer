(function (global) {

// Set up a namespace for our utility
var ajaxUtils = {};


// Returns an HTTP request object
function getRequestObject() {
  //type el request
  if (global.XMLHttpRequest) {
    return (new XMLHttpRequest());
  } 
 
  else {
    global.alert("Ajax is not supported!");
    return(null); 
  }
}



// Makes an Ajax GET request to 'requestUrl'
ajaxUtils.sendGetRequest =    //attach it to ajaxutils
//requesturl 3shan a3rf hgeb mnen elrequest
//response handler handle the result of what the server returns
  function(requestUrl, responseHandler,isJsonResponse) {
                  var request = getRequestObject();
                  request.onreadystatechange = 
                    function() { 
                      handleResponse(request, responseHandler
            ,isJsonResponse);//lw b3t hna true eb2a ana 3oza ast5dm json
                    };
                    //true e3ne 5leha asynchronus
                  request.open("GET", requestUrl, true);
                  //kol ele fo2 da kan be set el parameters 
                  //hna hn3mlha send ll server
                  request.send(null); // for POST only
       };







// Only calls user provided 'responseHandler'
// function if response is ready
// and not an error
function handleResponse(request,responseHandler,isJsonResponse) 
{
        if ((request.readyState == 4) &&(request.status == 200)) 
        {
            //responseHandler(request);

            if (isJsonResponse==undefined){
                isJsonResponse=true;
            }
            
            if (isJsonResponse==true) {
                responseHandler(JSON.parse(request.responseText))
            }
            
            else{
                responseHandler(request.responseText);
            }
        
        }
}


// Expose utility to the global object
global.$ajaxUtils = ajaxUtils;


})(window);