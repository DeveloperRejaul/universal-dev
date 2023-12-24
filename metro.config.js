// Learn more https://docs.expo.io/guides/customizing-metro
// TODO we need to must web build in linux environment 
const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');


// For linux: web and mobile 
// For windows : Mobile
const config = getDefaultConfig(__dirname,{ isCSSEnabled: true });
module.exports = withNativeWind(config, {input: "./src/config/app.css"});


// For windows : web and mobile
// const config = getDefaultConfig(__dirname,{ isCSSEnabled: true });
// module.exports = config


