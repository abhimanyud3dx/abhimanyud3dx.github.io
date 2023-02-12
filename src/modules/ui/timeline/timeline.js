import { LightningElement,api } from 'lwc';

export default class Timeline extends LightningElement {
    @api iconName = 'standard:education';
    @api timeline = [];
}