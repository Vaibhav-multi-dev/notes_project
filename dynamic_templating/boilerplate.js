const fs = require('fs');
const folderName = `section${process.argv[2]}`;
// const ok = `Notes_project/section${sectionNo}`;

fs.mkdir(folderName, { recursive: true }, (err) => {
    if (err) throw err;
});

fs.writeFileSync(`${folderName}/sec${process.argv[2]}.html`, " ");