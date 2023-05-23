import { Line,Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    PointElement
} from "chart.js";
import styled from "styled-components";
import { ChartState } from "../../slice/chartSlice";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
    PointElement
)

export const options = {
    responsive: true,

}

interface ChartProps {
    chartData: ChartState["lineChart"]
}

const colors = ["rgb(255, 99, 132)", "rgb(53, 162, 235)"];
const backColors = ["rgb(255, 99, 132, 0.5)", "rgb(53, 162, 235, 0.5)"];

const LineChart = ({chartData}: ChartProps) => {
    if (chartData.datasets === undefined) return(<></>);
    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((dataset, i) => ({
            label: dataset.label,
            data: dataset.data,
            borderColor: colors[i],
            backgroundColor: backColors[i]
        }))
    }
    return(
        <>
            <ChartContainer>
                <Line data={data} options={options} />
            </ChartContainer>
            <ChartContainer>
                <Bar data={data} options={options} />
            </ChartContainer>
        </>
    )
}

export default LineChart;

const ChartContainer = styled.div`
    width: 900vw;
    max-width: 800px;
    margin: 0 auto;
    margin-bottom: 50px;
`