function Button(buttonProps) {
	const activeColor = {
		color: buttonProps.active ? '#000' : 'var(--color-text)',
		backgroundColor: buttonProps.active ? 'var(--color-text)' : 'transparent'
	}

	return (
		<button 
      className="hero-button"
      aria-label={buttonProps.aria}
      style={activeColor}
      onClick={buttonProps.setactive}
      >
			<i className={buttonProps.label} style={activeColor}></i>
		</button>
	)
}

export default Button
