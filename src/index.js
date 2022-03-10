import './style.css';
import UI from './modules/UI';

document.body.appendChild(UI.header());
document.body.appendChild(UI.content());
document.querySelector('#content').appendChild(UI.sidebar());
document.querySelector('#content').appendChild(UI.currentProject());
document.body.appendChild(UI.footer());
UI.loadStorage();
