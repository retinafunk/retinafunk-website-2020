export default function(){
    console.log('nav module!');
    const navTrigger = document.querySelector('#nav-trigger');
    if(navTrigger){
        navTrigger.addEventListener('click',evt=>{
            evt.preventDefault();
            const navPanel = document.querySelector('.primary-nav');
            if(navPanel) navPanel.classList.toggle('is-open');
            console.log('open');
        });
    }
}