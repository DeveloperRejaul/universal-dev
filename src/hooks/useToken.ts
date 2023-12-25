
const config = require("../../tailwind.config");

export const useToken = (felid:"colors"|"size",value:string) => {
    if(felid==="colors") return config.theme["colors"][value]
    if(felid ==="size") return Number(config.theme["spacing"][value].replace("rem",""))*16
};

