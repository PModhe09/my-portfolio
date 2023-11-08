
const TechCard = (tech) => {
  return (
<div className="shadow-lg rounded-lg p-4 m-4 w-64 relative group transform transition-transform duration-300 hover:scale-150 ">
  <div className="text-center absolute inset-0 rounded-full">
    <div className="w-16 h-16 mx-auto mb-2 ">
      <img src={tech.icon} alt={tech.name} className="w-16 h-16 rounded-full shadow-md" />
    </div>
    <h2 className="text-xl font-semibold">{tech.name}</h2>
  </div>
</div>

  )
}

export default TechCard
