export const PAYMENT_CONFIG = {
  url: 'https://test.pesopay.com/b2cDemo/eng/payment/payForm.jsp',
  merchantId: '18067292',
  currCode: '608',
  payType: 'N',
  lang: 'E',
  mpsMode: 'NIL',
  payMethod: 'ALL',
  successUrl: 'http://localhost:4200/confirmation',
  failUrl: 'http://localhost:4200/confirmation',
  cancelUrl: 'http://localhost:4200/confirmation',

  // non pesopay
  method: 'POST',
  styleDisplay: 'none',
};


export const FAKE_APPLICATION_FORM_DATA = {
  personal: {
    lastName: 'Doe',
    firstName: 'John',
    middleInitial: 'A',
    title: 'Mr.',
    civilStatus: 'Single',
    birthDate: '1990-01-01',
    birthPlace: 'Manila',
    age: 34,
    tin: '123-456-789',
    address: '123 Fake Street, QC',
    mobile: '09171234567',
    email: 'john.doe@example.com'
  },
  passport: {
    lastName: 'Doe',
    firstName: 'John',
    middleName: 'Anthony',
    passportNo: 'P1234567',
    issuedOn: '2020-01-01',
    issuedAt: 'DFA Manila'
  },
  agency: {
    agencyName: 'Fake Agency Inc.',
    telephonePrefix: '+63',
    telephoneNumber: '287654321',
    mobilePrefix: '+63',
    mobileNumber: '9176543210',
    contactPerson: 'Jane Smith',
    email: 'agency@example.com'
  },
  work: {
    companyName: 'Oceanic Corp.',
    address: 'Port Area, Manila',
    country: 'Philippines',
    industry: 'Shipping',
    vesselName: 'MV Horizon',
    designation: 'Seafarer',
    contactNo: '0287654321',
    startDate: '2022-01-01',
    endDate: '2022-12-31',
    months: 12
  }
}
