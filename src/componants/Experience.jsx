import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Experiences</h2>
      <div>
        {EXPERIENCES.map((experience, index) => (
          <div key={index} className="flex flex-wrap mb-8 lg: justify-center">
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold ">{experience.role} -{" "}
                <span className="text-sm text-neutral-400">{experience.company}
                </span>
              </h6>
              <p className="mb-4 text-neutral-400">{experience.description}</p>
              {experience.technologies.map((tech, index) => (
                <span key={index} className="mr-2 text-sm bg-neutral-400 mt-4 rounded px-2 py-1 font-medium text-purple-800">{tech}</span>
              ))}
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default Experience;
