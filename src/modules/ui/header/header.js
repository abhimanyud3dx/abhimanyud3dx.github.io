import { LightningElement,track } from 'lwc';
import { fireEvent } from 'data/pubsub';

export default class Header extends LightningElement {
    menu = ['ABOUT','SKILLS','EXPERIENCE','PROJECTS','CERTIFICATES','EDUCATION'];
    @track menuItems = [];
    connectedCallback() {
        for(let i in this.menu) {
            this.menuItems.push({'name':this.menu[i],'target':this.menu[i]});
        }
    }

    handleScrollClick(e){
        fireEvent('scroll', {id:e.target.dataset.targetid});
    }
}