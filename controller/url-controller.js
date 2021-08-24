const { saver, fetchSmallUrl,fetchBigUrl } = require('../db/config');
exports.shortUrl = async (req,res) => {
    try{
        const { url,user,long} = req.body;
        id=Math.random().toString(36).slice(2).substr(0,long);
        await saver(id,url,user);
        res.status(200).send("localhost:1337/shortUrl/"+id);
    }catch(err){
        console.log(err);
        res.status(400).send("some  or big error error occured");
    }
}

exports.bigUrl = async (req,res)=>{
    try{
        const id = req.params.id;
        const value = await fetchBigUrl(id);
        //res.redirect(200,value.url);
        res.status(200).send(value.url);
    }catch(err){
        console.log(err);
        res.status(400).send("some error occured");
    }
}