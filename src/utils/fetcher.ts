import JohnsHopkinsTimeSeries, { MODE as JOHNS_HOPKINS_MODES } from '@/classes/data-retrievers/johns-hopkins-timeseries'
import UsaFactsTimeSeries, { MODE as USA_FACTS_MODES } from '@/classes/data-retrievers/usa-facts-timeseries'
import COVIDTimeSeries from '@/classes/data-retrievers/covid-timeseries'

export default class Fetcher {
  private johnsHopkinsCurrentCases = new JohnsHopkinsTimeSeries(JOHNS_HOPKINS_MODES.CURRENT_CASES)
  private johnsHopkinsDeaths = new JohnsHopkinsTimeSeries(JOHNS_HOPKINS_MODES.DEATHS)

  private usaFactsCurrentCases = new UsaFactsTimeSeries(USA_FACTS_MODES.CURRENT_CASES)
  private usaFactsDeaths = new UsaFactsTimeSeries(USA_FACTS_MODES.DEATHS)

  async fetchAll (): Promise<{currentCases: COVIDTimeSeries; deaths: COVIDTimeSeries}> {
    await Promise.all([this.johnsHopkinsCurrentCases.init(), this.johnsHopkinsDeaths.init(), this.usaFactsCurrentCases.init(), this.usaFactsDeaths.init()])

    // Combine USA Facts into Johns Hopkins for now (currently what they do on their own site for county-level breakdowns in the US)
    this.johnsHopkinsCurrentCases.getCountry('US').stateProvinces = this.usaFactsCurrentCases.getCountry('US').stateProvinces
    this.johnsHopkinsDeaths.getCountry('US').stateProvinces = this.usaFactsDeaths.getCountry('US').stateProvinces

    return { currentCases: this.johnsHopkinsCurrentCases, deaths: this.johnsHopkinsDeaths }
  }
}
