export default function () {
    //console.log('nav module');
    const navTrigger = document.querySelector('#nav-trigger');
    if (navTrigger) {
        navTrigger.addEventListener('click', evt => {
            evt.preventDefault();
            const outerContainer = document.querySelector('body');
            if (outerContainer) outerContainer.classList.toggle('is-open');
            console.log('open');
        });
    }
}