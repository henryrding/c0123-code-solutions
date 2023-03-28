function CustomButtonClass({ text, color }) {
  return (
    <button className={color}>
      {text}
    </button>
  )
}

function CustomButtonStyle({ text, color }) {
  return (
    <button style={{ "background-color": color }}>
      {text}
    </button>
  )
}

export {CustomButtonClass, CustomButtonStyle}
