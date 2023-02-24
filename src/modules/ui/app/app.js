import { LightningElement } from 'lwc';
import { config } from 'data/config';
import { registerListener, unregisterAllListeners } from 'data/pubsub';
export default class App extends LightningElement {
    config = config;
    showContact = false;

    connectedCallback() {
        if (this.config && this.config.formspree && this.config.formspree.id) {
            this.showContact = true;
        }
    }

    renderedCallback() {
        registerListener('scroll', (event) => {
            const topDiv = this.template.querySelector('[data-id="' + event.id.toLowerCase().replace(' ', '') + '"]');
            if (topDiv) {
                topDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
        });
        if (this.config.themeConfig) {
            this.applyTheme(this.config.themeConfig.defaultTheme);
        }
        registerListener('theme_change', (event) => {
            this.applyTheme(event.id);
        });        
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }

    applyTheme(themeName) {
        if (this.config.themeConfig[themeName]) {
            let css = '';
            if (this.config.themeConfig[themeName].baseL1) {
                css += '.baseL1 { background-color:' + this.config.themeConfig[themeName].baseL1 + ' !important; }';
            }
            if (this.config.themeConfig[themeName].baseL2) {
                css += '.baseL2 { background-color:' + this.config.themeConfig[themeName].baseL2 + ' !important; }';
            }

            if (this.config.themeConfig[themeName].highlight) {
                css += '.highlight { background-color:' + this.config.themeConfig[themeName].highlight + ' !important; }';
                css += '.profilePic, .slds-context-bar { border-color:' + this.config.themeConfig[themeName].highlight + ' !important; }';
            }
            if (this.config.themeConfig[themeName].baseText) {
                css += '.baseText, p, div, span, a, label, a:hover  { color:' + this.config.themeConfig[themeName].baseText + ' !important; }';
                css += 'svg { fill:' + this.config.themeConfig[themeName].baseText + ' !important; }';
            }
            if (this.config.themeConfig[themeName].primary) {
                css += 'body, .primary, .slds-timeline__item_call:before, .invertIcon, button, .slds-button, input, textarea,.slds-listbox, lightning-base-combobox-item { background-color:' + this.config.themeConfig[themeName].primary + ' !important; }';
            }
            if (this.config.themeConfig[themeName].primaryText) {
                css += 'body, .primary, .slds-button, button, button span,lightning-base-combobox span, input, textarea { color:' + this.config.themeConfig[themeName].primaryText + ' !important; }';
                css += '.primary  svg , .slds-button  svg, lightning-base-combobox svg, .invertIcon svg{ fill:' + this.config.themeConfig[themeName].primaryText + ' !important; }';
            }
            if (this.config.themeConfig[themeName].roundedbox) {
                css += '.rounded-box, .slds-box,  input, textarea { border-radius:' + this.config.themeConfig[themeName].roundedbox + ' !important; }';
            }
            if (this.config.themeConfig[themeName].roundedbtn) {
                css += '.rounded-btn, button { border-radius:' + this.config.themeConfig[themeName].roundedbtn + ' !important; }';
            }
            const style = document.createElement('style');
            style.innerText = css;
            this.template.querySelector('.theme_style').appendChild(style);
        }
    }
}
