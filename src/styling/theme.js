const theme = {
    color: {
        lightest: '#ffffff',
        primary: '#93918f',
        secondary: '#000000',
        buttons: '#fdb755',
    },
    font: {
        family: {
            default: '"Montserrat", sans-serif',
            headline: '"Bitter", serif',
        },
        size: {
            default: '1rem',
        },
        lineHeight: {
            default: 1.69,
        },
    },

    padding: {
        default: '0 2vw',
    },

    heatmap: {
        size: {
            width: '1200',
            daysHeaderWidth: '154',
            get timeHeaderWidth() {
                this.width - this.daysHeaderWidth;
            },
            timeHeaderHeight: '52',
            get cellsWidth() {
                return (this.width - this.daysHeaderWidth) / 24;
            },
        },
        hourColors: [
            '#e0e592',
            '#aed396',
            '#a9d194',
            '#a0ce93',
            '#99cd94',
            '#8cc894',
            '#5eb391',
            '#5db492',
            '#5cb391',
            '#5aad8c',
            '#3984a3',
        ],
        daysColor: '#1e2537',
        timeHeaderColor: '#787878',
        headerBorder: '#f3f3f3',
        heatmapHover: '#1e2537',
        headerBackground: 'linear-gradient(to bottom, #fefefe, #e9e9e9)',
        highlighttColor: '#000000',
    },
    postsTable: {
        color: '#0087FF',
        size: '930',
        borderColor: '#dddddd',
    },
};

export default theme;
