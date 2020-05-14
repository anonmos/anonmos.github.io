import { isProduction } from './env'

interface LoggerDocument extends Document {
  LOGGING: string;
}

export default class Logger {
  static debug (logString: string) {
    if (!isProduction() || (document as LoggerDocument).LOGGING === 'DEBUG') {
      console.log(logString)
    }
  }
}
