const { Connect, connection } = require("../DB/Connection");
const { getPath, setPath } = require("../helpers/Redis_Functions");

const get = async (Req, Res) => {
  let Conn = await Connect();

  let { id } = Req.params;

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

  setPath(mainId, JSON.stringify(currPath));
  currPath.reverse();
  Res.render("main.ejs", { childs: rows, currPath });
};

let createfolder = async (Req, Res) => {
  let Conn = await Connect();
  //   console.log(Req.body.foldername, Req.params.parentid);
  let Ans = await Conn.query(
    "INSERT INTO items(name , parentid , isDir) VALUES (? , ? , ?)",
    [Req.body.foldername, Req.params.parentid, 1],
    (err, Res) => {}
  );

  let pathFromCache = await getPath(Req.params.parentid);
  pathFromCache = JSON.parse(pathFromCache);
  pathFromCache.reverse();
  pathFromCache.push({
    id: Ans[0].insertId,
    name: Req.body.foldername,
    parentid: Req.params.parentid,
    isDir: 1,
  });
  pathFromCache.reverse();
  setPath(Ans[0].insertId, JSON.stringify(pathFromCache));
  Res.redirect("/fs/" + Req.params.parentid);
};

let createfile = async (Req, Res) => {
  let Conn = await Connect();

  await Conn.query(
    "INSERT INTO items(name , parentid , isDir) VALUES (? , ? , ?)",
    [Req.file.filename, Req.params.parentid, 0],
    (err, Res) => {}
  );
  Res.redirect("/fs/" + Req.params.parentid);
};

module.exports = {
  get,
  createfolder,
  createfile,
};
