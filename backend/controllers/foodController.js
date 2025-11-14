const {foodModel} = require('../models/foodModel')
const fs = require("fs")

// add food items

const addFood = async (req,res) => {

    let image_filename = `${req.file.filename}`

    console.log(foodModel);
    const food = new foodModel({
        name:req.body.name,
        description:req.body.description,
        price:req.body.price,
        image:image_filename,
        category:req.body.category
    })

    try {
        await food.save();
        res.json({success:true,message:"Food Added"})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:"Error"})
    }

}

// all food list
const listFood = async (req,res) => {
    try {
        const foods = await foodModel.find({});
        res.json({success:true,data:foods})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

module.exports = {addFood,listFood}