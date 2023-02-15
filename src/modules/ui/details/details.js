import { LightningElement, api } from 'lwc';
import { serverMethod } from 'data/apiService';

export default class Details extends LightningElement {
    @api config = {};
    detail = {};
    github = {};
    social = {};
    resume = '';

    githubProfile = {};
    loading;
    connectedCallback() {
        this.detail = this.config.detail;
        this.github = this.config.github;
        this.social = this.config.social;
        this.resume = this.config.resume;
        if (this.github && this.github.username) {
            this.retrieveGitProfile();
        }
    }

    openResume(e) {
        window.open(this.resume);
    }

    retrieveGitProfile() {
        this.loading = true;
        serverMethod('https://api.github.com/users/' + this.github.username, 'GET')
            .then((result) => {
                this.githubProfile = result;
                this.loading = false;
            })
            .catch((error) => {
                this.loading = false;
                console.log(`Error retrieving blogs: ${error}`);
            });
    }
}