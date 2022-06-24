var arg = process.argv;

const permission = {
  'getUsers': {
    all: ['head-trainer'],
    read: ['trainee', 'trainer'],
    write: ['trainer'],
    delete: [],
  },
};

function hasPermission(moduleName, role, permissionType) {
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

hasPermission(arg[2], arg[3], arg[4]);
