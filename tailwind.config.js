module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-grafana": "#181b1f",
        "dark-grafana-bg": "#111217",
        "dark-grafana-button": "#2b2b2b",
        "dark-grafana-header": "#3e3e40",
        "dark-grafana-minicard": "#FF5733",
        "white-grafana": "#FF5733",
        "light-white": "rgba(255,255,255,0.17)",
      },
      borderWidth: {
        DEFAULT: '1px',
        '0': '0',
        '2': '0.5px',
        '3': '1px',
        '4': '1.5px',
        '6': '2px',
        '8': '2.5px',
      },
      py: {
        DEFAULT: '0.5',
        '0': '0',
        '1': '0.01rem',
        '2': '0.02rem',
        '3': '0.04rem',
        '4': '0.08rem',
        '5': '0.10rem',
        '6': '0.12rem',
      },
      px: {
        DEFAULT: '0.5',
        '0': '0',
        '1': '0.01rem',
        '2': '0.02rem',
        '3': '0.04rem',
        '4': '0.08rem',
        '5': '0.10rem',
        '6': '0.12rem',
      }
    },
  },
  plugins: [],
};
