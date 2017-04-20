const series = [
    {
        content: {
            series: {
                title: '1'
            },
            images: {
                landscape: {
                    url: ''
                }
            }
        }
    },
    {
        content: {
            series: {
                title: '2'
            },
            images: {
                landscape: {
                    url: ''
                }
            }
        }
    },
    {
        content: {
            series: {
                title: '3'
            },
            images: {
                landscape: {
                    url: ''
                }
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
