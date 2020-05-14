export interface TimeseriesDocument extends Document {
    ENV: string;
}

export function isProduction (): boolean {
  return (document as TimeseriesDocument).ENV === 'production'
}
