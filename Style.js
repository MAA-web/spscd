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

    document.getElementById("m").innerHTML = '<div id="dropdown"><span>menu</span><div id="dropdown-content"><ul> <a href="">Lorem</a> </ul><ul> <a href="">ipsum</a> </ul><ul> <a href="">nostrum</a> </ul><ul> <a href="">dolor</a> </ul><ul> <a href="">sit</a> </ul><ul> <a href="">amet</a> </ul><ul> <a href="">consectetur</a> </ul><ul> <a href="">eligendi</a> </ul><button id="donate">Donate to save lives</button></div><div>'

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
