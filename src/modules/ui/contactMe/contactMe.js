import { LightningElement, track, api } from 'lwc';
export default class ContactMe extends LightningElement {
    @api formspree = {};
    @api social = {}
    @api showContact = false;
    @track formData = {};
    statusMessage = '';

    fieldChange(e) {
        this.formData[e.target.dataset.id] = e.target.value;
    }

    submitForm(event) {
        event.preventDefault();
        if (event.target) {
            let data = new FormData(event.target);
            if (data) {
                console.log(JSON.stringify(data));
                fetch('https://formspree.io/f/' + this.formspree.id, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        this.statusMessage = "Thanks for your submission!";
                        this.formData = {};
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                this.statusMessage = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                this.statusMessage = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                }).catch(error => {
                    this.statusMessage = "Oops! There was a problem submitting the form"
                });

                setTimeout(() => { this.statusMessage = '';this.formData = {}; }, 5000);
            }
        }
    }
}