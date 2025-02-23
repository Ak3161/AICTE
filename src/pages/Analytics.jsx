import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import { useNavigate } from "react-router-dom";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Analytics = ({ income, expenses }) => {
    const navigate = useNavigate();
    const remainingBudget = income - expenses;

    const data = {
        labels: ["Income", "Expenses", "Remaining Budget"],
        datasets: [
            {
                label: "Financial Overview",
                data: [income, expenses, remainingBudget],
                backgroundColor: ["#4CAF50", "#f44336", "#2196F3"],
            },
        ],
    };

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>📊 Analytics</h1>
            <Bar data={data} />
            <button style={{ padding: "10px", margin: "20px", cursor: "pointer", backgroundColor: "#4CAF50", color: "white", border: "none", borderRadius: "5px" }} onClick={() => navigate("/")}>
                Back to Dashboard
            </button>
        </div>
    );
};

export default Analytics;
