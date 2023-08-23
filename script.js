

var tl=gsap.timeline();
tl.from("nav #left,nav #right a,nav #right i",{
    y:-100,
    duration:1,
    delay:0.3,
    stagger:0.5,
})
gsap.from("#hl",{
    x:-800,
    duration:2,
    delay:1
})
gsap.from("#ht",{
    y:-800,
    duration:2,
    delay:1
})
gsap.from("#hr",{
    x:800,
    duration:2,
    delay:1
})
tl.from("hr",{
    width:0,
    duration:1
})
tl.from("#ping",{
    opacity:0,
    y:40,
    duration:0.6,
    repeat:-1,
    yoyo:true,
})
tl.from("#con i",{
    scale:1.5,
    duration: 1,
    delay: 10 
})