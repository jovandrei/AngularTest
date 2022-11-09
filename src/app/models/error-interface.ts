export interface ErrorInterface {
  correlationId: string;
  title:         string;
  type:          string;
  status:        number;
  detail:        string;
  instance:      string;
}
