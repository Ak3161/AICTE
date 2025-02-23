import React, { useState } from "react";

const Dashboard = () => {
    const [income, setIncome] = useState(8750);
    const [expenses, setExpenses] = useState(5320);
    const [category, setCategory] = useState("Food");
    const [transactions, setTransactions] = useState([]);
    
    const categories = ["Food", "Transport", "Rent", "Entertainment", "Utilities", "Healthcare", "Education", "Shopping", "Travel", "Miscellaneous","Other"];
    
    const handleAddIncome = () => {
        const amount = parseFloat(prompt("Enter income amount:"));
        if (!isNaN(amount) && amount > 0) {
            setIncome(income + amount);
        }
    };

    const handleEditIncome = () => {
        const amount = parseFloat(prompt("Enter new monthly income:"));
        if (!isNaN(amount) && amount >= 0) {
            setIncome(amount);
        }
    };

    const handleAddExpense = () => {
        const amount = parseFloat(prompt("Enter expense amount:"));
        if (!isNaN(amount) && amount > 0) {
            setExpenses(expenses + amount);
            setTransactions([...transactions, { category, amount }]);
        }
    };

    const handleDeleteExpense = () => {
        const amount = parseFloat(prompt("Enter expense amount to delete:"));
        if (!isNaN(amount) && amount > 0 && expenses - amount >= 0) {
            setExpenses(expenses - amount);
            setTransactions(transactions.filter(transaction => transaction.amount !== amount));
        }
    };

    const remainingBudget = income - expenses;

    const styles = {
        containerStyle: { display: "flex", height: "100vh" },
        sidebarStyle: { width: "250px", backgroundColor: "#333", color: "white", padding: "20px" },
        menuStyle: { listStyleType: "none", padding: 0 },
        menuItemStyle: { marginBottom: "10px" },
        mainContentStyle: { flex: 1, padding: "20px", backgroundColor: "#F5F5F5" },
        cardContainer: { display: "flex", gap: "20px", marginTop: "20px" },
        cardStyle: { backgroundColor: "white", padding: "20px", borderRadius: "8px", boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", width: "30%", textAlign: "center" },
        buttonStyle: { marginTop: "10px", padding: "10px", cursor: "pointer", border: "none", backgroundColor: "#4CAF50", color: "white", borderRadius: "5px" },
        selectStyle: { marginTop: "10px", padding: "8px", width: "100%", borderRadius: "5px" },
        tableStyle: { marginTop: "20px", width: "100%", borderCollapse: "collapse" },
        thtdStyle: { border: "1px solid black", padding: "8px", textAlign: "left" }
    };

    return (
        <div style={styles.containerStyle}>
            <aside style={styles.sidebarStyle}>
                <h2>Dashboard</h2>
                <ul style={styles.menuStyle}>
                    <li style={styles.menuItemStyle}><button>Home</button></li>
                    <li style={styles.menuItemStyle}><button>📊 Analytics</button></li>
                    <li style={styles.menuItemStyle}><button>💰 Expenses</button></li>
                    <li style={styles.menuItemStyle}><button>⚙️ Settings</button></li>
                </ul>
            </aside>

            <main style={styles.mainContentStyle}>
                <h1>Welcome to Your Dashboard</h1>
                <div style={styles.cardContainer}>
                    <div style={styles.cardStyle}>
                        <h2>💸 Total Expenses</h2>
                        <p>${expenses}</p>
                        <select style={styles.selectStyle} value={category} onChange={(e) => setCategory(e.target.value)}>
                            {categories.map((cat, index) => (
                                <option key={index} value={cat}>{cat}</option>
                            ))}
                        </select>
                        <button style={styles.buttonStyle} onClick={handleAddExpense}>Add Expense</button>
                        <button style={{ ...styles.buttonStyle, backgroundColor: "#f44336" }} onClick={handleDeleteExpense}>Delete Expense</button>
                    </div>
                    <div style={styles.cardStyle}>
                        <h2>📈 Monthly Income</h2>
                        <p>${income}</p>
                        <button style={styles.buttonStyle} onClick={handleAddIncome}>Add Income</button>
                        <button style={{ ...styles.buttonStyle, backgroundColor: "#2196F3" }} onClick={handleEditIncome}>Edit Income</button>
                    </div>
                    <div style={styles.cardStyle}>
                        <h2>📉 Remaining Budget</h2>
                        <p>${remainingBudget}</p>
                    </div>
                </div>
                <h2>Expense Transactions</h2>
                <table style={styles.tableStyle}>
                    <thead>
                        <tr>
                            <th style={styles.thtdStyle}>Category</th>
                            <th style={styles.thtdStyle}>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {transactions.map((transaction, index) => (
                            <tr key={index}>
                                <td style={styles.thtdStyle}>{transaction.category}</td>
                                <td style={styles.thtdStyle}>${transaction.amount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default Dashboard;