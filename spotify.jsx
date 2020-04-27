import { defaultTheme } from "./lib/style";

const command = "bash osiris/lib/spotify.sh";

const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
  font-weight: bold;
  margin-right: calc(13ch + 100px);
`;

const render = ({ output }) => {
  if (!output) return null;

  let [ name, artists, state ] = output.split('||');
  console.log(output, output.split('||'))
  console.log(state, name, artists)
  if (!name || !artists) return null;

  console.log('trim name?', name, name.length);
  if (name.length > 20) name = `${name.slice(0, 17)}...`;
  if (artists.length > 20) artists = `${artists.slice(0, 17)}...`;

  return <div>{`${name} - ${artists} (${state.trim()})`}</div>;
};

export { command, refreshFrequency, renderClass as className, render };
