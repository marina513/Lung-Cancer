// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("data.txt", 
            function (request) {   //requesst hea el response
                    var name = request.responseText;
                    
                //lazm n70tha hna 3shan lw bara htt3ml ashnchronus e3ne 
                //m3 
                //de f name msh hatb3
                    document.querySelector("#content")
                      .innerHTML = "<h2>Hello " + name + "!</h2>";
            });

        
      });
  }
);












