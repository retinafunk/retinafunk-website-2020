import {html,render} from "lit-html";
import {until} from "lit-html/directives/until.js";
import {litElem} from "./lit-elem-demo.js";

console.log('app.js loaded!!!X');

const rfTemplate = (name,classParam) => html`<p class=${classParam}>Hi ${name} </p><button @click=${clickHandler}>YAY</button>`;

const conditionalTemplate= ( user) => html`
    ${user.isVisible
        ? html`Welcome ${user.name}`
        : html` Nada `
    }
`;

const pwDataTemplate=(data)=> html`
    <ul>
        <li> <label for="">Title:</label> ${data.home.first.title}</li>
        <li> <label for="">Title:</label> ${data.home.first.url}</li>
        <li> <label for="">Title:</label> ${data.home.first.email}</li>
        <li> <label for="">Title:</label> ${data.home.first.name}</li>
    </ul>
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
                      home {
                        first {
                          url,name,email,title,headline 
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
            render(pwDataTemplate(responseAsJson.data),document.querySelector('#gql-result'));
            //this.setState({ loading: false, data: responseAsJson.data })
        })
};

const hideMe = false;

render(rfTemplate('Andy','is-bold'),document.querySelector('#app'));

render(conditionalTemplate({name: 'Andy',isVisible:true}),document.querySelector('#app2'));