export default Modal = () => {
  const instructionsStyle = {
    'position': 'absolute',
    'zIndex': 99,
    'backgroundColor': 'white',
    'width': 400,
    'height': 300,
    'left': `${size.w - 200}`,
    'right': `${size.h - 200}`
  }
  const instructions = (
    <div style={instructionsStyle}>
      <ul>
        <li>Number keys 1 - 9 increase speed</li>
        <li>+ / - adjust line size</li>
        <li>Arrow keys change direction</li>
      </ul>
      <p>Good luck.</p>
    </div>
  )
}
