const SkillCard = ({ category, skills }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
      <h3 className="text-2xl font-bold mb-6 text-center">{category}</h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {skills.map((skill, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center gap-2 p-3 rounded-lg bg-base-200 hover:bg-primary/10 hover:scale-105 transition-all duration-200 cursor-default"
          >
            <span className="text-3xl text-primary">{skill.icon}</span>
            <span className="text-xs font-medium text-center leading-tight">
              {skill.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;