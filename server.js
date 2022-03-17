//start with db

const Sequelize = require("sequelize");
const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/second_redux"
);

const Model = db.define("model", {
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

const Brand = db.define("brand", {
  name: {
    type: Sequelize.DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: true,
    },
  },
});

Model.belongsTo(Brand);
Brand.hasMany(Model);

//express

const express = require("express");
const app = express();
const path = require("path");

app.use("/dist", express.static(path.join(__dirname, "dist")));
app.get("/", (req, res) => res.sendFile(path.join(__dirname, "index.html")));

app.get("/api/models", async (req, res, next) => {
  try {
    const models = await Model.findAll({ include: [Brand] });
    res.send(models);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/brands", async (req, res, next) => {
  try {
    const brands = await Brand.findAll();
    res.send(brands);
  } catch (ex) {
    next(ex);
  }
});

const port = process.env.PORT || 3000;

const init = async () => {
  try {
    await db.sync({ force: true });
    const [
      strat,
      tele,
      lesPaul,
      firebird,
      custom24,
      m1,
      m2,
      m3,
      majesty,
      axis,
      fender,
      gibson,
      prs,
      esp,
      musicMan,
    ] = await Promise.all([
      Model.create({ name: "Stratocaster" }),
      Model.create({ name: "Telecaster" }),
      Model.create({ name: "Les Paul" }),
      Model.create({ name: "Firebird" }),
      Model.create({ name: "Custom 24" }),
      Model.create({ name: "M-1" }),
      Model.create({ name: "M-2" }),
      Model.create({ name: "M-3" }),
      Model.create({ name: "Majesty" }),
      Model.create({ name: "Axis" }),
      Brand.create({ name: "Fender" }),
      Brand.create({ name: "Gibson" }),
      Brand.create({ name: "PRS" }),
      Brand.create({ name: "ESP" }),
      Brand.create({ name: "Music Man" }),
    ]);
    strat.brandId = fender.id;
    tele.brandId = fender.id;
    lesPaul.brandId = gibson.id;
    firebird.brandId = gibson.id;
    custom24.brandId = prs.id;
    m1.brandId = esp.id;
    m2.brandId = esp.id;
    m3.brandId = esp.id;
    majesty.brandId = musicMan.id;
    axis.brandId = musicMan.id;
    await Promise.all([
      strat.save(),
      tele.save(),
      lesPaul.save(),
      firebird.save(),
      custom24.save(),
      m1.save(),
      m2.save(),
      m3.save(),
      majesty.save(),
      axis.save(),
    ]);
    app.listen(port, () => console.log(`listening on port ${port}`));
  } catch (ex) {
    console.log(ex);
  }
};

init();
