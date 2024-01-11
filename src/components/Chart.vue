<template>
  <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
    <h2
      class="mb-2 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white"
    >
      Notre formule magique...
    </h2>
    <p
      class="my-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400"
    >
      Découvrez notre boisson énergisante, un savant mélange d'ingrédients de
      qualité supérieure provenant des quatre coins du monde. Conçue pour
      revitaliser et énergiser, chaque composant est soigneusement sélectionné
      pour sa pureté et ses bienfaits uniques, offrant une expérience
      rafraîchissante et dynamisante.
    </p>
  </div>
  <div class="chart-container">
    <canvas ref="pieChart" id="pie-chart" style="height: 500px"></canvas>
    <canvas ref="barChart" id="bar-chart" style="height: 500px"></canvas>
  </div>
</template>

<script setup>
import Chart from "chart.js/auto";
import { onMounted, ref } from "vue";
const pieChart = ref(null);
const barChart = ref(null);
let barC = null;
let barP = null;
const createPieChart = () => {
  const data = {
    labels: ["Inde", "Suisse", "France", "Thaïlande", "Chine", "État-Unis"],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        label: "Pourcentage (%)",
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
    type: "doughnut",
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
          position: "bottom",
        },
      },
    },
  };
  barP = new Chart(document.getElementById("pie-chart"), config);
};
const createBarChart = () => {
  const data = {
    labels: [
      "Sucre",
      "Jus de Citron",
      "Eau",
      "Jus d'ananas",
      "Théine",
      "Caféine",
    ],
    datasets: [
      {
        label: "Pourcentage (%)",
        data: [31, 29, 41, 22, 19, 17],
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
          position: "bottom",
        },
      },
      animation: {
        tension: {
          duration: 8000,
          easing: "linear",
          from: 1,
          to: 0,
          loop: true,
        },
      },
    },
  };
  barC = new Chart(document.getElementById("bar-chart"), config);
};

onMounted(() => {
  const observerPie = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (barP !== null && !entry.isIntersecting) {
          barP.destroy();
          barP = null;
        } else if (entry.isIntersecting && barP === null) {
          createPieChart();
        }
      });
    },
    { threshold: 0.2 }
  );
  const observerBar = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (barC !== null && !entry.isIntersecting) {
          barC.destroy();
          barC = null;
        } else if (entry.isIntersecting && barC === null) {
          createBarChart();
        }
      });
    },
    { threshold: 0.2 }
  );

  observerPie.observe(pieChart.value);
  observerBar.observe(barChart.value);
});
</script>
<style>
.chart-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  padding: 32px;
}

#pie-chart,
#bar-chart {
  flex: 1 1 auto;
  max-width: 40%;
  max-height: 484px;
}

@media (max-width: 600px) {
  #pie-chart,
  #bar-chart {
    max-width: 100%;
    margin-bottom: 20px;
  }
}

canvas {
  flex: 1;
}
</style>
