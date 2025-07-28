export interface MailContext {
  [key: string]: any;
  user?: {
    firstName: string;
    lastName: string;
    email: string;
  };
  parcel?: {
    trackingId: string;
    status: string;
  };
}

export interface SendMailOptions {
  to: string | string[];
  subject: string;
  template: string;
  context: MailContext;
  attachments?: Array<{
    filename: string;
    path: string;
  }>;
}