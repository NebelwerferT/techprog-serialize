// const depthCounter = (depth) => {
//     return (typeof depth === "number") ? ++depth : 1;
// }

// const serializers = {
//     string: s => { return { value: `${s}`, type: '[string]' } },
//     number: n => { return { value: `${n.toString()}`, type: '[number]' } },
//     boolean: b => { return { value: `${b.toString()}`, type: '[boolean]' } },
//     function: f => { return { value: `${f.toString()}`, type: `[function: ${f.name}]` } },
//     date: d => { return { value: d.toJSON(), type: '[date]' } },
//     array: a => { return { value: `[${a}]`, type: '[array]' }; },
//     object: (o, depth) => {
//         if (o === null) return 'null';
//         let s = '{';
//         for (const key in o) {
//             const val = o[key];
//             const res = customSerialize(val, depth);
//             if (s.length > 1) s += ',\n';
//             else s += '\n';
//             s += '\t'.repeat(depth);
//             s += `"${key + res.type}": "${res.value}"`;
//         }
//         const symbols = Object.getOwnPropertySymbols(o);
//         for (const symbol of symbols) {
//             const val = o[symbol];
//             const res = customSerialize(val);
//             if (s.length > 1) s += ',\n';
//             s += '\t'.repeat(depth);
//             s += `"${symbol.toString() + '[symbol]'}": "${res.value}"`;
//         }
//         return { value: `${s}\n${'\t'.repeat(depth - 1)}}`, type: '' };
//     },
// };

// const customSerialize = (obj, depth) => {
//     depth = depthCounter(depth);
//     const className = obj.constructor.name.toLowerCase();
//     const serializer = serializers[className];
//     return serializer(obj, depth);
// };

// const serialize = (cs) => {
//     return customSerialize(cs).value.replace(/"\{/g, '{').replace(/\}\"/g, '}');
// };

const serialize = cs => {
  const obj = {};

  cs.forEach(elem => {
    const parentClassName = Object.getPrototypeOf(elem.constructor).name;
    if (!obj[parentClassName]) obj[parentClassName] = [];
    obj[parentClassName].push({ className: elem.constructor.name, obj: elem, });
  });

  return JSON.stringify(obj);
}

export default serialize;
