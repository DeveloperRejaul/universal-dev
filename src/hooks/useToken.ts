const config = require("../../tailwind.config");
export const useToken = (felid:string,value:string ): string => config.theme[felid][value];