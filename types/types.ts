export type OpenAIModel = 'llama2-70b-4096' | 'mixtral-8x7b-32768' | 'gemma-7b-it' | 'llama3-70b-8192';

export interface TranslateBody {
  inputLanguage: string;
  outputLanguage: string;
  inputCode: string;
  model: OpenAIModel;
}

export interface TranslateResponse {
  code: string;
}
