import { HeroParallax } from "../ui/hero-parallax";

export default function ProjectsPage() {
  const products = [
    {
      title: "SariTracker",
      link: "https://sari-tracker.vercel.app",
      thumbnail: "/static/images/saritracker.png",
    },
    {
      title: "FreeWall",
      link: "https://freewall.vercel.app",
      thumbnail: "/static/images/freewall.png",
    },
    {
      title: "Food Price Predictor",
      link: "https://github.com/kdlibiran/foodpricepredictor",
      thumbnail: "/static/images/fpp.png",
    },
    {
      title: "SariTracker",
      link: "https://sari-tracker.vercel.app",
      thumbnail: "/static/images/saritracker.png",
    },
    {
      title: "FreeWall",
      link: "https://freewall.vercel.app",
      thumbnail: "/static/images/freewall.png",
    },
    {
      title: "Food Price Predictor",
      link: "https://github.com/kdlibiran/foodpricepredictor",
      thumbnail: "/static/images/fpp.png",
    },
  ];

  return (
    <div id="projects">
      <HeroParallax products={products} />
    </div>
  );
}
