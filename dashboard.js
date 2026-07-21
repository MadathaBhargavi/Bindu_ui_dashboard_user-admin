
// =======================
// Bar Chart
// =======================

const barChart = document.getElementById("barChart");

if (barChart) {
  new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Users",
          data: [120, 190, 300, 250, 400, 500],
          backgroundColor: "#4F46E5"
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  });
}

// =======================
// Pie Chart
// =======================

const pieChart = document.getElementById("pieChart");

if (pieChart) {
  new Chart(pieChart, {
    type: "pie",
    data: {
      labels: ["Completed", "Pending", "Cancelled"],
      datasets: [
        {
          data: [65, 25, 10],
          backgroundColor: [
            "#10B981",
            "#FBBF24",
            "#EF4444"
          ]
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: true
    }
  });
}