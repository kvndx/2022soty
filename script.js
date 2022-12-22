timesRun = 0;

function randomSong(){
    const songNumbers = document.querySelectorAll('.number');
    const songNames = document.querySelectorAll('.song');
    const songFrames = document.querySelectorAll('.songFrame')
    timesRun++;
    if (timesRun>1){
        songFrames[0].remove;
    };

    songNumber = Math.floor (Math.random() * 100);
    songNumberPicked = songNumbers[songNumber];
    songNamePicked = songNames[songNumber];

    if (timesRun>1){
        songFramePicked = songFrames[songNumber+1];
    };
    if (timesRun===1){
        songFramePicked = songFrames[songNumber];
    };

    const put_h3 = document.querySelector('#randomSongNumber');
    put_h3.innerText = songNumberPicked.textContent;

    const put_h4 = document.querySelector('#randomSongName');
    put_h4.innerText = songNamePicked.textContent;

    const put_iframe = document.querySelector('#randomSongName')
    put_iframe.append(songFramePicked.cloneNode(true));
}

$(document).ready(function(){
    $(".col-12").slice(0, 1).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".col-12:hidden").slice(0, 1).slideDown();
      if($(".col-12:hidden").length === 0) {
        document.getElementById("loadMore").style.visibility("hidden");
        document.getElementById("loadMore").style.display("none");
      }
    });
    
  })