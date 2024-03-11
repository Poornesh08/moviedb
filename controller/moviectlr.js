const movies =require('../model/moviedel');


const createmov = async (req, res) => {
    try {
        let {titel,year,genre } = req.body;
        const data = await movies.create({
            titel,year,genre
        });
        res.status(200).json({
            message: "movies data created",
            data: data
        });
    }
    catch (err) {
              console.log(err);
    }
}

const postmov = async (req, res) => {
    let data = req.body;
    const movies_details = await movies.create(data);
    res.status(200).json({ movies_details })
}

const getAllmov = async (req, res) => {
    const movies_details = await movies.findAll();
    res.status(200).json({ movies_details })
}

const getSinglemov = async (req, res) => {
    let data = req.body;
    try {
        const movies_details = await movies.findOne(data, {
            where: { movies_details: req.params.titel }
        });
        res.status(200).json({ movies_details})
    }
    catch (err) {
        console.log(err);
    }
}

const updatemov = async (req, res) => {
    let data = req.body;
    try {
        const movies_details = await movies.update(data, {
            where: { movies_details: req.params.titel }
        });
        res.status(200).json({ movies_details});
    }
    catch (err) {
        console.log(err);
    }
};

const deletemov = async (req, res) => {
    try {
        const movies_details = await movies.destroy({
            where: {
                movies_details: req.params.titel
            }
        });
        res.status(200).json({ movies_details })
    } catch (err) {
        console.log(err);

    }
}

module.exports = {
    createmov,
    postmov,
    getAllmov,
    getSinglemov,
    updatemov,
    deletemov
}
