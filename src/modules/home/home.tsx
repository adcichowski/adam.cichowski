import { FullstackDeveloperWriting } from "./assets/fullstack-developer";
// import trees1 from "./assets/trees/1.png";
// import trees2 from "./assets/trees/2.png";
import { Tree } from "./components/tree";
export const Home = () => {
  return (
    <main className="relative min-h-svh flex items-center justify-center grow w-full">
      {/* Center Text */}
      <div className="z-50 absolute top-20 xl:w-1/3 w-[400px] min-w-3xs h-auto">
        <FullstackDeveloperWriting />
      </div>
      <div className="h-full w-full relative flex pointer-events-none z-40">
        {/* First Layer Tree */}
        <div className="w-full h-full -bottom-20 z-30 relative">
          <Tree
            numberLayer={0}
            className="xl:w-[420px] sm:w-[340px] w-[280px] -left-10"
          />
          <Tree
            numberLayer={0}
            className="xl:w-[410px] sm:w-[320px] w-[260px] -right-10"
          />
        </div>
        {/* Second Layer Tree */}
        <div className="w-full h-full z-20 absolute">
          <Tree
            numberLayer={1}
            className="md:w-[300px] sm:w-[200px] w-[160px] -left-30"
          />
          <Tree
            numberLayer={1}
            className="absolute md:w-[290px] sm:w-[240px] w-[180px] left-20"
          />
          <Tree
            numberLayer={1}
            className="absolute md:w-[270px] w-[200px] left-50 hidden xl:block"
          />
          <Tree
            numberLayer={0}
            className="absolute md:w-[310px] w-[250px] hidden xl:block left-90"
          />
          <Tree
            numberLayer={1}
            className="absolute md:w-[240px] w-[170px] hidden xl:block right-120"
          />
          <Tree
            numberLayer={1}
            className="absolute md:w-[220px] w-[170px] hidden md:block right-45"
          />
          <Tree
            numberLayer={0}
            className="absolute md:w-[310px] w-[210px] hidden xl:block right-75"
          />
          <Tree
            numberLayer={1}
            className="absolute md:w-[320px] w-[200px] -right-20"
          />
        </div>

        {/* Third Layer Tree */}
        <div className="w-full h-full z-10 absolute -top-10">
          <Tree
            numberLayer={2}
            className="absolute md:w-[190px] w-[150px] left-45/100"
          />
          <Tree
            numberLayer={2}
            className="absolute md:w-[250px] w-[200px] left-35/100"
          />
          <Tree
            numberLayer={2}
            className="absolute w-[240px] hidden 2xl:block left-50/100"
          />
        </div>
      </div>
    </main>
  );
};
