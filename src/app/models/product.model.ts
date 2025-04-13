import { Coverage } from './coverage.model';

export interface Product {
  id: string;
  seaCoverages: Coverage[];
  landCoverages: Coverage[];
}
