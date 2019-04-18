var list=[ ];

var pric=[ ];

$("button").click(function(){

    var listItem=$(".item").val();

    var prices=parseInt($(".price").val());
    
    pric.push(prices);
    
    list.push(listItem);  

    $("body").append("<div>" + listItem + "</div>");
    
    $(".num").text(length);
    
    console.log(prices);
    
    $("body").append("<div>"+prices+"</div>");
}); 
