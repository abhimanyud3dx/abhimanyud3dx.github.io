import { LightningElement } from 'lwc';
import { config } from 'data/config';
import { registerListener, unregisterAllListeners } from 'data/pubsub';
export default class App extends LightningElement {
    config = config;
    showContact = false;

    connectedCallback() {
        if(this.config && this.config.formspree && this.config.formspree.id) {
            this.showContact = true;
        }
    }

    renderedCallback() {
        registerListener('scroll', (event) => {
            const topDiv = this.template.querySelector('[data-id="' + event.id.toLowerCase().replace(' ','') + '"]');
            if(topDiv) {
                 topDiv.scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" });
            }
        });
    }

    disconnectedCallback() {
        unregisterAllListeners(this);
    }
}
