var username = "root";
var greeting;
var today = new Date();
var hour = today.getHours();
var morninghints = ["A good day starts with a good lab.", 
                    "Early rise for the knowledge?", 
                    "Nice seeing a refreshed you there."];
var afternoonhints = ["No food or drink is allowed in the lab.", 
                    "How about typing \"afternoon tea\" in the command?", 
                    "Jerry here. I am getting sleepy. I am... zzz"];
var eveninghints = ["Still working? Don't worry, I am with you.", 
                    "Today is a full moon. I guess?", 
                    "A dinner in the lab is better than anywhere."];
var hint;
var index = Math.floor(Math.random() * 3);

if (hour > 5 && hour < 12) {
    greeting = "Good morning, ";
    hint = morninghints[index];
} else if (hour < 19) {
    greeting = "Good afternoon, ";
    hint = afternoonhints[index];
} else {
    greeting = "Good evening, ";
    hint = eveninghints[index];
}

$(document).ready(function(){

    $("#head").html(greeting + username + "!<br>" + hint);

    $("button").click(function(){
      $("#output").html("");
    });

    var count = 0;

    function showError(type, description) {
        return "<span class=\"errtext\">" + type +": </span>" + description;
    }

    function eval(input){
        commands = input.split(" ");
        switch(commands[0]) {
            case "return":
                switch (commands[1]) {
                    case "date":
                        today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1;
                        var yyyy = today.getFullYear();
                        return yyyy + '-' + mm + '-' + dd;
                    case "time":
                        today = new Date();
                        return today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                    default:
                        return commands;
                }
            default:
                return showError("SYNTAX_ERROR", "\'" + commands[0] + "\'" + " is an invalid command");
        }
    }

    $("form").submit(function(e){
        e.preventDefault();
        var input = $("#command").val();
        if (input != "") {
            count++;
            $("#output").html(function(i, org) {
                return "<span class=\"cmdtext\">Command[" + count + "]: </span>" + eval(input) + "<br>" + org;
            })
            $("#command").val("");
        }
    })
  });
