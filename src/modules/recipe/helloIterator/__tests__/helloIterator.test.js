import { createElement } from 'lwc';
import HelloIterator from 'recipe/helloIterator';

describe('recipe-hello-iterator', () => {
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
        const element = createElement('recipe-hello-iterator', {
            is: HelloIterator
        });
        document.body.appendChild(element);

        // Verify displayed list
        const contacts = Array.from(
            element.shadowRoot.querySelectorAll('li')
        ).map((li) => li.textContent);
        expect(contacts).toEqual(EXPECTED);
    });

    it('displays div in first and last contacts', () => {
        // Create initial element
        const element = createElement('recipe-hello-iterator', {
            is: HelloIterator
        });
        document.body.appendChild(element);

        // Verify first ul's first child is a div
        expect(
            element.shadowRoot.querySelector('li:first-child').firstChild
                .tagName
        ).toBe('DIV');
        // Verify last li's last child is a div
        expect(
            element.shadowRoot.querySelector('li:last-child').lastChild.tagName
        ).toBe('DIV');
    });

    it('is accessible', () => {
        const element = createElement('recipe-hello-iterator', {
            is: HelloIterator
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
