import JohnsHopkinsTimeSeries, { MODE as JOHNS_HOPKINS_MODES, SOURCE_DOMAIN as JOHNS_HOPKINS_SOURCE_DOMAINS } from '@/classes/data-retrievers/johns-hopkins-timeseries'
import UsaFactsTimeSeries, { MODE as USA_FACTS_MODES, SOURCE_DOMAIN as USA_FACTS_SOURCE_DOMAINS } from '@/classes/data-retrievers/usa-facts-timeseries'
import COVIDTimeSeries from '@/classes/data-retrievers/covid-timeseries'
import { isProduction } from './env'
import Timer from './timer'
import Logger from './logger'

export default class Fetcher {
  private johnsHopkinsCurrentCases = new JohnsHopkinsTimeSeries(JOHNS_HOPKINS_MODES.CURRENT_CASES, isProduction() ? JOHNS_HOPKINS_SOURCE_DOMAINS.PROD : JOHNS_HOPKINS_SOURCE_DOMAINS.DEV)
  private johnsHopkinsDeaths = new JohnsHopkinsTimeSeries(JOHNS_HOPKINS_MODES.DEATHS, isProduction() ? JOHNS_HOPKINS_SOURCE_DOMAINS.PROD : JOHNS_HOPKINS_SOURCE_DOMAINS.DEV)

  private usaFactsCurrentCases = new UsaFactsTimeSeries(USA_FACTS_MODES.CURRENT_CASES, isProduction() ? USA_FACTS_SOURCE_DOMAINS.PROD : USA_FACTS_SOURCE_DOMAINS.DEV)
  private usaFactsDeaths = new UsaFactsTimeSeries(USA_FACTS_MODES.DEATHS, isProduction() ? USA_FACTS_SOURCE_DOMAINS.PROD : USA_FACTS_SOURCE_DOMAINS.DEV)

  async fetchAll (): Promise<{currentCases: COVIDTimeSeries; deaths: COVIDTimeSeries}> {
    const timer = new Timer()
    await Promise.all([this.johnsHopkinsCurrentCases.init('Johns Hopkins Current Cases'), this.johnsHopkinsDeaths.init('Johns Hopkins Deaths'), this.usaFactsCurrentCases.init('USA Facts Current Cases'), this.usaFactsDeaths.init('USA Facts Deaths')])

    // Combine USA Facts into Johns Hopkins for now (currently what they do on their own site for county-level breakdowns in the US)
    this.johnsHopkinsCurrentCases.getCountry('US').stateProvinces = this.usaFactsCurrentCases.getCountry('US').stateProvinces
    this.johnsHopkinsDeaths.getCountry('US').stateProvinces = this.usaFactsDeaths.getCountry('US').stateProvinces

    Logger.debug(`Total fetch/parse time: ${timer.getTimeElapsedinMs()}`)
    return { currentCases: this.johnsHopkinsCurrentCases, deaths: this.johnsHopkinsDeaths }
  }
}
