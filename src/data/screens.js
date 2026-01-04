// Screen categories and data
export const screens = {
  popularThemes: [
    {
      id: 6994,
      slug: 'low-on-10-year-average-earnings',
      title: 'Low on 10 year average earnings',
      description: 'Graham liked to value stocks based on average earnings of multiple years. This screen uses 10 year average earnings.'
    },
    {
      id: 6995,
      slug: 'companies-creating-new-high',
      title: 'Companies creating new high',
      description: 'Stocks that are making new 52-week highs.'
    },
    {
      id: 6996,
      slug: 'debt-reduction',
      title: 'Debt reduction',
      description: 'Companies that have been consistently reducing their debt.'
    },
    {
      id: 6997,
      slug: 'fii-buying',
      title: 'FII Buying',
      description: 'Companies where Foreign Institutional Investors are increasing their stake.'
    },
    {
      id: 6998,
      slug: 'capacity-expansion',
      title: 'Capacity expansion',
      description: 'Companies that are expanding their production capacity.'
    },
    {
      id: 6999,
      slug: 'growth-without-dilution',
      title: 'Growth without dilution',
      description: 'Companies growing without diluting shareholder equity.'
    }
  ],
  popularFormulas: [
    {
      id: 7000,
      slug: 'piotroski-scan',
      title: 'Piotroski Scan',
      description: 'Based on Piotroski F-Score methodology for value investing.'
    },
    {
      id: 7001,
      slug: 'magic-formula',
      title: 'Magic Formula',
      description: 'Joel Greenblatt\'s magic formula for finding good companies at good prices.'
    },
    {
      id: 7002,
      slug: 'coffee-can-portfolio',
      title: 'Coffee Can Portfolio',
      description: 'Long-term buy and hold strategy for wealth creation.'
    }
  ],
  priceVolume: [
    {
      id: 7003,
      slug: 'darvas-scan',
      title: 'Darvas Scan',
      description: 'Based on Nicolas Darvas box theory for momentum trading.'
    },
    {
      id: 7004,
      slug: 'price-volume-action',
      title: 'Price Volume Action',
      description: 'Stocks showing strong price and volume momentum.'
    },
    {
      id: 7005,
      slug: 'golden-crossover',
      title: 'Golden Crossover',
      description: 'Stocks where 50-day moving average crosses above 200-day moving average.'
    },
    {
      id: 7006,
      slug: 'bearish-crossovers',
      title: 'Bearish Crossovers',
      description: 'Stocks showing bearish technical signals.'
    },
    {
      id: 7007,
      slug: 'rsi-oversold-stocks',
      title: 'RSI - Oversold Stocks',
      description: 'Stocks with RSI below 30 indicating oversold conditions.'
    }
  ],
  quarterlyResults: [
    {
      id: 7008,
      slug: 'the-bull-cartel',
      title: 'The Bull Cartel',
      description: 'Companies with strong quarterly results.'
    },
    {
      id: 7009,
      slug: 'all-latest-qtr-results',
      title: 'All Latest QTR Results (Date Wise)',
      description: 'All companies that have declared quarterly results, sorted by date.'
    },
    {
      id: 7010,
      slug: 'quarterly-growers',
      title: 'Quarterly Growers',
      description: 'Companies showing consistent quarterly growth.'
    },
    {
      id: 7011,
      slug: 'best-of-latest-quarter',
      title: 'Best of latest quarter',
      description: 'Top performers in the latest quarter.'
    }
  ],
  valuationScreens: [
    {
      id: 7012,
      slug: 'highest-dividend-yield-shares',
      title: 'Highest Dividend Yield Shares',
      description: 'Companies offering the highest dividend yields.'
    },
    {
      id: 7013,
      slug: 'high-ratio-market-value-investments',
      title: 'High Ratio of Market Value of Investments',
      description: 'Companies with significant investment holdings.'
    },
    {
      id: 7014,
      slug: 'loss-to-profit-companies',
      title: 'Loss to Profit Companies',
      description: 'Companies that have turned from loss to profit.'
    },
    {
      id: 7015,
      slug: 'sales-value-over-5-times-price',
      title: 'Sales value over 5 times price',
      description: 'Companies where sales are significantly higher than market cap.'
    },
    {
      id: 7016,
      slug: 'fcf-yield',
      title: 'FCF yield',
      description: 'Companies with high free cash flow yield.'
    }
  ]
}

// Screen results data
export const screenResults = [
  {
    id: 6994,
    title: 'Low on 10 year average earnings',
    description: 'Graham liked to value stocks based on average earnings of multiple years. This screen uses 10 year average earnings.',
    author: 'Pratyush',
    query: `Market Capitalization / Average Earnings 10Year < 15 AND
Average dividend payout 3years > 20 AND
Debt to equity < .2 AND
Average return on capital employed 7Years > 20`,
    results: [
      {
        name: 'Coal India',
        symbol: 'COALINDIA',
        cmp: '427.90',
        pe: '8.45',
        marketCap: '263703.15',
        divYield: '5.2',
        npQtr: '8500.25',
        profitVar: '12.5',
        salesQtr: '35000.50',
        salesVar: '8.3',
        roce: '45.2',
        avgPAT: '12000.00',
        avgDivPayout: '45.5'
      },
      {
        name: 'NMDC',
        symbol: 'NMDC',
        cmp: '234.50',
        pe: '9.12',
        marketCap: '67890.25',
        divYield: '4.8',
        npQtr: '1200.50',
        profitVar: '15.2',
        salesQtr: '4500.75',
        salesVar: '10.5',
        roce: '38.5',
        avgPAT: '3500.00',
        avgDivPayout: '42.3'
      },
      {
        name: 'Taparia Tools',
        symbol: 'TAPARIA',
        cmp: '156.80',
        pe: '7.89',
        marketCap: '1234.56',
        divYield: '3.5',
        npQtr: '45.20',
        profitVar: '8.7',
        salesQtr: '234.50',
        salesVar: '5.2',
        roce: '28.9',
        avgPAT: '120.00',
        avgDivPayout: '35.2'
      },
      {
        name: 'Manali Petrochem',
        symbol: 'MANALI',
        cmp: '89.45',
        pe: '6.23',
        marketCap: '567.89',
        divYield: '4.2',
        npQtr: '12.30',
        profitVar: '6.5',
        salesQtr: '145.60',
        salesVar: '4.8',
        roce: '22.5',
        avgPAT: '45.00',
        avgDivPayout: '28.7'
      },
      {
        name: 'Andhra Petrochem',
        symbol: 'ANDHRAPET',
        cmp: '67.20',
        pe: '5.98',
        marketCap: '345.67',
        divYield: '3.8',
        npQtr: '8.90',
        profitVar: '5.2',
        salesQtr: '98.40',
        salesVar: '3.5',
        roce: '18.9',
        avgPAT: '28.00',
        avgDivPayout: '25.4'
      }
    ]
  }
]

// Sectors for browse section
export const sectors = [
  'Aerospace & Defense',
  'Agricultural Food & other Products',
  'Automobiles',
  'Banks',
  'Beverages',
  'Capital Markets',
  'Chemicals & Petrochemicals',
  'Construction',
  'Diversified FMCG',
  'Electrical Equipment',
  'Finance',
  'Healthcare Services',
  'IT - Software',
  'Media',
  'Oil',
  'Pharmaceuticals & Biotechnology',
  'Power',
  'Realty',
  'Telecom - Services',
  'Transport Infrastructure'
]

