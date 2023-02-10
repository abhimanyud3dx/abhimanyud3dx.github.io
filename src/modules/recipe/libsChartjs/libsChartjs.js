import { LightningElement } from 'lwc';

const generateRandomNumber = () => {
    return Math.round(Math.random() * 100);
};

export default class LibsChartjs extends LightningElement {
    chart;
    chartjsInitialized = false;

    config = {
        type: 'doughnut',
        data: {
            datasets: [
                {
                    data: [
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber(),
                        generateRandomNumber()
                    ],
                    backgroundColor: [
                        'rgb(255, 99, 132)',
                        'rgb(255, 159, 64)',
                        'rgb(255, 205, 86)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)'
                    ],
                    label: 'Dataset 1'
                }
            ],
            labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue']
        },
        options: {
            responsive: true,
            legend: {
                position: 'right'
            },
            animation: {
                animateScale: true,
                animateRotate: true
            }
        }
    };

    renderedCallback() {
        if (this.chartjsInitialized) {
            return;
        }
        this.chartjsInitialized = true;
        this.loadChartJs();
    }

    async loadChartJs() {
        await require(/* webpackChunkName: "chartJs" */ 'chart.js');
        const ctx = this.template
            .querySelector('canvas.donut')
            .getContext('2d');
        this.chart = new window.Chart(ctx, this.config);
    }
}
