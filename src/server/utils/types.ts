export interface IActivity {
  id?: number;
  userid?: number;
  type?: string;
  duration?: string;
  distance?: number;
  _created?: Date;
}

export interface IUser {
  id?: number;
  firstname?: string;
  lastname?: string;
  email?: string;
  _created?: Date;
}

export type Error = {
  status?: number;
  message?: string;
};
