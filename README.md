# animate

类Element.animate的polyfill，用于生成两个区间点的动画插值，并用来更新

原方法是这个 <a href="[https://developer.mozilla.org/en-US/docs/Web/API/Element/animate]">animate<a/>

本api做了简化，只是处理了两个状态之间的插值，然后让用户自己去做赋值处理，api来帮助生成动画每一帧的状态

# Quick start
```javascript
let size = document.getElementsByClassName('demo-size')[0]
let color_hex = document.getElementsByClassName('demo-color')[0]
let color_keyword = document.getElementsByClassName('demo-color')[1]
let color_rgb = document.getElementsByClassName('demo-color')[2]
let color_hsl = document.getElementsByClassName('demo-color')[3]
let opacity = document.getElementsByClassName('demo-opacity')[0]

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
```
# 参数说明
```javascript
/*
* @param option 对象，用来存储动画播放信息
  const defaultOptions = {
    delay: 0,
    endDelay: 0,
    fill: 'auto',
    duration: 1000,
    direction: 'normal',
    easing: 'linear',
    iterations: 1,
  };
  目前暂时只实现了这些特性
* @param startState 对象，存起始状态的值
* @param endState 对象，存最终状态的值
* @param UpdateFunc 更新函数，负责执行更新操作
*/ 
animate(option,startState,endState,UpdateFunc)
```