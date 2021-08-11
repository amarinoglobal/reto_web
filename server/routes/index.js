module.exports = app => {

    app.use("/api/upload", require("./uploads.routes"))
    app.use("/api", require("./auth.routes.js"))
    app.use("/api/phones", require("./phones.routes"))
}