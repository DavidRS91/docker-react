import randomColor from '../utils/color'
function getData(num) {
        let chartData = [];
        let labels = [];
        for (let i = 0; i < num; i++) {
            chartData.push(Math.random() * 50)
            labels.push(`Field ${i}`)
        }
        
        const data = {
            labels,
            datasets: [{
                label: "sample dataset",
                data: chartData,
                backgroundColor: randomColor,
            }]
        }
        return data;
    }
export default getData;


