<template>
  <div class="chart-container">
    <canvas id="pie-chart"></canvas>
    <canvas id="bar-chart"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  mounted() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.createPieChart();
            this.createBarChart();
          }
        });
      },
      { threshold: 0.9 }
    );

    observer.observe(document.getElementById("pie-chart"));
    observer.observe(document.getElementById("bar-chart"));
  },
  methods: {
    createPieChart() {
      const data = {
        labels: ["Rouge", "Bleu", "Jaune", "Vert", "Violet", "Orange"],
        datasets: [
          {
            label: "Répartition des couleurs",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)",
            ],
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "pie",
        data: data,
        options: {
          animation: {
            duration: 2000,
            easing: "easeOutBounce",
            onComplete: function () {
              console.log("Animation complete!");
            },
          },
          scales: {
            y: {
              display: false,
              beginAtZero: true,
              grid: {
                display: false,
              },
            },
          },
        },
      };

      new Chart(document.getElementById("pie-chart"), config);
    },
    createBarChart() {
      const data = {
        labels: ["Jan", "Fév", "Mar", "Avr", "Mai", "Jun"],
        datasets: [
          {
            label: "Visites par mois",
            data: [50, 60, 70, 180, 190, 200],
            backgroundColor: "rgba(0, 123, 255, 0.5)",
            borderColor: "rgba(0, 123, 255, 1)",
            borderWidth: 1,
          },
        ],
      };

      const config = {
        type: "bar",
        data: data,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              display: false,
              grid: {
                display: false,
              },
            },
            x: {
              display: false,
              grid: {
                display: false,
              },
            },
          },
          animation: {
            tension: {
              duration: 1000,
              easing: "linear",
              from: 1,
              to: 0,
              loop: true,
            },
          },
        },
      };

      new Chart(document.getElementById("bar-chart"), config);
    },
  },
};
</script>

<style>
.chart-container {
  display: flex;
  width: 100%;
}

#pie-chart {
  max-width: 40%;
}

#bar-chart {
  max-width: 40%;
}

canvas {
  flex: 1;
}
</style>
