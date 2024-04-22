module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        yellow: "#F5C32C",
        orange: "#FCA61F",
        black: "#242D49",
        gray: "#788097",
        blueCard: "#DDF8FE",
        purple: "rgb(238 210 255)",
      },
      boxShadow: {
        custom: "0px 19px 60px rgba(0 0 0 / 8%)",
        sm: "-79px 51px 60px rgba(0, 0, 0, 0.08)",
      },
      borderRadius: {
        '34': '34px',
      },
      linearGradientColors: {
        'yellow-orange': ['#FDC50F', '#FB982F'],
      },
      borderWidth: {
        '1': '1px',
      },
    },
  },
  plugins: [],
}