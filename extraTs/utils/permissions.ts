import { permission } from './constants';
// var arg = process.argv;

export default function hasPermission(moduleName: string, role: string, permissionType: string) : boolean {
  if ((permission[moduleName].all.includes(role)) || (permission[moduleName][permissionType].includes(role))) {
    // console.log('True');
    return true;
  } else {
    // console.log('False');
    return false;
  }
}

// hasPermission(arg[2], arg[3], arg[4]);
