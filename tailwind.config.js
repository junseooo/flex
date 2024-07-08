/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "'Segoe UI'",
          "Roboto",
          "'Helvetica Neue'",
          "Arial",
          "'Noto Sans'",
          "sans-serif",
          "'Apple Color Emoji'",
          "'Segoe UI Emoji'",
          "'Segoe UI Symbol'",
          "'Noto Color Emoji'",
        ],
      },
      fontSize: {
        "11px": ["11px", "1.2em"],
        "12px": ["12px", "21.6px"],
        "13px": ["13px", "19.5px"],
        "15px": ["15px", "20.25px"],
        "section-3-15px": ["15px", "19.5px"],
        "section-4-15px": ["15px", "2"],
        "17px": ["17px", "23.8px"],
        "28px": ["28px", "33.6px"],
        "section-4-28px": ["28px", "1.2"],
        "section-5-36px": ["36px", "43.2px"],
        "40px": "40px",
        "44px": ["44px", "49px"],
      },
      fontWeight: {
        550: "550",
      },
      width: {
        "22px": "22px",
        "120px": "120px",
        "200px": "200px",
        "220px": "220px",
        "280px": "280px",
        "30%": "30%",
      },
      maxWidth: {
        "200px": "200px",
        "1110px": "1110px",
      },
      minWidth: {
        "220px": "220px",
      },
      height: {
        "38px": "38px",
        "42px": "42px",
        "55px": "55px",
        "60px": "60px",
        "100px": "100px",
        "255px": "255px",
        "400px": "400px",
      },
      borderRadius: {
        "10px": "10px",
        "20px": "20px",
        "48px": "48px",
      },
      spacing: {
        "10px": "10px",
        "18px": "18px",
        "20.5px": "20.5px",
        "25px": "25px",
        "30px": "30px",
        "34px": "34px",
        "60px": "60px",
        "114px": "114px",
        "115px": "115px",
        "50%": "50%",
      },
      padding: {
        "15px": "15px",
        "60px": "60px",
        "75px": "75px",
        "87px": "87px",
        "100px": "100px",
        "110px": "110px",
        "140px": "140px",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(101.83deg, #7f87e0 -13.2%, #2649ca -13.19%, #6a76df 46.63%, #32b0f7 107.09%)",
        "section-1":
          "linear-gradient(rgba(238, 245, 255, 0), rgba(238, 242, 255, 1))",
        "section-6-2-background":
          "linear-gradient(348deg, #8BB68C 0.84%, #D7E5C8 99.6%)",
        "section-8-background":
          "linear-gradient(103deg, #FCF3FF 0%, #B6CFFF 100%);",
      },
      textColor: {
        "banner-notice": "rgb(0, 153, 255)",
        "banner-notice-content": "#eeeeee",
        "section-1-button": "rgb(85, 99, 114)",
        "section-3-title": "rgb(139, 149, 161)",
        "section-3-content": "rgb(36, 42, 48)",
        "section-3-link": "rgb(59, 134, 200)",
        "section-4-title": "rgb(31, 46, 61)",
        "section-4-content": "rgb(141, 150, 161)",
        "section-6-title": "#8b95a1",
        "section-6-second-title": "#1f2e3d",
        "section-6-content": "#8d96a1",
        "section-6-card-1-text-1": "#b7905b",
        "section-6-card-1-text-2": "#75490D",
        "section-6-card-2-text-1": "rgb(124, 148, 125)",
        "section-6-card-2-text-2": "rgb(49, 87, 26)",
        "section-7-security": "#8B95A1",
        "section-8-card-text-1": "#6E7ABC",
        "section-8-card-text-2": "rgb(30, 37, 107)",
      },
      colors: {
        banner: "#242a30",
        "banner-notice": "rgb(210, 234, 253)",
        "section-2-our-company": "#70afdb",
        "section-2-our-company-bg": "#f6fbfe",
        "section-2-our-company-text": "rgb(28, 89, 146)",
        "section-3": "#FAFAFA",
        "section-3-manager": "#8d96a1",
        "section-6-1-background": "#ead8bf",
        "section-7": "#F5F6F7",
        "section-9-1-background": "#D2E9FF",
        "section-9-2-background": "#DCE6FF",
      },
      boxShadow: {
        "custom-shadow":
          "rgba(0, 0, 0, 0.02) 0px 2px 6px, rgba(0, 0, 0, 0.06) 0px -1px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset",
      },
      flex: {
        "0-0-30%": "0 0 30%",
        "0-0-400px": "0 0 400px",
        "1-1-400px": "1 1 400px",
      },
      scale: {
        0.6: "0.6",
      },
      letterSpacing: {
        "section-4": "-.01em",
        "section-6-title": "-.17px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".section-1-text-gradient": {
          background:
            "linear-gradient(104.21deg, #5f79d6 -4.26%, #405ece -4.25%, #7f6cf4 105.18%)",
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    function ({ addUtilities }) {
      addUtilities({
        ".section-5-text-gradient": {
          "background-image":
            "linear-gradient(96.77deg, rgb(249, 106, 25) -0.96%, rgb(251, 96, 189) 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      });
    },
  ],
};
