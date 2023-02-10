import { createElement } from 'lwc';
import HelloForEach from 'recipe/helloForEach';

describe('recipe-hello-for-each', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('displays contacts in specific order', () => {
        const EXPECTED = [
            'Amy Taylor, VP of Engineering',
            'Michael Jones, VP of Sales',
            'Jennifer Wu, CEO'
        ];

        // Create initial element
        const element = createElement('recipe-hello-for-each', {
            is: HelloForEach
        });
        document.body.appendChild(element);

        // Verify displayed list
        const contacts = Array.from(
            element.shadowRoot.querySelectorAll('li')
        ).map((li) => li.textContent);
        expect(contacts).toEqual(EXPECTED);
    });

    it('is accessible', () => {
        const element = createElement('recipe-hello-for-each', {
            is: HelloForEach
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
