const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
    counter.innerText = '0'

    const updateCounter = () => {
        const maximum = +counter.getAttribute('data-target')
        const followerCount = +counter.innerText;

        const increment = maximum / 200;

        if(followerCount < maximum) {
            counter.innerText = `${Math.ceil(followerCount + increment)}`
            setTimeout(updateCounter, 1)
        } else {
            counter.innerText = maximum
        }
    }
   updateCounter();
})


