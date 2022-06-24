import { permission } from "./constants.js";

export default function hasPermission(moduleName, role, permissionType) {
  if (moduleName in permission) {
    if ((permission[moduleName].all.includes(role)) || (permission[moduleName][permissionType].includes(role))) {
      console.log('True');
    } else {
      console.log('False');
    }
  } else {
    console.log("Module not found");
  }
}
