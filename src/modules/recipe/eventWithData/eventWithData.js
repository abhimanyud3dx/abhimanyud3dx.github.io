import { LightningElement, wire } from 'lwc';
import getContactList from 'data/wireGetContactListProvider';

export default class EventWithData extends LightningElement {
    selectedContact;

    @wire(getContactList) contacts;

    handleSelect(event) {
        const contactId = event.detail;
        this.selectedContact = this.contacts.data.find(
            (contact) => contact.Id === contactId
        );
    }
}
