import ITypes from '../interfaces/logInterface.js';
import "../config/setup.js"

const types: ITypes = {
  Middleware: 'magenta',
  Controller: 'green',
  Repository: 'blue',
  Server: 'yellow',
  Service: 'cyan',
  Error: 'red',
};
const AppLog = (
  type:
    | 'Middleware'
    | 'Controller'
    | 'Repository'
    | 'Server'
    | 'Service'
    | 'Error',
  text: string,
) => {
    console.log((`[${type}] ${text}`));
};

export default AppLog;