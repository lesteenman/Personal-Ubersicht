import { defaultTheme } from "./lib/style";

const command = "bash osiris/lib/network.sh";
const refreshFrequency = 5000; // ms

const renderClass = `
  ${defaultTheme}
  left: auto;
  bottom: auto;
`;

const render = ({ output }) => <div>{`${output}`}</div>;

export { command, refreshFrequency, renderClass as className, render };
