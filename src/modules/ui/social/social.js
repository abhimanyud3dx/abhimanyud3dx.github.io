import { LightningElement,api } from 'lwc';

export default class Social extends LightningElement {
    @api social = {};
    socialDetails = {};

    connectedCallback() {
        this.socialDetails.trailhead = this.social.trailhead ? 'https://trailblazer.me/id/'+this.social.trailhead : null;
        this.socialDetails.linkedin = this.social.linkedin ? 'https://linkedin.com/'+this.social.linkedin : null;
        this.socialDetails.twitter = this.social.twitter ? 'https://twitter.com/'+this.social.twitter : null;
        this.socialDetails.facebook = this.social.facebook ? 'https://www.facebook.com/'+this.social.facebook : null;
        this.socialDetails.instagram = this.social.instagram ? 'https://instagram.com/'+this.social.instagram : null;
        this.socialDetails.medium = this.social.medium ? 'https://instagram.com/'+this.social.medium : null;
        this.socialDetails.dev = this.social.dev ? 'https://dev.to/'+this.social.dev : null;
        this.socialDetails.stackoverflow = this.social.stackoverflow ? 'https://stackoverflow.com/users/'+this.social.stackoverflow : null;
        this.socialDetails.email = this.social.email ? 'mailto:'+this.social.email : null;
        this.socialDetails.phone = this.social.phone? 'tel:'+this.social.phone : null;
        this.socialDetails.website = this.social.website? this.social.website : null;
        
    }
}