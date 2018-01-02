$(function(){
    $("#convert").click(function(){
       var URL = document.getElementById("beta-name").value;
        splitURL = URL.split('/');
        for(var i = 0; i < splitURL.length; i++){
            console.log(splitURL[i]);
        }
        URL = "https://" + splitURL[4] + ".contest.atcoder.jp/tasks/" + splitURL[splitURL.length - 1];
        console.log(URL);
        document.getElementById("contest-name").value = URL;
   });
});