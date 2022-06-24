import {permission} from "./constants.js";
// var arg = process.argv;

export default function hasPermission(moduleName, role, permissionType) {

  if ((permission[moduleName].all.includes(role)) || (permission[moduleName][permissionType].includes(role))) {
    console.log('True');
  } else {
    console.log('False');
  }
}

// hasPermission(arg[2], arg[3], arg[4]);
