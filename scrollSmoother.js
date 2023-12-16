const wrapper = document.querySelector("#app");

// ease value to be used in interpolation
const ease = 0.05; // 20%

// create an object to store scroll details
const scroll = {
    current: 0, // current scroll position
    target: 0, // target scroll position
    limit: 0 // limit of scroll
};

// update target scroll position
const updateTarget = (e) => {
    scroll.target += e.deltaY;
};
document.addEventListener("mousewheel", updateTarget);


//! LERP
function lerp(current, target){
    // current = current + ((target - current) * ease)
    let d = target - current;
    let dx = d * ease;
    return current + dx;
};

// Helper function
function cap(min, max, x){
    return Math.min(Math.max(x, min), max);
};


// Init
const smoothScroll = () => {
    const maxScroll = wrapper.clientHeight - window.innerHeight;
    // cap scroll target value
    scroll.target = cap(0, maxScroll, scroll.target);

    const { current, target } = scroll;

    const transition = lerp(current, target);
    scroll.current = transition;

    // translate app based on lerped value
    wrapper.style.transform = `translateY(-${scroll.current}px)`;
    window.requestAnimationFrame(smoothScroll);
};

smoothScroll();