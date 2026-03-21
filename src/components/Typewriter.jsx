import { useState, useEffect } from 'react'

const TypeWriter = ({ 
  text, 
  speed = 100, 
  delay = 0,
  className = ""
}) => {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, currentIndex === 0 ? delay : speed)
      
      return () => clearTimeout(timeout)
    } else {
      setIsComplete(true)
    }
  }, [currentIndex, text, speed, delay])
  
  return (
    <span className={className}>
      {displayedText}
      {!isComplete && (
        <span className="animate-pulse text-primary">|</span>
      )}
    </span>
  )
}

export default TypeWriter