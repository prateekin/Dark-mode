// function toggle_light_mode(){
//     var app = document.getElementsByTagName('body')[0];
//     if (localStorage.lightMode == "dark"){
//         localStorage.lightMode = "light";
//         app.setAttribute("light-mode","light");
//     }
//     else{
//         localStorage == "dark";
//         app.setAttribute("light-mode","dark");
//     }
// }

function myFunc(){
    var element = document.body;
    element.classList.toggle("dark-mode")
}