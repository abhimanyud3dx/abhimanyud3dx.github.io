import { LightningElement,api } from 'lwc';
import { serverMethod } from 'data/apiService';

export default class Details extends LightningElement {
    @api detail = {};
    @api github = {};
    @api social = {};

    githubProfile = {};
    loading;
    connectedCallback() {
        this.retrieveGitProfile();
    }

    retrieveGitProfile() {
        this.loading = true;
        serverMethod('https://api.github.com/users/abhimanyud3dx', 'GET')
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