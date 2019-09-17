// Event handling
document.addEventListener("DOMContentLoaded",
function (event) {
    
    // Unobtrusive event binding
      document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
          $ajaxUtils
          .sendGetRequest("name.json", 
              function (res) {   //res de ele gea mn t7oel el json
                       var message=
                        res.firstName + " " + res.lastName
                        if (res.likeschinesesfood){
                          message+="likeschinesesfood";
                        }
                        else{
                          message+="DNE likeschinesesfood";
                        }
                        message+="and uses";
                        message+=res.numberOfDisplays;
                        message+="dispaly for coding";

                        //lazm n70tha hna 3shan lw bara htt3ml ashnchronus e3ne 
                        //m3 
                        //de f name msh hatb3
                        document.querySelector("#content")
                        .innerHTML = "<h2>Hello " + message + "!</h2>";
                });

        
      });
  }
);












