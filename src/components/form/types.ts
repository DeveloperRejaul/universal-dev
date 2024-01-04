export interface IRenderProps {
  onChange: (value: string) => void;
}
 
export interface IController {
  render: ({onChange}: IRenderProps ) => React.ReactNode;
  name: string;
  rules?: string
}

export interface IInitialState {
  [key: string]: string | boolean;
}
export interface IErrorState {
  [key: string]: string;
}
  
export interface IFormParams {
  initialState: IInitialState
  schema: object
}