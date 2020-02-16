import {html,render} from "lit-html";
import {until} from "lit-html/directives/until.js";
import {litElem} from "./lit-elem-demo.js";
import Pjax from 'pjax';
import Nav from './nav.js';


const pjax = new Pjax({
    selectors: ['#content']
});
document.addEventListener('pjax:complete',evt=>{
    const navPanel = document.querySelector('.primary-nav');
    if(navPanel && navPanel.classList.contains('is-open')) navPanel.classList.remove('is-open') ;
});

const nav = Nav();

const rfTemplate = (name,classParam) => html`<p class=${classParam}>Hi ${name} </p><button @click=${clickHandler}>YAY</button>`;

const conditionalTemplate= ( user) => html`
    ${user.isVisible
        ? html`Welcome ${user.name}` 
        : html` Nada `
    }
`;

const pwDataTemplate=(data)=> html`
    <div>
        <div>
             <h2>Title: ${data.basicPage.first.title}</h2> 
             <div>
                ${data.basicPage.first.body} 
            </div>
        </div>
    </div>
`;

const clickHandler = () =>{
    fetchData();
    console.log('Click Evt')
};

const fetchData = () =>{
    fetch('http://www.retinafunk.com/graphql/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: `
               {
                  basicPage(s:"title*=intro") {
                    first { 
                      title,body
                    }
                  }
               }
 `,
        }),
    })
        .then(response => {
            return response.json()
        })
        .then(responseAsJson => {
            console.log('response',responseAsJson.data);
            if(responseAsJson.data && document.querySelector('#gql-result')){
                render(pwDataTemplate(responseAsJson.data),document.querySelector('#gql-result'));
            }

            //this.setState({ loading: false, data: responseAsJson.data })
        })
};

const hideMe = false;
fetchData();
/*
render(rfTemplate('Andy','is-bold'),document.querySelector('#app'));

render(conditionalTemplate({name: 'Andy',isVisible:true}),document.querySelector('#app2'));*/
