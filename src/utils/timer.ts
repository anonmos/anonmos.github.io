export default class Timer {
    private start: number

    constructor () {
      this.start = Date.now()
    }

    public getTimeElapsedinMs (): string {
      return `${Intl.NumberFormat().format(Date.now() - this.start)} ms`
    }

    public reset (): Timer {
      this.start = Date.now()
      return this
    }
}
