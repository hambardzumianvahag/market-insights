import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import styles from './BarChart.module.css';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = ({color, title, value1, value2}) => {
  // Data for the chart
  const data = {
    labels: ["Emaar", "Nakheel", "Al Makht.", "Al Makht.", "Emaar", "Nakheel"],
    datasets: [
      {
        label: "",
        backgroundColor: color,
        borderColor: "transparent",
        borderRadius: 20,
        borderWidth: 5,
        barThickness: 50,
        maxBarThickness: 50,
        data: [600, 700, 1000, 700, 650, 800],
      },
    ],
  };

  // Options for the chart
  const options = {
    plugins: {
      tooltip: {
        backgroundColor: "#F3F6F8",
        titleColor: "#8F92A1",
        titleFontSize: 12,
        bodyColor: "#171717",
        bodyFont: {
          weight: "bold",
          size: 16,
        },
        multiKeyBackground: "transparent",
        displayColors: false,
        padding: {
          x: 30,
          y: 10,
        },
        bodyAlign: "center",
        titleAlign: "center",
        enabled: true,
      },
      legend: {
        display: false,
      },
    },
    layout: {
      padding: {
        top: 0,
      },
    },
    responsive: true,
    title: {
      display: false,
    },
    scales: {
      y: {
        grid: {
          display: false,
          drawTicks: false,
          drawBorder: false,
        },
        ticks: {
          padding: 35,
          max: 1200,
          min: 0,
        },
      },
      x: {
        grid: {
          display: false,
          drawBorder: false,
          color: "rgba(143, 146, 161, .1)",
          zeroLineColor: "rgba(143, 146, 161, .1)",
        },
        ticks: {
          padding: 20,
        },
      },
    },
  };

  return (
    <div style={{ width: "100%", maxWidth: '870px', minWidth: '320px', boxShadow: '0px 4px 20px 0px #EEEEEE80', padding: '24px 20px', border: '1px solid #F8F9FA', borderRadius: '24px', backgroundColor:'#FFFFFF', marginLeft: "-35px", marginTop: '20px'}}>
      <h3 className={styles.title}>{title}</h3>
      <Bar data={data} options={options} />
      <div className={styles.radioDiv}>
        <div>
          <input type="radio" id={value1} name="sales" defaultChecked />
          <label htmlFor={value1}>Sales Value</label>
        </div>
        <div>
          <input type="radio" id={value2} name="sales" />
          <label htmlFor={value2}>Sales Volume</label>
        </div>
      </div>
    </div>
  );
};

export default BarChart;
