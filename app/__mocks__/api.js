const series = [
    {
        content: {
            series: {
                title: '1'
            }
        }
    },
    {
        content: {
            series: {
                title: '2'
            }
        }
    },
    {
        content: {
            series: {
                title: '3'
            }
        }
    }
];

export default function request() {
    return new Promise((resolve, reject) => {
        process.nextTick(
            () => series.length > 0 ? resolve(series) : reject({
                    error: 'Error',
                })
        );
    });
}
