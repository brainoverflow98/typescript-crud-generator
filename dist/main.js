import * as fs from 'fs';
let entityDir = process.argv[2];
let outDir = process.argv[3];
let entityModule = await import(entityDir);
let entityClass = entityModule.default;
let entity = new entityClass();
console.log(Object.getOwnPropertyNames(entity));
console.log(entity.__tableName);
/*
for(let property in classType)
{
  console.log(property);
}
*/
fs.writeFile(`${outDir}/mynewfile3.txt`, 'This is my text', function (err) {
    if (err)
        throw err;
    console.log('Replaced!');
});
