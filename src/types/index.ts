export interface IData {
  id: string;
  person_name: string;
  position_name: string;
  desc: string;
  photo_link: string;
  card_link: string;
}

export interface IResponse {
  dataReady: IData[];
  dataAssigned: IData[];
  isError: boolean;
  errorMessage: string;
}
