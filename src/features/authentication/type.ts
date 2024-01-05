export type confirmPasswordProps = {
  passwordConfirmLabel?: string;
  passwordLabel?: string;
  passwordConfirmPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSend?: (values: { password: string }) => void;
  isLoading: boolean;
};

export type forgotPassProps = {
  emailPlaceholder?: string;
  setEmail?: (value: string) => void;
  handleLogin?: () => void;
  handleSignUP?: () => void;
  handleSend?: ({ email }: { email: string }) => void;
  isLoading?: boolean;
};

export type loginParams = {
  email: string;
  password: string;
  isRemember: boolean;
};
  

export interface IOauthProps {
  handleGoogleLogin?: () => void;
  handleFacebookLogin?: () => void;
  handleGithubLogin?: () => void;
}
export interface loginProps extends IOauthProps{
  title?: string;
  emailLabel?: string;
  passwordLabel?: string;
  emailPlaceholder?: string;
  passwordPlaceholder?: string;
  handleSignUP?: () => void;
  handleLogin?: (val: loginParams) => object;
  handleForgotPassword?: () => void;
  isLoading?: boolean;
}




export interface signUpParams {
  name: string;
  password: string;
  email: string;
}
  
  
export interface signUpProps extends IOauthProps {
  handleLogin?: () => void;
  title?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  confirmPasswordLabel?: string;
  confirmPasswordPlaceholder?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  onChange?: (value: boolean) => void;
  handleSignUP?: (val: signUpParams) => void;
  isLoading?: boolean;
}


export type codeType = {
  otp1: number;
  otp2: number;
  otp3: number;
  otp4: number;
};
export type verificationProps = {
  handleSignUP?: () => void;
  handleSend?: (val: codeType ) => void | Promise<void>;
  handleResend?: () => void;
  isLoading?: boolean;
};
  