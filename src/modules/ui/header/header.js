import { LightningElement,track,api } from 'lwc';
import { fireEvent } from 'data/pubsub';

export default class Header extends LightningElement {
    
    menu = ['ABOUT','SKILLS','EXPERIENCE','PROJECTS','CERTIFICATES','EDUCATION'];
    @track menuItems = [];
    @api showContact = false;

    connectedCallback() {        
        for(let i in this.menu) {
            this.menuItems.push({'name':this.menu[i],'target':this.menu[i]});
        }
        if(this.showContact) {
            this.menuItems.push({'name':'CONTACT','target':'CONTACT'});
        }
    }

    handleScrollClick(e){
        fireEvent('scroll', {id:e.target.dataset.targetid});
    }
}