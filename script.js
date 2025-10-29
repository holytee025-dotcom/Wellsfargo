// ===== Wells Fargo Official Style Interactions =====

// Initial balance value
let isBalanceVisible = true;
const balanceElement = document.getElementById("account-balance");

// Set realistic balance
balanceElement.innerText = "$800,000.00";

// Toggle Balance Visibility
function toggleBalance() {
    isBalanceVisible = !isBalanceVisible;
    balanceElement.innerText = isBalanceVisible ? "$800,000.00" : "••••••••";
    document.getElementById("toggle-btn").innerText = isBalanceVisible ? "Hide Balance" : "Show Balance";
}

// Add Event Listener for Toggle Button
document.getElementById("toggle-btn").addEventListener("click", toggleBalance);

// Simulated Loading Animations and Realism
document.addEventListener("DOMContentLoaded", function () {
    const loadingOverlay = document.getElementById("loading-overlay");
    setTimeout(() => {
        loadingOverlay.style.display = "none";
        document.getElementById("main-content").style.display = "block";
    }, 1500);
});

// Add Recent Realistic Transactions
const transactions = [
    { date: "Oct 29, 2025", description: "ACH Deposit - Payroll", amount: "+$12,500.00", type: "credit" },
    { date: "Oct 28, 2025", description: "ATM Withdrawal - Los Angeles, CA", amount: "-$500.00", type: "debit" },
    { date: "Oct 27, 2025", description: "Online Transfer to Savings", amount: "-$20,000.00", type: "debit" },
    { date: "Oct 26, 2025", description: "Wire Transfer Received", amount: "+$150,000.00", type: "credit" }
];

function loadTransactions() {
    const tableBody = document.getElementById("transaction-table");
    transactions.forEach(tx => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${tx.date}</td>
            <td>${tx.description}</td>
            <td class="${tx.type === 'credit' ? 'credit' : 'debit'}">${tx.amount}</td>
        `;
        tableBody.appendChild(row);
    });
}

loadTransactions();
