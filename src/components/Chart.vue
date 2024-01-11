<template>
  <div
    class="chart-container py-8 px-4"
    v-motion
    :initial="{ opacity: 0, x: -100 }"
    :visible="{ opacity: 1, x: 0 }"
    :delay="300"
  >
  
    <canvas id="pie-chart"></canvas>
    <canvas id="bar-chart"></canvas>
    <div
      class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12"
    >
      <h2
        class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
      >
        Notre formule magique...
      </h2>
      <p
        class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
      >
        Retrouvez tous les ingrédients de notre boisson énergissante
      </p>
      
    </div>
  </div>
</template>

<script>
import Chart from "chart.js/auto";

export default {
  data() {
    return {
      pieChart: null,
      barChart: null,
    };
  },
  mounted() {
    let observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          this.initCharts();
        });
      },
      { threshold: 0.9 }
    );

    observer.observe(document.getElementById("pie-chart"));
    observer.observe(document.getElementById("bar-chart"));
  },
  methods: {
    initCharts() {
      if (this.pieChart) this.pieChart.destroy();
      if (this.barChart) this.barChart.destroy();

      this.createPieChart();
      this.createBarChart();
    },
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
          plugins: {
            legend: {
              display: false,
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
            label: "test",
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
          plugins: {
            legend: {
              display: false,
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
  justify-content: space-around;
  flex-wrap: wrap;
}

#pie-chart,
#bar-chart {
  max-width: 40%;
  height: auto;
}

@media (max-width: 600px) {
  #pie-chart,
  #bar-chart {
    max-width: 100%;
    margin-bottom: 20px;
    height: auto;
  }
}

canvas {
  flex: 1;
}
</style>
