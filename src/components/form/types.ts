export interface IRenderProps {
  onChange: (value: string) => void;
}
 
export interface IController {
  render: ({onChange}: IRenderProps ) => React.ReactNode;
  name: string;
  rules?: string
}
  
export interface initialState {
  [key: string]: string;
}
  
export interface IFormParams {
  initialState: initialState
}