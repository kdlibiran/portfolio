import { Project } from "../ui/project";

export default function ProjectsPage() {
  return (
    <div
      id="projects"
      className="center top-0 flex h-[100vh] flex-1 snap-center overflow-hidden bg-stone-200"
    >
      <div className="mt-32 flex w-[100vw] flex-initial flex-col items-center">
        <h1 className="text-4xl sm:text-6xl">Projects</h1>
        <div className="flex flex-1 flex-row gap-10">
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
