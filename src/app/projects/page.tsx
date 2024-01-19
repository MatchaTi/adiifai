import ListProject from "@/components/common/ListProject";

export default function Projects() {
  return (
    <main>
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
            <path d="M16 18a4 4 0 0 0-8 0" />
            <circle cx="12" cy="11" r="3" />
            <rect width="18" height="18" x="3" y="4" rx="2" />
            <path d="M8 2v2m8-2v2" />
          </g>
        </svg>
      </div>
      <div className="mb-4 space-y-2">
        <h1 className="headings text-2xl">
          Projects<span className="wave ml-2">👏</span>
        </h1>
      </div>
      <div className="mb-4 leading-8">
        <p>
          I’m always open to collaborate on a project or hear about an
          opportunity!
        </p>
      </div>
      <ListProject />
    </main>
  );
}
