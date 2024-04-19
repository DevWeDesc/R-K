export interface ReceiverMailDTO {
  from?: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}
