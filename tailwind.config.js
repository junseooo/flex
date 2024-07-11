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
        "14px": ["14px", "1"],
        "15px": ["15px", "20.25px"],
        "section-3-15px": ["15px", "19.5px"],
        "section-4-15px": ["15px", "2"],
        "17px": ["17px", "23.8px"],
        "20px": ["20px", "1.2"],
        "28px": ["28px", "33.6px"],
        "section-4-28px": ["28px", "1.2"],
        "section-5-36px": ["36px", "43.2px"],
        "40px": "40px",
        "44px": ["44px", "49px"],
        "36px": ["36px", "43.2px"],
      },
      fontWeight: {
        550: "550",
      },
      width: {
        "22px": "22px",
        "120px": "120px",
        "140px": "140px",
        "200px": "200px",
        "220px": "220px",
        "280px": "280px",
        "30%": "30%",
      },
      maxWidth: {
        "200px": "200px",
        "240px": "240px",
        "280px": "280px",
        "360px": "360px",
        "388px": "388px",
        "1110px": "1110px",
      },
      minWidth: {
        "220px": "220px",
      },
      height: {
        "38px": "38px",
        "42px": "42px",
        "45px": "45px",
        "55px": "55px",
        "60px": "60px",
        "100px": "100px",
        "255px": "255px",
        "350px": "350px",
        "400px": "400px",
        "558px": "558px",
        custom: "max(1200px, 150vh)",
        "2484px": "2484px",
      },
      borderRadius: {
        "10px": "10px",
        "20px": "20px",
        "48px": "48px",
      },
      spacing: {
        "8px": "8px",
        "10px": "10px",
        "18px": "18px",
        "20.5px": "20.5px",
        "25px": "25px",
        "30px": "30px",
        "34px": "34px",
        "40px": "40px",
        "42px": "42px",
        "60px": "60px",
        "68px": "68px",
        "100px": "100px",
        "114px": "114px",
        "115px": "115px",
        "116px": "116px",
        "20%": "20%",
        "50%": "50%",
      },
      padding: {
        "15px": "15px",
        "42px": "42px",
        "60px": "60px",
        "75px": "75px",
        "87px": "87px",
        "100px": "100px",
        "110px": "110px",
        "140px": "140px",
        "220px": "220px",
      },
      backgroundImage: {
        "button-gradient":
          "linear-gradient(101.83deg, #7f87e0 -13.2%, #2649ca -13.19%, #6a76df 46.63%, #32b0f7 107.09%)",
        "section-1":
          "linear-gradient(rgba(238, 245, 255, 0), rgba(238, 242, 255, 1))",
        "section-6-card-2-background":
          "linear-gradient(348deg, #8BB68C 0.84%, #D7E5C8 99.6%)",
        "section-8-card-background":
          "linear-gradient(103deg, #FCF3FF 0%, #B6CFFF 100%);",
        "section-10-card-1-background":
          "linear-gradient(104deg, rgb(201, 210, 102) -1.56%, rgb(198, 248, 212) 99.82%);",
        "section-11-card-3-background":
          "linear-gradient(125deg, rgb(98, 208, 229) 0.55%, rgb(97, 150, 229) 98.55%);",
        "section-12-card-1-background":
          "linear-gradient(93deg, #FDC8C8 13.58%, #EAC3D0 98.22%)",
        "section-12-card-2-background":
          "linear-gradient(123deg, #F7CCC3 14.97%, #FCD3AE 71.26%)",
        "section-13-card-1-background":
          "linear-gradient(0deg, rgba(146, 188, 104, 0.20) 0%, rgba(146, 188, 104, 0.20) 100%), linear-gradient(104deg, #D2DB69 -1.56%, #C6F8D4 99.82%)",
        "section-13-card-2-background":
          "linear-gradient(0deg, rgba(214, 155, 155, 0.20) 0%, rgba(214, 155, 155, 0.20) 100%), linear-gradient(157deg, #EBC0C0 5.46%, rgba(229, 181, 201, 0.76) 47.83%, rgba(195, 143, 190, 0.70) 83.82%)",
        "section-14-card-1-background":
          "linear-gradient(311deg, #C7E3F2 -0.03%, #D0EAE9 96.4%)",
        "section-14-card-2-background":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.03) 0%, rgba(0, 0, 0, 0.03) 100%), linear-gradient(0deg, #C8E4E3 0%, #C8E4E3 100%)",
        "section-15-card-3-background":
          "linear-gradient(106deg, #FBD3BD 1.95%, #E6D6E7 64.26%, #FFC2BE 118.65%)",
        "section-16-card-1-background":
          "linear-gradient(0deg, #F7F7FA 0%, #F7F7FA 100%, rgba(205,155,214,0.20))",
        "section-16-card-2-background":
          "linear-gradient(104deg, #C0D0FA -9.4%, #E1D5E9 68.79%, #E9C0EA 105.12%)",
        "section-17-card-3-background":
          "linear-gradient(180deg, #f2e1f2 0%, #beb4ff 100%)",
        "section-17-card-4-background":
          "linear-gradient(100.41deg,rgba(255, 249, 227, 0.2) 0%,#f7f8e4 100%)",
        "section-18-card-3-background":
          "linear-gradient(177deg, #F4F9FF -44.02%, #DCF2FA 165.08%)",
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
        "introduction-title": "#8b95a1",
        "introduction-second-title": "#1f2e3d",
        "introduction-content": "#8d96a1",
        "section-6-card-1-text-1": "#b7905b",
        "section-6-card-1-text-2": "#75490D",
        "section-6-card-2-text-1": "rgb(124, 148, 125)",
        "section-6-card-2-text-2": "rgb(49, 87, 26)",
        "section-8-card-text-1": "#6E7ABC",
        "section-8-card-text-2": "rgb(30, 37, 107)",
        "section-9-card-1-text-1": "rgb(120, 162, 203)",
        "section-9-card-1-text-2": "rgb(56, 110, 165)",
        "section-9-card-2-text-1": "rgb(140, 158, 202)",
        "section-9-card-2-text-2": "rgb(58, 84, 151)",
        "section-9-card-3-text-1": "rgb(125, 208, 123)",
        "section-9-card-3-text-2": "rgb(70, 136, 69)",
        "section-9-card-4-text-1": "rgb(214, 135, 140)",
        "section-10-card-1-text-1": "rgb(112, 159, 64)",
        "section-10-card-1-text-2": "rgb(51, 124, 22)",
        "section-10-card-2-text-1": "rgb(141, 150, 161)",
        "section-10-card-2-text-2": "rgb(36, 42, 48)",
        "section-10-card-3-text-1": "rgb(112, 159, 64)",
        "section-10-card-3-text-2": "rgb(51, 124, 22)",
        "section-11-card-1-text-1": "rgb(141, 150, 161)",
        "section-11-card-1-text-2": "rgb(36, 42, 48)",
        "section-11-card-2-text-1": "rgb(131, 161, 197)",
        "section-11-card-2-text-2": "rgb(14, 75, 117)",
        "section-11-card-3-text-1": "rgb(39, 124, 186)",
        "section-11-card-3-text-2": "rgb(14, 75, 117)",
        "section-11-card-4-text-1": "rgb(141, 150, 161)",
        "section-11-card-4-text-2": "rgb(36, 42, 48)",
        "section-12-card-1-text-1": "rgb(205, 100, 102)",
        "section-12-card-2-text-1": "rgb(223, 123, 81)",
        "section-12-card-2-text-2": "rgb(160, 73, 36)",
        "section-13-card-1-text-1": "rgb(146, 159, 72)",
        "section-13-card-1-text-2": "rgb(105, 116, 44)",
        "section-13-card-2-text-1": "rgb(109, 57, 60)",
        "section-13-card-2-text-2": "rgb(191, 128, 132)",
        "section-14-card-1-text-1": "rgb(49, 88, 125)",
        "section-14-card-1-text-2": "rgb(109, 148, 186)",
        "section-14-card-2-text-1": "rgb(74, 183, 179)",
        "section-14-card-2-text-2": "rgb(42, 103, 103)",
        "section-15-card-1-text-1": "rgb(141, 150, 161)",
        "section-15-card-1-text-2": "rgb(60, 70, 81)",
        "section-15-card-2-text-1": "rgb(192, 142, 115)",
        "section-15-card-2-text-2": "rgb(137, 67, 28)",
        "section-15-card-3-text-1": "rgb(205, 126, 93)",
        "section-15-card-3-text-2": "rgb(114, 52, 26)",
        "section-16-card-1-text-1": "rgb(141, 150, 161)",
        "section-16-card-1-text-2": "rgb(36, 42, 48)",
        "section-16-card-2-text-1": "rgb(172, 121, 195)",
        "section-16-card-2-text-2": "rgb(101, 26, 114)",
        "section-17-card-1-text-1": "rgb(141, 150, 161)",
        "section-17-card-1-text-2": "rgb(36, 42, 48)",
        "section-17-card-2-text-1": "rgb(168, 131, 197)",
        "section-17-card-3-text-1": "rgb(168, 131, 197)",
        "section-17-card-4-text-1": "rgb(141, 150, 161)",
        "section-17-card-4-text-2": "rgb(36, 42, 48)",
        "section-18-card-1-text-1": "rgb(123, 143, 217)",
        "section-18-card-1-text-2": "rgb(44, 69, 156)",
        "section-18-card-2-text-1": "rgb(141, 150, 161)",
        "section-18-card-2-text-2": "rgb(36, 42, 48)",
        "section-18-card-3-text-1": "rgb(131, 161, 197)",
        "section-18-card-3-text-2": "rgb(14, 75, 117)",
        "section-19-part-2-title": "#cdd2d6",
      },
      colors: {
        banner: "#242a30",
        "banner-notice": "rgb(210, 234, 253)",
        "section-2-our-company": "#70afdb",
        "section-2-our-company-bg": "#f6fbfe",
        "section-2-our-company-text": "rgb(28, 89, 146)",
        "section-3": "#FAFAFA",
        "section-3-manager": "#8d96a1",
        "section-6-card-1-background": "#ead8bf",
        "section-7": "#F5F6F7",
        "section-9-card-1-background": "rgb(210, 233, 255)",
        "section-9-card-2-background": "rgb(220, 230, 255)",
        "section-9-card-3-background": "rgb(217, 255, 212)",
        "section-9-card-4-background": "rgb(255, 226, 228)",
        "section-10-card-2-background": "#f8f9fa",
        "section-10-card-3-background": "rgb(228, 250, 183)",
        "section-11-card-1-background": "#f8f9fa",
        "section-11-card-2-background": "rgb(222, 240, 250)",
        "section-11-card-4-background": "#f8f9fa",
        "section-15-card-1-background": "rgba(0, 0, 0, 0.03)",
        "section-15-card-2-background": "#F7E5DC",
        "section-17-card-1-background": "#f8f9fa",
        "section-17-card-2-background": "#E9EBFF",
        "section-18-card-1-background": "#E9EFFF",
        "section-18-card-2-background": "#F7F7FA",
        "section-19-part-1-0-background": "rgb(255, 255, 255)",
        "section-19-part-1-1-background": "rgb(224, 224, 224)",
        "section-19-part-1-2-background": "rgb(158, 157, 159)",
        "section-19-part-1-3-background": "rgb(91, 91, 94)",
        "section-19-part-1-4-background": "rgb(25, 24, 29)",
        "section-19-part-1-5-background": "rgb(13, 12, 17)",
        "section-19-part-2-background": "#0D0C11",
        "section-19-part-2-store": "#242a30",
      },
      boxShadow: {
        "custom-shadow":
          "rgba(0, 0, 0, 0.02) 0px 2px 6px, rgba(0, 0, 0, 0.06) 0px -1px 0px inset, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px inset",
      },
      flex: {
        "0-0-30%": "0 0 30%",
        "0-0-400px": "0 0 400px",
        "1-1-400px": "1 1 400px",
        "1-1-0%": "1 1 0%",
      },
      scale: {
        0.6: "0.6",
      },
      letterSpacing: {
        "section-4": "-.01em",
        "section-6-title": "-.17px",
      },
      translate: {
        "10px": "10px",
        "20px": "20px",
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
    function ({ addUtilities }) {
      addUtilities({
        ".section-9-card-4-text-2-gradient": {
          "background-image":
            "linear-gradient(96.77deg, rgb(249, 106, 25) -0.96%, rgb(251, 96, 189) 100%)",
          "-webkit-background-clip": "text",
          "background-clip": "text",
          color: "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".section-17-card-3-text-2-gradient": {
          "background-image":
            "linear-gradient(96.77deg, rgb(157, 60, 255) -0.96%, rgb(96, 102, 255) 100%)",
          "background-clip": "text",
          "-webkit-text-fill-color": "text",
          color: "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".section-17-card-2-text-2-gradient": {
          "background-image":
            "linear-gradient(96.77deg, rgb(157, 60, 255) -0.96%, rgb(96, 102, 255) 100%)",
          "background-clip": "text",
          "-webkit-text-fill-color": "text",
          color: "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".section-19-text-gradient": {
          "background-image":
            "linear-gradient(97deg, rgb(9, 205, 7) 0%, rgb(11, 196, 9) 14%, rgb(6, 200, 187) 88%)",
          "background-clip": "text",
          "-webkit-text-fill-color": "text",
          color: "transparent",
        },
      });
    },
    function ({ addUtilities }) {
      addUtilities({
        ".section-19-part-2-text-gradient": {
          "background-image":
            "linear-gradient(97deg, rgb(9, 205, 7) 0%, rgb(11, 196, 9) 14%, rgb(6, 200, 187) 88%)",
          "background-clip": "text",
          "-webkit-text-fill-color": "text",
          color: "transparent",
        },
      });
    },
  ],
};
