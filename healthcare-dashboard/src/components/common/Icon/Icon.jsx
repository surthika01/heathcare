import "./Icon.css"

const Icon = ({ name, size = 20, className = "", ...props }) => {
  return (
    <span className={`icon ${className}`} {...props}>
      {/* Icon implementation would go here */}
    </span>
  )
}

export default Icon
