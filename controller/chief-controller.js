const Menyu = require('../model/Menyu-model')


const getMenyu = async (req,res, next) => {
 
    try {
         
        const allMenyu= await Menyu.findById('asd');
         
        return res.status(200).json({
            message: "These are all menus",
            allMenyu
        });
     

    } catch (error) {
        error.statusCode = error.statusCode || 500;
        error.data = { extra:'This is extra'}
      next(error);
    }

}

const getFoodById = async (req,res)=>{
    try {
        const menyuById = await Menyu.findById();

        if(!menyuById) return res.status(404).json({message:'Menyu not found'});

        return res.status(200).json({message:'Successfully ', menyuById});

    } catch (error) {
        error.statusCode = error.statusCode || 500;
        next(errror);
    }
}

const addFood = async (req,res)=>{
    try {
        const {nameOfFood, cost, isPublished}= req.body;
        const newFood = await Menyu.create({nameOfFood,cost,isPublished});

        res.status(201).json({
            message:'add food'
        });
    } catch (error) {
        error.statusCode = error.statusCode || 500;
        next(errror);
    }
}

const updateFood= async (req, res, next) => { 
  
    try {
        
       const {nameOfFood,cost , isPublished} = req.body;

       const updatedFood = await Menyu.findByIdAndUpdate(req.params.id,{nameOfFood,cost, isPublished});

       res.status(200).json({
        message: 'food updated successfully',
        updatedFood
       })

    } catch (error) {
        error.statusCode = error.statusCode || 500;
        next(error);
    }

};

const deleteFood = async (req,res)=> {
    try {
        await Menyu.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: 'food deleted successfully',

        })

    } catch (error) {
        console.log(error);
    }
}

const getFoodByCost = async (req, res) => {
  try {

  const cost = parseInt(req.params.cost);
    const costOfFood = await Menyu.find({cost});
    if(!costOfFood){
        return res.status(404).send({message: 'food not found'});
    }
      res.status(200).send({
        message:'These are food items',
        costOfFood
    });
    
  } catch (error) {
    console.log(error);
  }
 } 

module.exports ={
    getMenyu,
    getFoodById,
    deleteFood,
    addFood,
    updateFood,
    getFoodByCost
}