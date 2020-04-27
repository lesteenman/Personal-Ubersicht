const font = "SF Mono, Menlo, Monospace";
const fontSize = "11px";
const fontStyle = "regular";
const lineHeight = "24px";
const borderRadius = "3px";

const background = "#2E3440";
const foreground = "#D8DEE9";
const color = "#fff";
const gap = "10";

const rootClass = `
  position: absolute,
  top: ${gap}px,
  right: ${gap}px,
  bottom: ${gap}px,
  left: ${gap}px,
`;

const displayBlockStyle = {
    zIndex: 100,
    font: `${fontSize} ${font}`,
    fontStyle: fontStyle,
    color: color,
    lineHeight: lineHeight,
    backgroundColor: background,
    opacity: 1,
    display: 'flex',
    flexDirection: 'row',

    padding: '0.5ch 0.5ch',
    margin: `${gap}px`,

    borderTopLeftRadius: borderRadius,
    borderTopRightRadius: borderRadius,
    borderBottomRightRadius: borderRadius,
    borderBottomLeftRadius: borderRadius,
    boxShadow: '0px 1px 1px 1px rgba(0,0,0,0.15)',
};

const spaceBlockStyle = {
    borderRadius: '3px',
    padding: '0 1.5ch',
    margin: '0.1ch'
};

export { rootClass, displayBlockStyle, spaceBlockStyle };
