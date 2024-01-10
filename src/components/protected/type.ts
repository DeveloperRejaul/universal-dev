export type handleProtectedParams = {
  isError: boolean; isLoading: boolean; isSuccess: boolean;
}
  
export type protectedProps = {
  children: React.ReactNode;
  handleProtected?: (params: handleProtectedParams) => void
}
  