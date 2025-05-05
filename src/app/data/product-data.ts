import { Product } from '../models/product.model';

export const PRODUCTS: Product[] = [
  {
    id: 'A',
    description: 'Agency-Hired Migrant Workers',
    seaCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 10,000.00' },
      { coverage: '*Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.' },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ],
    landCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 10,000.00' },
      { coverage: ' *Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.' },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ]
  },
  {
    id: 'B',
    description: 'Rehires and Direct Hires Migrant Workers',
    seaCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 15,000.00' },
      { coverage: '*Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.', indent: true  },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ],
    landCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 15,000.00' },
      { coverage: '*Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.' , indent: true },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ]
  },
  {
    id: 'C',
    description: 'OWWA Family Shield',
    seaCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 55,000.00' },
      { coverage: 'Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.' },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ],
    landCoverages: [
      { coverage: 'Accidental Death (Loss of Life)', amount: 'USD 66,000.00' },
      { coverage: 'Natural Death', amount: 'USD 10,000.00', note: 'Underwritten by First Life Financial Company Inc.' },
      { coverage: 'Permanent Total Disablement', amount: 'USD 7,500.00' },
      { coverage: 'Repatriation Cost (Death and/or Termination of Employment)', amount: 'Actual Cost' },
      { coverage: 'Subsistence Allowance', amount: 'USD 100.00 per month, max of (6) months' },
      { coverage: 'Money claims arising from the Employer\'s liability', amount: 'USD 1,000.00 per month, max of (6) months' },
      { coverage: 'Compassionate Visit', amount: 'Actual Cost' },
      { coverage: 'Medical Evacuation', amount: 'Actual Cost' },
      { coverage: 'Medical Repatriation', amount: 'Actual Cost' }
    ]
  },
]
