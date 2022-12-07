module.exports = function (app) {
    
    app.use("/api",(req,res)=>{
        res.json({"res":"ok"})
    })
    
}