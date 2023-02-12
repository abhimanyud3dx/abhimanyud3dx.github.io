import { LightningElement,api} from 'lwc';

export default class Skills extends LightningElement {
    @api skills = [];
    skillsText;
    connectedCallback() {
        let skillsText = '⚡ ';
        for(let i in this.skills) {
            skillsText += this.skills[i];
            if(i < this.skills.length -1) {
                skillsText +=' | ';
            }
        }
        skillsText +=' ⚡'
        this.skillsText = skillsText;
    }
}