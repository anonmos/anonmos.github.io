export function stripQuotes (data: string): string {
  let rval = data

  if (rval[0] === '"') {
    rval = rval.slice(1, rval.length - 1)
  }

  return rval
}

// A .split functional equivalent that handles commas within quotations
export function extractTuples (row: string, parseEOL = false, shouldStripQuotes = true, trim = true): string[] {
  const rval = []
  let beginIndex = -1
  let endIndex = -1
  let marker = ','

  for (let i = 0; i < row.length; ++i) {
    if (parseEOL && marker !== '"' && row[i] === '\n') {
      endIndex = row[i - 1] === '\r' ? i - 1 : i
      rval.push(row.slice(beginIndex + 1, endIndex))

      beginIndex = i
      endIndex = -1
    } else if (row[i] === '"' && marker === ',') {
      marker = '"'
    } else if (row[i] === marker) {
      if (marker === '"') {
        marker = ','
      } else {
        endIndex = i
        rval.push(row.slice(beginIndex + 1, endIndex))

        beginIndex = endIndex
        endIndex = -1
      }
    }
  }
  let finalVal = row.slice(beginIndex + 1, row.length)

  if (shouldStripQuotes) {
    finalVal = stripQuotes(finalVal)
  }

  if (trim) {
    finalVal = finalVal.trim()
  }

  rval.push(finalVal)

  return rval
}
