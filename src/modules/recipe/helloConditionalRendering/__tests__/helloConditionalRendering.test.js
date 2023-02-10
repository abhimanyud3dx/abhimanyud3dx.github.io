import { createElement } from 'lwc';
import HelloConditionalRendering from 'recipe/helloConditionalRendering';

describe('recipe-hello-conditional-rendering', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it('does not show details by default', () => {
        // Create element
        const element = createElement('recipe-hello-conditional-rendering', {
            is: HelloConditionalRendering
        });
        document.body.appendChild(element);

        // Verify displayed message
        const detailEl = element.shadowRoot.querySelector('.details');
        expect(detailEl.textContent).toBe('Not showing details.');
    });

    it('shows details when checkbox toggled', () => {
        // Create element
        const element = createElement('recipe-hello-conditional-rendering', {
            is: HelloConditionalRendering
        });
        document.body.appendChild(element);

        // Toggle checkbox to show details
        const inputEl = element.shadowRoot.querySelector('ui-input');
        inputEl.checked = true;
        inputEl.dispatchEvent(new CustomEvent('change'));

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise rejects.
        return Promise.resolve().then(() => {
            // Verify displayed message
            const detailEl = element.shadowRoot.querySelector('.details');
            expect(detailEl.textContent).toBe('These are the details!');
        });
    });

    it('is accessible when details are visible', () => {
        const element = createElement('recipe-hello-conditional-rendering', {
            is: HelloConditionalRendering
        });

        document.body.appendChild(element);

        // Toggle checkbox to show details
        const inputEl = element.shadowRoot.querySelector('ui-input');
        inputEl.checked = true;
        inputEl.dispatchEvent(new CustomEvent('change'));

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });

    it('is accessible when details are not visible', () => {
        const element = createElement('recipe-hello-conditional-rendering', {
            is: HelloConditionalRendering
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
