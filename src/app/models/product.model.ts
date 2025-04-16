import { Coverage } from './coverage.model';

export interface Product {
  id: string;
  description: string;
  seaCoverages: Coverage[];
  landCoverages: Coverage[];
}
