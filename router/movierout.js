const{Router}=require("express");
const moviectrl = require('../controller/moviectlr');


const router= Router();

router.get("/",(req,res)=>{
    res.send("using api route")
});

router.post('/add',moviectrl.createmov);
router.get('/',moviectrl.getAllmov);
router.get('/:titel',moviectrl.getSinglemov);
router.patch('/:titel',moviectrl.updatemov);
router.delete('/:titel',moviectrl.deletemov);


module.exports=router;
