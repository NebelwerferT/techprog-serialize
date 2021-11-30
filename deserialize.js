// const deserializes = {
//     string: s => s,
//     function: (f, fName) => { return { [fName]: () => eval(f) }[fName] }, //Ужас
//     date: d => new Date(d),
// }

// const customDeserialize = obj => {
//     for (let key in obj) {
//         if (typeof obj[key] !== 'object') {
//             const sep = key.split(/(\[.+\])/);
//             const prop = sep[0];
//             const type = sep[1].replace(/[\[\]]/g, '');
//             if (type === 'symbol') {
//                 const symbolName = prop.split(/(\(\w+\))/)[1].replace(/[\(\)]/g, '');
//                 obj[Symbol(symbolName)] = obj[key];
//                 delete obj[key];
//                 continue;
//             }
//             if (type.includes('function')) {
//                 const [typeName, funcName] = type.split(': ');
//                 obj[key] = deserializes[typeName](obj[key], funcName);
//                 obj[prop] = obj[key];
//                 delete obj[key];
//                 continue;
//             }
//             obj[key] = deserializes[type](obj[key]);
//             obj[prop] = obj[key];
//             delete obj[key];
//         }
//         else if (obj[key]) customDeserialize(obj[key]);
//     }
// }

// const deserialize = serializedObj => {
//     const obj = JSON.parse(serializedObj);
//     customDeserialize(obj);
//     return obj;
// };

import { Hero, Enemy } from "./objects.js";

const deserialize = serializedObj => {
  const res = [];
  const obj = JSON.parse(serializedObj);
  Object.keys(obj).forEach(key => {
    obj[key].forEach((inst, idx) => {
      const params = Object.values(inst.obj).map(param => {
        if (typeof param === 'string') param = `'${param}'`;
        return param;
      });
      res.push(eval(`new ${obj[key][idx].className}(${params})`));
    });
  });
  return res;
};

export default deserialize;