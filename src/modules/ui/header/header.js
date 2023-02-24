import { LightningElement,track,api } from 'lwc';
import { fireEvent } from 'data/pubsub';

export default class Header extends LightningElement {
    
    @track menuItems = [];
    @api showContact = false;
    @api header = {};
    connectedCallback() { 
        if(this.header && this.header.menu) {     
            for(let i in this.header.menu) {
                this.menuItems.push({'name':this.header.menu[i],'target':this.header.menu[i]});
            }
            if(this.showContact) {
                this.menuItems.push({'name':'CONTACT','target':'CONTACT'});
            }
        }
        if(!this.header || !this.header.name) {
            this.header = {name:'LWC Profile'};
        }
    }

    handleScrollClick(e){
        fireEvent('scroll', {id:e.target.dataset.targetid});
    }

    value = 'light';

    get options() {
        return [
            { label: 'Light', value: 'light' },
            { label: 'Aqua', value: 'aqua' },
            { label: 'Dark', value: 'dark' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
        fireEvent('theme_change', {id:this.value});
    }
}