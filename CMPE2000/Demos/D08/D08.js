$(document).ready(function(){
    $("#btn1").click(AlertMe);
    
    $("#btn2").click(function(){
        $("#content").css("margin-left","50px");
        var contentDiv = $("#content");
        contentDiv.css("padding-left","+=10");
        contentDiv.css("paddingTop","+=10");
    });
    
    $("#btn3").click(function(){
        var paraText = $("p").html();
        $("p").html(paraText + "Some stuff!");
    });
    
    $("#btn4").click(function(){
        $("input[type='text']").val("Some text hoe");
    });
    
    $("#btn5").click(function(){
        $("p.highlight").css({fontSize: "xx-large",backgroundColor:"purple"});
    });
    
    $("#btn6").on("click", function(event){
        if(event.which === 1){
            $("div.highlight").fadeOut(2000, function(){
                $("div.highlight").fadeIn(1000);
            });
        }
    });
    
    $("input[type='radio']").click(function(){
        $("input[type='radio']").next("label").removeClass("highlight");
        if($(this).prop("checked"))
            $(this).next("label").addClass("highlight");
    });
});
function AlertMe(){
    alert("Blah Stuff!");
}