import { rootClass, displayBlockStyle, spaceBlockStyle } from "./lib/space-style";

const focusedSpaceBlockStyle = {
  ...spaceBlockStyle,
  fontWeight: 'bold',
  background: '#775759',
}

const command = "bash osiris/lib/workspace.sh";
const refreshFrequency = false; // 1000; // ms

const render = ({ output }) => {
  if (!output) {
    return;
  }

  const split = output.split("||")
  const displays = JSON.parse(split[0])
  const spaces = JSON.parse(split[1])

  const displayId = window.location.href.split("/")[3]
  let renderingDisplay
  displays.forEach(display => {
    if (display.id == displayId) {
      renderingDisplay = display.index
    }
  })

  const displaySpaces = spaces.filter(space => space.display === renderingDisplay)

  return <div style={displayBlockStyle}>
    {displaySpaces.map((space, index) => (
      <div key={index} style={space.focused ? focusedSpaceBlockStyle : spaceBlockStyle}>
        {index + 1}
      </div>
    ))}
  </div>
}

export { command, refreshFrequency, rootClass as className, render };
