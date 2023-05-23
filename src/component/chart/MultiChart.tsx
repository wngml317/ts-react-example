import { Chart } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    BarController,
    ChartType
} from "chart.js";
import styled from "styled-components";
import { ChartState } from "../../slice/chartSlice";

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    BarElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    LineController,
    BarController,
)

export const options = {
    responsive: true,

}

interface ChartProps {
    chartData: ChartState["multiChart"]
}

const colors = ["rgb(255, 99, 132)", "rgb(53, 162, 235)"];
const backColors = ["rgb(255, 99, 132, 0.5)", "rgb(53, 162, 235, 0.5)"];

const MultiChart = ({chartData}: ChartProps) => {
    if (chartData.datasets === undefined) return(<></>);
    const data = {
        labels: chartData.labels,
        datasets: chartData.datasets.map((dataset, i) => ({
            type: dataset.type as ChartType,
            label: dataset.label,
            data: dataset.data,
            borderColor: colors[i],
            backgroundColor: backColors[i]
        }))
    }
    return(
        <ChartContainer>
            <Chart type='bar' data={data} />
        </ChartContainer>
    )
}

export default MultiChart;

const ChartContainer = styled.div`
    width: 900vw;
    max-width: 900px;
    margin: 0 auto;
    margin-bottom: 50px;
`