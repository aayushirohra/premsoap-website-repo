// $(".card-img-top").on("mouseenter",function(){
// 	// $(this).css("opacity","0.2");
// 	$(this).attr("src", "C:\Users\admin\Downloads\plus-button.png");

// });

// $(".card-img-top").on("mouseleave",function(){
// 	$(this).css("opacity","1");

// });

$("div").on("click",function(){
	if($(this).attr("id")=="detergentPowder"){
		$("#s2").toggleClass("display");

	}
	else if($(this).attr("id")=="blueCake"){
		$("#s1").toggleClass("display");

	}
	else if($(this).attr("id")=="dishwashCake"){
		$("#s3").toggleClass("display");

	}
	else if($(this).attr("id")=="dishwashTub"){
		$("#s4").toggleClass("display");

	}
	else if($(this).attr("id")=="greenCake"){
		$("#s5").toggleClass("display");

	}
	
	

});

$(".card").on("mouseenter",function(){
	$(this).css("box-shadow","0 4px 8px 0 rgba(23, 162, 186, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)");
});

$(".card").on("mouseleave",function(){
	$(this).css("box-shadow","none");
});