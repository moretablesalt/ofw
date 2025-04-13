export interface Coverage {
  coverage: string;
  amount: string;
  note?: string;
}

export interface Product {
  id: string;
  seaCoverages: Coverage[];
  landCoverages: Coverage[];
}
