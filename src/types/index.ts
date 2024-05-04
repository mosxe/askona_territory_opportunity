export interface ICollaboratorCarrer {
  id: string;
  fullname: string;
  position_name: string;
  photo: string;
  image: string;
}

export interface ICollaboratorPosition {
  id: string;
  fullname: string;
  position_name: string;
  photo: string;
  desc: string;
}

export interface IResponse {
  data_career: ICollaboratorCarrer[];
  data_position: ICollaboratorPosition[];
  isError: boolean;
}
