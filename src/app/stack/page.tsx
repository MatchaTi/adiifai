import FadeUpContainer from "@/components/common/FadeUpContainer";
import TechStack from "@/components/common/TechStack";

export const metadata = {
  title: "Stack | AdiIfai",
  description: "Personal Website Portfolio",
};

export default function Stack() {
  return (
    <FadeUpContainer>
      <div className="hidden headings lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"
          />
        </svg>
      </div>
      <div className="mb-4 space-y-2">
        <h1 className="headings text-2xl">
          Software I use, and the tech stack that I
          use<span className="wave ml-2"></span>
        </h1>
      </div>
      <div className="mb-4 leading-8">
        <p>
          I am always eager to adapt to new technologies and ready to face new
          challenges in future projects. I believe that the combination of
          skills and tools that I have and master can make a meaningful
          contribution to achieving project goals and help create innovative and
          effective solutions.
        </p>
      </div>
      <TechStack />
    </FadeUpContainer>
  );
}
