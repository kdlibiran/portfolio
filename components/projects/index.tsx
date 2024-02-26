import { Project } from "../ui/project";

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="center top-0 flex flex-1 snap-center overflow-hidden bg-stone-200"
    >
      <div className="mt-32 flex w-[100vw] flex-initial flex-col items-center">
        <h1 className="text-4xl sm:text-6xl">Projects</h1>
        <div className="flex flex-1 flex-col gap-x-10 p-10 sm:flex-row sm:p-0">
          <Project
            title="FreeWall"
            body="An open source social media apps where there are different walls and you can post anything on any wall anonymously."
            image="/static/images/freewall.png"
            link="https://freewall.vercel.app/"
          />
          <Project
            title="Inventory App"
            body="A simple inventory app that can be used by everyone which keeps track of sales, low stocks, and expiry of products."
            image="/static/images/inventory.png"
            link="https://inventory-rust-two.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}
