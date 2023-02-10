import { createElement } from 'lwc';
import MiscSharedJavaScript from 'recipe/miscSharedJavaScript';
import { calculateMonthlyPayment } from 'recipe/mortgage';

// Mocking mortgage module
jest.mock('recipe/mortgage', () => {
    return {
        getTermOptions: jest.fn(),
        calculateMonthlyPayment: jest.fn()
    };
});

// Default values for mortgage calculation
const PRINCIPAL_DEFAULT = 200000;
const TERM_DEFAULT = 30;
const RATE_DEFAULT = 4;

// Custom values for mortgate calculation
const PRINCIPAL_CUSTOM = 100000;
const TERM_CUSTOM = 15;
const RATE_CUSTOM = 2;

describe('recipe-misc-shared-java-script', () => {
    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
        // Clear mocks so that every test run has a clean implementation
        jest.clearAllMocks();
    });

    it('calculates mortgage with default values', () => {
        // Create initial element
        const element = createElement('recipe-misc-shared-java-script', {
            is: MiscSharedJavaScript
        });
        document.body.appendChild(element);

        // Select button for simulating user interaction
        const buttonEl = element.shadowRoot.querySelector('ui-button');
        buttonEl.click();

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise ends in the
        // rejected state
        return Promise.resolve().then(() => {
            // Check if default values for principal, term, and rate are used for mortgage calculcation
            expect(calculateMonthlyPayment).toHaveBeenCalledWith(
                PRINCIPAL_DEFAULT,
                TERM_DEFAULT,
                RATE_DEFAULT
            );
        });
    });

    it('calculates mortgage with custom values', () => {
        // Create initial element
        const element = createElement('recipe-misc-shared-java-script', {
            is: MiscSharedJavaScript
        });
        document.body.appendChild(element);

        // Select input fields for simulating user input
        const inputEls = element.shadowRoot.querySelectorAll('ui-input');

        inputEls.forEach((el) => {
            if (el.label === 'Rate') {
                el.value = RATE_CUSTOM;
            } else if (el.label === 'Principal') {
                el.value = PRINCIPAL_CUSTOM;
            }
            el.dispatchEvent(new CustomEvent('change'));
        });

        // Select combobox for simulating user input
        const selectEl = element.shadowRoot.querySelector('ui-select');
        selectEl.value = TERM_CUSTOM;
        selectEl.dispatchEvent(new CustomEvent('change'));

        // Select button for simulating user interaction
        const buttonEl = element.shadowRoot.querySelector('ui-button');
        buttonEl.click();

        // Return a promise to wait for any asynchronous DOM updates. Jest
        // will automatically wait for the Promise chain to complete before
        // ending the test and fail the test if the promise ends in the
        // rejected state
        return Promise.resolve().then(() => {
            // Check if default values for principal, term, and rate are used for mortgage calculcation
            expect(calculateMonthlyPayment).toHaveBeenCalledWith(
                PRINCIPAL_CUSTOM,
                TERM_CUSTOM,
                RATE_CUSTOM
            );
        });
    });

    it('is accessible', () => {
        const element = createElement('recipe-misc-shared-java-script', {
            is: MiscSharedJavaScript
        });

        document.body.appendChild(element);

        return Promise.resolve().then(() => expect(element).toBeAccessible());
    });
});
