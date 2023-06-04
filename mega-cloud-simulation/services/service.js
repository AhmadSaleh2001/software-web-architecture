const { Connect, connection } = require("../DB/Connection");
const { getPath, setPath } = require("../helpers/Redis_Functions");
const getFolder = async (id) => {
  let Conn = await Connect();
  const [rows] = await Conn.execute("SELECT * FROM items WHERE parentid = ?", [
    id,
  ]);
  let mainId = id;
  let currPath = [];

  while (1) {
    let pathFromCache = await getPath(id);
    if (pathFromCache) {
      pathFromCache = JSON.parse(pathFromCache);

      for (let folder of pathFromCache) currPath.push(folder);
      break;
    }
    const [rows] = await Conn.execute("SELECT * FROM items WHERE id = ?", [id]);

    currPath.push(rows[0]);

    if (rows[0].parentid == null) break;

    id = rows[0].parentid;
  }

  setPath(mainId, JSON.stringify(currPath)); // cache it
  currPath.reverse();

  return { rows, currPath };
};

const createFolder = async (folderName, parentId) => {
  let Conn = await Connect();

  let Ans = await Conn.query(
    "INSERT INTO items(name , parentid , isDir) VALUES (? , ? , ?)",
    [folderName, parentId, 1], //
    (err, Res) => {}
  );

  let pathFromCache = await getPath(parentId);
  pathFromCache = JSON.parse(pathFromCache);
  pathFromCache.reverse();
  pathFromCache.push({
    id: Ans[0].insertId,
    name: folderName,
    parentid: parentId,
    isDir: 1,
  });
  pathFromCache.reverse();
  setPath(Ans[0].insertId, JSON.stringify(pathFromCache));
};

const createFile = async (fileName, parentId) => {
  let Conn = await Connect();

  await Conn.query(
    "INSERT INTO items(name , parentid , isDir) VALUES (? , ? , ?)",
    [fileName, parentId, 0],
    (err, Res) => {}
  );
};
module.exports = {
  getFolder,
  createFolder,
  createFile,
};
