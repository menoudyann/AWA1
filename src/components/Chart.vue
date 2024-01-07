<template>
  <div class="container">
    <CanvasJSChart
      :options="newVSReturningVisitorsOptions"
      @chart-ref="chartRef"
      :styles="styleOptions"
    />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      chart: null,
      showBackButton: false,
      buttonStyle: {
        backgroundColor: "#F25F5C",
      },
      visitorsDrilldownedChartOptions: {
        animationEnabled: true,
        theme: "light2",
        axisY: {
          gridThickness: 0,
          lineThickness: 1,
        },
        data: [],
      },
      newVSReturningVisitorsOptions: {
        animationEnabled: true,
        theme: "light2",
        title: {
        },
        subtitles: [
          {
            
          },
        ],
        data: [],
      },
      options: {
        "New vs Returning Visitors": [
          {
            type: "pie",
            name: "New vs Returning Visitors",
            startAngle: 90,
            cursor: "pointer",
            explodeOnClick: false,
            showInLegend: false,
            legendMarkerType: "square",
            indexLabelPlacement: "inside",
            indexLabelFontColor: "white",
            dataPoints: [
              {
                y: 20,
                name: "Banane",
                color: "#e0e0e0",
                indexLabel: "20%",
              },
              {
                y: 25,
                name: "Eau",
                color: "#36a1cd",
                indexLabel: "25%",
              },
              {
                y: 11,
                name: "Sucre",
                color: "#2981a2",
                indexLabel: "11%",
              },
              {
                y: 12,
                name: "Pommes",
                color: "#1c607b",
                indexLabel: "12%",
              },
              {
                y: 14,
                name: "Guava",
                color: "#4ef3bb",
                indexLabel: "14%",
              },
              {
                y: 15,
                name: "Caféine",
                color: "#c7c6c6",
                indexLabel: "15%",
              },
            ],
          },
        ],
      },
      styleOptions: {
        width: "100%",
        height: "500px",
      },
    };
  },
  methods: {
    chartRef(chartInstance) {
      this.chart = chartInstance;
      this.chart.options = this.newVSReturningVisitorsOptions;
      this.chart.options.data = this.options["New vs Returning Visitors"];
      this.chart.render();
    },
  },
};
</script>
