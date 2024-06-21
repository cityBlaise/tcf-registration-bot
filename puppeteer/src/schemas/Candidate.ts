import { Gender, DocumentsType } from "./types";

export interface Candidate {
  email: string;
  name: string;
  firstName: string;
  password?: string;
  birthDate: string;
  birthPlace: string;
  sex: Gender;
  nationality: string;
  phone: string;
  language: string;
  candidateCode?: string;
  registrationCause: string;
  documentType: DocumentsType;
  documentNumber: string;
}
