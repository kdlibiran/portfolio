import { Project } from "../ui/project";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="center top-0 flex flex-1 snap-center overflow-hidden bg-stone-200 pt-[72px] sm:h-[100vh]"
    >
      <div className="flex w-[100vw] flex-initial flex-col items-center sm:mt-10">
        <h1 className="text-4xl sm:text-6xl">Projects</h1>
        <div className="-mt-10 flex flex-1 flex-col justify-center px-10 sm:flex-row sm:gap-x-10 sm:px-0">
          <Carousel className="max-w-screen-md">
            <CarouselContent>
              <CarouselItem>
                <Project
                  title="FreeWall"
                  body="An open source social media apps where there are different walls and you can post anything on any wall anonymously."
                  image="/static/images/freewall.png"
                  link="https://freewall.vercel.app/"
                />
              </CarouselItem>
              <CarouselItem>
                <Project
                  title="SariTracker"
                  body="A web app that serves as an inventory management system for store owners. It also has a feature that lets consumers conveniently view the inventory of nearby sari-sari stores"
                  image="/static/images/saritracker.png"
                  link="https://sari-tracker.vercel.app"
                />
              </CarouselItem>
              <CarouselItem>
                <Project
                  title="Food Price Predictor"
                  body="A web app that utilizes a regression model which predicts the prices of different kinds of food in different places in the Philippines."
                  image="/static/images/fpp.png"
                  link="https://github.com/kdlibiran/foodpricepredictor"
                />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-black text-white" />
            <CarouselNext className="bg-black text-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
