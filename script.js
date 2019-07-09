$(document).ready(function(){
    $("button").click(function(){
      $("#output").html("");
    });

    var count = 0;

    function eval(input){
        commands = input.split(" ");
        switch(commands[0]) {
            case "return":
                switch (commands[1]) {
                    case "date":
                        var today = new Date();
                        var dd = today.getDate();
                        var mm = today.getMonth() + 1;
                        var yyyy = today.getFullYear();
                        var date = yyyy + '-' + mm + '-' + dd;
                        return date;
                    case "time":
                        var today = new Date();
                        var now = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
                        return now;
                    default:
                        return commands;
                }
            default:
                return "\'" + input + "\'" + " is an invalid command";
        }
    }

    $("form").submit(function(e){
        e.preventDefault();
        var input = $("#command").val();
        if (input != "") {
            count++;
            $("#output").html(function(i, org) {
                return org + "Command[" + count + "]: " + eval(input) + "<br>";
            })
            $("#command").val("");
        }
    })
  });
