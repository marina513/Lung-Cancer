$(function(){

		$("#navbarToggle").blur(function(event){

				var scrreenWidth=window.innerWidth;
				if(scrreenWidth < 768){
					$("#collapsable-nav").collapse('hide');
				      				  }
											}
								);
			});
(function(global){
				var dc={};
				var homeHtml="bodybt3na.html" ;

				//hn7ot goa el element el html 
				var insertHtml =function(selector,html){
								var targetElem = document.querySelector(selector);
								targetElem.innerHtml=html;
														};

				var showloading = function(selector){
										var html="<div class='text-center'>";
										html+="<img src='imageslajax-loader.gif'></div>";
										insertHtml(selector,html);
													};
				//before imgs
				document.addEventListener("DOMContentLoaded",function(event){

						showloading("#main-content");
						
						$ajaxUtils.sendGEtRequest(
							homeHtml,
							function(responseText){
										document.querySelector('#main-content')
										.innerHtml=responseText;
													},
							false);
																			});
			global.$dc =dc ; //3shan n7otha f global
})(window);