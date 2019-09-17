/**********************VAR******************* */
var x = "Hello World!";
/************ Fn by 2 Ways***********************/
function a () {}
var a = function () {}
a();
/*******************var to a fn******************/
function compare (x,y){
	return x > y;    /*lw gnb return mfesh 7ga m3naha e2fl el function bs*/
}
compare(4,5)
compare()   /*********3ade gdn msh haede error***/
/*******************************scope*******************/