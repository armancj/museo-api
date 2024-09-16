export type SendOptions = {
  to: string;
  from?: string;
  subject: string;
  context?: Record<string, unknown>;
  html?: string;
};

export interface UserParams {
  name: string;
  lastName: string;
  validationLink: string;
  supportEmailBd?: string;
  supportPhoneBd?: string;
}

export interface EmailServiceModel {
  sendEmail(options: SendOptions): Promise<void>;
}
