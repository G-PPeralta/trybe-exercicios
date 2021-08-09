document.getElementById("header-container").style.background = "#50B169"

document.getElementsByClassName("emergency-tasks")[0].style.background = "#F89E83" 

//document.getElementsByTagName("h3")[0].style.background = "#AB6EF4"
//document.getElementsByTagName("h3")[1].style.background = "#AB6EF4"

let subtitles = document.querySelectorAll(".emergency-tasks h3")
for(let i = 0; i < subtitles.length; i += 1) {
  subtitles[i].style.background = "#AB6EF4"
}

document.getElementsByClassName("no-emergency-tasks")[0].style.background = "#F9DB5E"

let subtitles2 = document.querySelectorAll(".no-emergency-tasks h3")
for(let i = 0; i < subtitles2.length; i += 1) {
  subtitles2[i].style.background = "#232525"
}

document.getElementById("footer-container").style.background = "#0E3533"

//document.getElementsByTagName("footer")[0].style.background = "#0E3533"



