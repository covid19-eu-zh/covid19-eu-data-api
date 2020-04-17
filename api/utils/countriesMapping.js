const countriesMapping = {
  at: 'Austria',
  ch: 'Switzerland',
  cz: 'Czech Republic',
  de: 'Germany',
  ecdc: '??',
  england: 'England',
  fr: 'France',
  hu: 'Hungary',
  ie: 'Ireland',
  it: 'Italy',
  nl: 'Netherlands',
  no: 'Norway',
  pl: 'Poland',
  scotland: 'Scotland',
  se: 'Sweden',
  si: '	Slovenia',
  uk: 'United Kindom',
  wales: 'Wales'
}

module.exports = function getCountryName (initial) {
  if (!countriesMapping(initial)) return 'No country name in the mapping'

  return countriesMapping(initial)
}
