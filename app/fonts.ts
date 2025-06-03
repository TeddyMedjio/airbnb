import localFont from "next/font/local";
export const myLocalFont = localFont({
  src: [
    {
      path: "./fonts/Nunito-regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Nunito-Medium.ttf",
      weight: "500",
      style: "medium",
    },
    {
      path: "./fonts/Nunito-SemiBold.ttf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "./fonts/Nunito-Bold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});
