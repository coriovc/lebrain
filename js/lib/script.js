window.onload = function ()
{
    let tl1          = new TimelineMax({onUpdate: updatePercentage});
    let tl2          = new TimelineMax();
    const controller = new ScrollMagic.Controller();

    tl1.from('#PC1 blockquote', .5, {x: 200, opacity: 0});
    tl1.from('#PC1 span', 1, {width: 0}, '=-.5');
    tl1.from('#PC1 .pcside', 1, {x: -200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-1');
    tl1.from('#PC1 .pcfront', 1, {x: 200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-.7');
    
    const scene = new ScrollMagic.Scene(
        {
            triggerElement: '#PC1',
            triggerHook:    'onLeave',
            duration:       '100%',
        },
    )
    .setPin('#PC1')
    .setTween(tl1)
    .addTo(controller);

    function updatePercentage()
    {
        //percent.innerHTML = (tl1.progress() *100 ).toFixed();
        tl1.progress();
        console.log(tl1.progress());

    }

    let tl3           = new TimelineMax({onUpdate: updatePercentage2});
    const controller2 = new ScrollMagic.Controller();

    tl3.from('#PC2 blockquote', .5, {x: 200, opacity: 0});
    tl3.from('#PC2 span', 1, {width: 0}, '=-.5');
    tl3.from('#PC2 .pcside', 1, {x: -200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-1');
    tl3.from('#PC2 .pcfront', 1, {x: 200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-.7');

    const scene3 = new ScrollMagic.Scene(
        {
            triggerElement: '#PC2',
            triggerHook:    'onLeave',
            duration:       '100%',
        },
    )
    .setPin('#PC2')
    .setTween(tl3)
    .addTo(controller2);

    function updatePercentage2()
    {
        tl3.progress();
        console.log(tl2.progress());
    }
  
    let tl5           = new TimelineMax({onUpdate: updatePercentage3});
    const controller3 = new ScrollMagic.Controller();

    tl5.from('#PC3 blockquote', .5, {x: 200, opacity: 0});
    tl5.from('#PC3 span', 1, {width: 0}, '=-.5');
    tl5.from('#PC3 .pcside', 1, {x: -200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-1');
    tl5.from('#PC3 .pcfront', 1, {x: 200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-.7');

    const scene5 = new ScrollMagic.Scene(
        {
            triggerElement: '#PC3',
            triggerHook:    'onLeave',
            duration:       '100%',
        },
    )
    .setPin('#PC3')
    .setTween(tl5)
    .addTo(controller3);


    function updatePercentage3()
    {
        tl5.progress();
        console.log(tl1.progress());
    }
    let tl7           = new TimelineMax({onUpdate: updatePercentage4});
    const controller4 = new ScrollMagic.Controller();

    tl7.from('#PC4 blockquote', .5, {x: 200, opacity: 0});
    tl7.from('#PC4 span', 1, {width: 0}, '=-.5');
    tl7.from('#PC4 .pcside', 1, {x: -200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-1');
    tl7.from('#PC4 .pcfront', 1, {x: 200, opacity: 0,scale: 1.6, ease: Power4.easeInOut}, '=-.7');

    const scene7 = new ScrollMagic.Scene(
        {
            triggerElement: '#PC4',
            triggerHook:    'onLeave',
            duration:       '100%',
        },
    )
    .setPin('#PC4')
    .setTween(tl7)
    .addTo(controller4);

    function updatePercentage4()
    {
        tl7.progress();
        console.log(tl1.progress());
    }
};