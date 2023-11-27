// import { animate } from "./animate";

let size = document.getElementsByClassName('demo-size')[0]
let color_hex = document.getElementsByClassName('demo-color')[0]
let color_keyword = document.getElementsByClassName('demo-color')[1]
let color_rgb = document.getElementsByClassName('demo-color')[2]
let color_hsl = document.getElementsByClassName('demo-color')[3]
let opacity = document.getElementsByClassName('demo-opacity')[0]
console.log(size)
animate({iterations:'Infinity'},{scale:0},{scale:1},(currentValues)=>{
    size.style.transform = `scale(${currentValues.scale})`
})
animate({iterations:'Infinity'},{color:'#ffffff'},{color:'#000000'},(currentValues)=>{
    color_hex.style.backgroundColor = currentValues.color
})
animate({iterations:'Infinity'},{color:'red'},{color:'green'},(currentValues)=>{
    color_keyword.style.backgroundColor = currentValues.color
})
animate({iterations:'Infinity'},{color:'rgba(100,200,100,1)'},{color:'rgba(1,100,200,0.5)'},(currentValues)=>{
    color_rgb.style.backgroundColor = currentValues.color
})
animate({iterations:'Infinity'},{color:'hsl(120,10%,10%)'},{color:'hsl(0,20%,50%)'},(currentValues)=>{
    color_hsl.style.backgroundColor = currentValues.color
})
animate({iterations:'Infinity'},{opacity:0},{opacity:1},(currentValues)=>{
    opacity.style.opacity = currentValues.opacity
})
