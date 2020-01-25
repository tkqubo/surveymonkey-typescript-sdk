export type Validation = NoValidation | NumericValidation | SumValidation | DateValidation |EmailValidation | TextLengthValidation | RegexValidation;

export interface NoValidation {
  type: 'any';
  text: '';
  min: null;
  max: null;
  sum: null;
  sum_text: '';
}

export interface NumericValidation {
  type: 'integer' | 'decimal';
  text: string;
  min: string | null;
  max: string | null;
  sum: null;
  sum_text: string;
}

export interface SumValidation {
  type: 'integer';
  text: string;
  min: null;
  max: null;
  sum: number;
  sum_text: string;
}

export interface DateValidation {
  type: 'date_us' | 'date_intl';
  text: string;
  min: string | null;
  max: string | null;
  sum: null;
  sum_text: '';
}

export interface EmailValidation {
  type: 'email';
  text: string;
  min: null;
  max: null;
  sum: null;
  sum_text: '';
}

export interface TextLengthValidation {
  type: 'text_length';
  text: string;
  min: string;
  max: string;
  sum: null;
  sum_text: '';
}

/** This doesn't appear in UI */
export interface RegexValidation {
  type: 'regex';
  text: string;
  min: string;
  max: string;
  sum: null;
  sum_text: '';
}
