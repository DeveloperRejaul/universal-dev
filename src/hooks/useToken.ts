const config = require("../../tailwind.config");

export const useToken = (felid:"colors"|"size",value:string): string | number => {
    let f = felid === "size" ? "spacing" : "colors";
    switch (felid) {
        case "colors":
            return config.theme[f][value]
        case "size":
           const rem = config.theme[f][value]
           return Number(rem.replace("rem",""))*16
    }

};

