const SkillCard = ({ category, skills }) => {
  return (
    <div className="card bg-base-100 shadow-xl p-6">
      <h3 className="text-2xl font-bold mb-6">{category}</h3>
      
      <div className="space-y-4">
        {skills.map((skill, i) => (
          <div key={i}>
            <div className="flex justify-between mb-2">
              <span className="flex items-center gap-2">
                <span className="text-2xl">{skill.icon}</span>
                <span className="font-semibold">{skill.name}</span>
              </span>
              <span className="text-primary">{skill.level}%</span>
            </div>
            
            {/* Progress bar */}
            <progress 
              className="progress progress-primary w-full" 
              value={skill.level} 
              max="100"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
export default SkillCard