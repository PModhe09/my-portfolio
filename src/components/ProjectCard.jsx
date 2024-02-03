const ProjectCard = ({ project }) => {
  

  return (
    <div className="bg-white rounded-lg shadow-md p-2">
        <>
          <h2 className="text-2xl font-bold mb-2 text-center blue-text-gradient">{project.name}</h2>
          <img src={project.image} alt={project.name} className="w-full h-48 object-cover rounded-lg mb-2 " />
          <p className="text-gray-600 text-center">{project.description}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <p
                key={`${tag.name}-${tag.name}`}
                className={`text-sm ${tag.color} bg-gray-200 px-2 py-1 rounded font-bold`}
              >
                #{tag.name}
              </p>
            ))}
            
          </div>
        </>
      )}
    </div>
  );
};

export default ProjectCard;