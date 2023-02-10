import { LightningElement } from 'lwc';
import { getTermOptions, calculateMonthlyPayment } from 'recipe/mortgage';



export default class MiscSharedJavaScript extends LightningElement {
    principal = 200000;
    term = 30;
    rate = 4;
    monthlyPayment = '';
    chart;

    chartjsInitialized;

    renderedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;
        this.loadChartJs();
    }

    async loadChartJs() {
        window.Highcharts = await require('highcharts'); console.log(Highcharts);
        const ctx = this.template
            .querySelector('div.container')
        this.chart = new window.Highcharts.chart(ctx, {
            chart: {
                type: 'bar'
            },
            title: {
                text: 'Fruit Consumption'
            },
            xAxis: {
                categories: ['Apples', 'Bananas', 'Oranges']
            },
            yAxis: {
                title: {
                    text: 'Fruit eaten'
                }
            },
            series: [{
                name: 'Jane',
                data: [1, 0, 4]
            }, {
                name: 'John',
                data: [5, 7, 3]
            }]
        });
    }

    connectedCallback(){
        window.Highcharts = require('highcharts');
        require('highcharts/modules/exporting')(Highcharts);
    }

    loadHighChart() {
        window.Highcharts = require('highcharts');
    }

    termOptions = getTermOptions();

    principalChange(event) {
        this.principal = event.target.value;
    }

    termChange(event) {
        this.term = parseInt(event.target.value, 10);
    }

    rateChange(event) {
        this.rate = event.target.value;
    }

    calculateMonthlyPayment() {
        this.monthlyPayment = calculateMonthlyPayment(
            this.principal,
            this.term,
            this.rate
        );
    }
}
