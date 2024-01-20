import FadeUpContainer from "@/components/common/FadeUpContainer";
import Hobby from "@/components/common/Hobby";

export default function Home() {
  return (
    <FadeUpContainer>
      <div className="hidden headings lg:block">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="128"
          height="128"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
          >
            <path
              stroke-dasharray="48"
              stroke-dashoffset="48"
              d="M17 9v9a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V9z"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.6s"
                values="48;0"
              />
            </path>
            <path
              stroke-dasharray="14"
              stroke-dashoffset="14"
              d="M17 14H20C20.55 14 21 13.55 21 13V10C21 9.45 20.55 9 20 9H17"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                begin="0.6s"
                dur="0.2s"
                values="14;28"
              />
            </path>
          </g>
          <mask id="lineMdCoffeeLoop0">
            <path
              fill="none"
              stroke="#fff"
              stroke-width="2"
              d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4"
            >
              <animateMotion
                calcMode="linear"
                dur="3s"
                path="M0 0v-8"
                repeatCount="indefinite"
              />
            </path>
          </mask>
          <rect
            width="24"
            height="0"
            y="7"
            fill="currentColor"
            mask="url(#lineMdCoffeeLoop0)"
          >
            <animate
              fill="freeze"
              attributeName="y"
              begin="0.8s"
              dur="0.6s"
              values="7;2"
            />
            <animate
              fill="freeze"
              attributeName="height"
              begin="0.8s"
              dur="0.6s"
              values="0;5"
            />
          </rect>
        </svg>
      </div>
      <div className="mb-4 space-y-2">
        <h1 className="headings text-2xl">
          Hi, Folks<span className="wave ml-2">👋</span>
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M71.68 97.22L34.74 128l36.94 30.78a12 12 0 1 1-15.36 18.44l-48-40a12 12 0 0 1 0-18.44l48-40a12 12 0 0 1 15.36 18.44m176 21.56l-48-40a12 12 0 1 0-15.36 18.44L221.26 128l-36.94 30.78a12 12 0 1 0 15.36 18.44l48-40a12 12 0 0 0 0-18.44M164.1 28.72a12 12 0 0 0-15.38 7.18l-64 176a12 12 0 0 0 7.18 15.37a11.79 11.79 0 0 0 4.1.73a12 12 0 0 0 11.28-7.9l64-176a12 12 0 0 0-7.18-15.38"
              />
            </svg>
            Front End Develover
          </div>
          <div className="flex items-center gap-2 font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <g
                fill="none"
                stroke="currentColor"
                stroke-linejoin="round"
                stroke-width="2"
              >
                <path d="M13 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0Z" />
                <path d="M17.5 9.5c0 3.038-2 6.5-5.5 10.5c-3.5-4-5.5-7.462-5.5-10.5a5.5 5.5 0 1 1 11 0Z" />
              </g>
            </svg>
            Indonesia
          </div>
        </div>
      </div>
      <div className="mb-4 leading-8 space-y-4">
        <p>
          Hi, my name is Adi Muhammad Syifai, also known as Adi. I have a love
          for web design and web styling, I am able to implement designs and
          build consistent and responsive web interfaces. I enjoy being creative
          in combining attractive visual components with smooth interactions and
          creating attractive, modern and functional web displays to increase
          user satisfaction.
        </p>
        <p>
          Creativity knows no boundaries, and thats how I found joy in
          wandering the world of design and coding. I believe that every project
          is a stage for voicing extraordinary ideas and crafting unforgettable
          works.
        </p>
      </div>
      <h2 className="mb-4 headings text-2xl">
        Hobbies<span className="wave ml-2">🤞</span>
      </h2>
      <Hobby />
    </FadeUpContainer>
  );
}
