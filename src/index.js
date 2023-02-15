import '@lwc/synthetic-shadow';
import { createElement } from 'lwc';
import UiApp from 'ui/app';
import { config } from 'data/config';

const app = createElement('my-app', { is: UiApp });

// eslint-disable-next-line @lwc/lwc/no-document-query
document.querySelector('#main').appendChild(app);

window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }

if (config) {
    if (config.googleAnalytics && config.googleAnalytics.id) {
        const trackingId = config.googleAnalytics.id;
        const { head } = document;
        let script = document.createElement('script');
        script.id = 'gtag';
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
        head.insertBefore(script, head.firstChild);
        gtag('js', new Date());
        gtag('config', trackingId);
    }

    if (config.themeConfig &&
        config.themeConfig.defaultTheme &&
        config.themeConfig[config.themeConfig.defaultTheme]) {
        let script = document.getElementById('BMC-Widget');
        script.setAttribute('data-color', config.themeConfig[config.themeConfig.defaultTheme].highlight || config.themeConfig[config.themeConfig.defaultTheme].primary || '#fff');
    }
}


