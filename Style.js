var width = screen.width
var height = screen.height
var ws = width/1.8 - 200
var rhws = screen.width/4
var realhalfwidth = rhws + "px"
var halfwidth = ws + "px"
var hs = height/4 - 20
var quarterheight = hs + "px"

console.log(screen.width/2)



if (screen.width > 640) {

    document.getElementById("inside-main-area").style.display = "flex";
    document.getElementById("inside-main-area").style.padding = "20px";
    document.getElementById("inside-main-area").style.paddingTop = "40px";
    

    document.getElementById("main-notes").style.color = "lightcyan";
    document.getElementById("main-notes").style.fontFamily = "Raleway", "Sans-serif";
    document.getElementById("main-notes").style.fontSize = "44px";
    document.getElementById("main-notes").style.fontWeight = "700";
    document.getElementById("main-notes").style.textAlign = "center";
    document.getElementById("main-notes").style.height = "300px";
    document.getElementById("main-notes").style.width = "400px";
    document.getElementById("main-notes").style.marginTop = quarterheight


    document.getElementById("school-image").style.height = "300px";
    document.getElementById("school-image").style.width = "500px";
    document.getElementById("school-image").style.backgroundColor = "black";
    document.getElementById("school-image").style.backgroundImage = "url('sadiq.jpeg')";
    document.getElementById("school-image").style.backgroundRepeat = "no-repeat";
    document.getElementById("school-image").style.backgroundSize = "500px", "300px";
    document.getElementById("school-image").style.filter = "none !important";
    document.getElementById("school-image").style.marginLeft = halfwidth;
    document.getElementById("school-image").style.marginTop = quarterheight;
    document.getElementById("m").innerHTML = '<ul id="menu"><ul> <a href="">Lorem</a> </ul><ul> <a href="">ipsum</a> </ul><ul> <a href="">nostrum</a> </ul><ul> <a href="">dolor</a> </ul><ul> <a href="">sit</a> </ul><ul> <a href="">amet</a> </ul><ul> <a href="">consectetur</a> </ul><ul> <a href="">eligendi</a> </ul><button id="donate">Donate to save lives</button></ul>'

    
}
else {

    document.getElementById("inside-main-area").style.display = "flex";
    document.getElementById("inside-main-area").style.flexDirection = "column";
    document.getElementById("inside-main-area").style.alignItems = "center";
    document.getElementById("inside-main-area").style.justifyContent = "center";


    document.getElementById("school-image").style.height = "300px";
    document.getElementById("school-image").style.width = "500px";
    document.getElementById("school-image").style.backgroundColor = "black";
    document.getElementById("school-image").style.backgroundImage = "url('sadiq.jpeg')";
    document.getElementById("school-image").style.backgroundRepeat = "no-repeat";
    document.getElementById("school-image").style.backgroundSize = "500px", "300px";
    document.getElementById("school-image").style.filter = "none !important";

    document.getElementById("main-notes").style.color = "darkblue";
    document.getElementById("main-notes").style.fontFamily = "Raleway", "Sans-serif";
    document.getElementById("main-notes").style.fontSize = "44px";
    document.getElementById("main-notes").style.fontWeight = "700";
    document.getElementById("main-notes").style.textAlign = "center";
    document.getElementById("main-notes").style.height = "200px";
    document.getElementById("main-notes").style.width = "400px";

    // #spslogo {
    //     margin-left: 4vh;
    //     margin-top: 4vh;
    //     height: 100px;
    //     width: 100px;
    //     background-color: lawngreen;
    // }


    var m = document.getElementById("m");

    document.getElementById("m").innerHTML = '<div id="dropdown"><span/>MENU<span/><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-menu-button-wide-fill" viewBox="0 0 16 16"><path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v2A1.5 1.5 0 0 0 1.5 5h13A1.5 1.5 0 0 0 16 3.5v-2A1.5 1.5 0 0 0 14.5 0h-13zm1 2h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1 0-1zm9.927.427A.25.25 0 0 1 12.604 2h.792a.25.25 0 0 1 .177.427l-.396.396a.25.25 0 0 1-.354 0l-.396-.396zM0 8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V8zm1 3v2a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2H1zm14-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v2h14zM2 8.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5z"/></svg><div id="dropdown-content"><ul> <a id="a1" href="">Lorem</a> </ul><ul> <a id="a2" href="">ipsum</a> </ul><ul> <a id="a3" href="">nostrum</a> </ul><ul> <a id="a4" href="">dolor</a> </ul><ul> <a id="a5" href="">sit</a> </ul><ul> <a id="a6" href="">amet</a> </ul><ul> <a id="a7" href="">consectetur</a> </ul><ul> <a id="a8" href="">eligendi</a> </ul><button id="donate">Donate to save lives</button></div><div>'

    var button = document.getElementById("donate");


    button.style.size = "inherit";
    button.style.height = "40px";
    button.style.width = "200px";
    button.style.marginLeft = "40px";
    button.style.backgroundColor = "gold";
    button.style.borderRadius = "20px";
    button.style.filter = "none";

    
    m.style.float = "right";
    m.style.paddingTop = "7vh";
    m.style.marginLeft = realhalfwidth;
    m.style.backgroundColor = "rgb(2, 1, 1)";
    m.style.height = "80px";
    m.style.width = "80px"
    m.style.backgroundColor = "black";
            
    
    document.getElementById("dropdown").style.position = "relative";
    document.getElementById("dropdown").style.display = "inline-block";

    var dropdown_content = document.getElementById("dropdown-content").style
    var dropdown = document.getElementById("dropdown")

    document.getElementById("a1").style.color = "black";
    document.getElementById("a1").style.fontSize = "20px";
    document.getElementById("a2").style.color = "black";
    document.getElementById("a2").style.fontSize = "20px";
    document.getElementById("a3").style.color = "black";
    document.getElementById("a3").style.fontSize = "20px";
    document.getElementById("a4").style.color = "black";
    document.getElementById("a4").style.fontSize = "20px";
    document.getElementById("a5").style.color = "black";
    document.getElementById("a5").style.fontSize = "20px";
    document.getElementById("a6").style.color = "black";
    document.getElementById("a6").style.fontSize = "20px";
    document.getElementById("a7").style.color = "black";
    document.getElementById("a7").style.fontSize = "20px";
    document.getElementById("a8").style.color = "black";
    document.getElementById("a8").style.fontSize = "20px";
      
    document.getElementById("dropdown-content").style.display = "none";
    document.getElementById("dropdown-content").style.position = "absolute";
    document.getElementById("dropdown-content").style.backgroundColor = "black";
    dropdown_content.color = "white";
    document.getElementById("dropdown-content").style.minWidth = "80px";
    document.getElementById("dropdown-content").style.boxShadow = "0px 8px 16px 0px rgba(0,0,0,0.2)";
    document.getElementById("dropdown-content").style.padding = "12px 16px";
    

    document.addEventListener("mouseover", function() {
        dropdown_content.display = "inline-block";
        dropdown_content.left = "-390%";

    })
    document.onclick = function() {
            dropdown_content.display = "none";
            //dropdown_content.left = "-390%";

    }

    }
    
    var x = 0;

    // if (x == 0) {

        document.addEventListener("click", function(){
            dropdown_content.display = "inline-block";
            dropdown_content.left = "-390%"
            var displayed = true;
            x = x + 1
        });


//     }

//     if (x == 1) {
    
//         dropdown.onclick = function ()
//             {
//                 dropdown_content.display = "none";
//                 displayed = false;
//                 x = x - 1
//             }
        
//     }
