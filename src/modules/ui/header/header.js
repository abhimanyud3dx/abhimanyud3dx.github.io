import { LightningElement,track,api } from 'lwc';
import { fireEvent } from 'data/pubsub';

export default class Header extends LightningElement {
    
    @track menuItems = [];
    @api showContact = false;
    @api header = {};
    @api themes = {};

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
        this.themevalue = this.themes ? this.themes.defaultTheme : '';
    }

    handleScrollClick(e){
        fireEvent('scroll', {id:e.target.dataset.targetid});
    }

    themevalue = this.themes ? this.themes.defaultTheme : '';

    get options() {
        let themesOptions = [];
        for(let i in this.themes) {
            if(i !== 'defaultTheme') {
                themesOptions.push( { label: i[0].toUpperCase()+i.substring(1,i.length) , value: i });
            }
        }
        return themesOptions;
    }

    handleChange(event) {
        this.themevalue = event.detail.value;
        fireEvent('theme_change', {id:this.themevalue});
    }
}