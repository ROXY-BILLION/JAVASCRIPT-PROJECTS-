let expenses = [
    {
        id: 1,
        name: "Lunch",
        amount: 15,
        category: "Food",
        date: "2026-10-05"
    },
    {
        id: 2,
        name: "Uber Ride",
        amount: 28.5,
        category: "Transport",
        date: "2026-10-04"
    },
    {
        id: 3,
        name: "New Sneakers",
        amount: 85,
        category: "Shopping",
        date: "2026-10-03"
    },
    {
        id: 4,
        name: "Internet Bill",
        amount: 65,
        category: "Bills",
        date: "2026-10-01"
    }
];

const expenseForm = document.getElementById("expenseForm");
const expenseName = document.getElementById("expenseName");
const amount = document.getElementById("amount");
const category = document.getElementById("category");
const date = document.getElementById("date");

const expenseList = document.getElementById("expenseList");
const totalSpent = document.getElementById("totalSpent");
const statTotal = document.getElementById("statTotal");
const expenseCount = document.getElementById("expenseCount");
const averageExpense = document.getElementById("averageExpense");
const transactionCount = document.getElementById("transactionCount");

function formatCurrency(value) {
    return `$${value.toFixed(2)}`;
}

function formatDate(dateString) {
    const expenseDate = new Date(dateString + "T00:00:00");

    return expenseDate.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
    });
}

function calculateTotal() {
    return expenses.reduce(function(total, expense) {
        return total + expense.amount;
    }, 0);
}

function updateStatistics() {
    const total = calculateTotal();

    const count = expenses.length;

    const average = count > 0 ? total / count : 0;

    totalSpent.textContent = formatCurrency(total);
    statTotal.textContent = formatCurrency(total);
    expenseCount.textContent = count;
    transactionCount.textContent = count;
    averageExpense.textContent = formatCurrency(average);
}

function renderExpenses() {
    expenseList.innerHTML = "";

    if (expenses.length === 0) {
        const emptyState = document.createElement("div");

        emptyState.classList.add("empty-state");

        emptyState.innerHTML = `
            <div class="empty-icon">$</div>
            <h3>No expenses yet</h3>
            <p>Start adding your expenses to see them here.</p>
        `;

        expenseList.appendChild(emptyState);

        updateStatistics();

        return;
    }

    expenses.forEach(function(expense) {
        const expenseItem = document.createElement("article");

        expenseItem.classList.add("expense-item");

        expenseItem.innerHTML = `
            <div class="expense-main">
                <div class="expense-name">${expense.name}</div>

                <div class="expense-meta">
                    <span class="category">${expense.category}</span>
                    <span>${formatDate(expense.date)}</span>
                </div>
            </div>

            <div class="expense-amount">
                ${formatCurrency(expense.amount)}
            </div>

            <button
                class="delete-button"
                data-id="${expense.id}"
                aria-label="Delete ${expense.name}"
            >
                ×
            </button>
        `;

        expenseList.appendChild(expenseItem);
    });

    updateStatistics();
}

function addExpense(event) {
    event.preventDefault();

    const name = expenseName.value.trim();
    const expenseAmount = Number(amount.value);
    const expenseCategory = category.value;
    const expenseDate = date.value;

    if (
        name === "" ||
        expenseAmount <= 0 ||
        expenseCategory === "" ||
        expenseDate === ""
    ) {
        return;
    }

    const newExpense = {
        id: Date.now(),
        name: name,
        amount: expenseAmount,
        category: expenseCategory,
        date: expenseDate
    };

    expenses.push(newExpense);

    expenseForm.reset();

    renderExpenses();
}

function deleteExpense(id) {
    expenses = expenses.filter(function(expense) {
        return expense.id !== id;
    });

    renderExpenses();
}

expenseForm.addEventListener("submit", addExpense);

expenseList.addEventListener("click", function(event) {
    if (event.target.classList.contains("delete-button")) {
        const id = Number(event.target.dataset.id);

        deleteExpense(id);
    }
});

renderExpenses();