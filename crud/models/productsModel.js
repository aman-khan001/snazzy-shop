import mongoose from "mongoose"


const productsSchema = new mongoose.Schema({
    title: String,
    description: String,
    price: Number
})


const productsModel = mongoose.model("products", productsSchema)



const products = async  () => {
    try {
        const result = await addproducts1.save()
        await addproducts2.save()
        await addproducts3.save()
        await addproducts4.save()
        console.log(result)
    } catch (error) {
        console.log(first)
    }
} 
// products()

const getDoc = async () => {
    try {
        
        // let result = await productsModel.find({age: {$nin: [26, 21, 16]}})
        // let result = await productsModel.find({name: "Rohini"})
        let result = await productsModel.find()
        console.log(result)

        // const result = await productsModel.find().select({city: 0})
        // const result = await productsModel.findById("6840231b5d535327d87d01ab", "-name ")
        // result.forEach(item => {
        //     console.log(item.name, "-", item.age)
        // })
    } catch (error) {
        console.log(error)
    }
}

const updateDoc = async (id) => {
    try {
        // await productsModel.findByIdAndUpdate(id, {name: "Rohit", age: 22})

        // await productsModel.updateOne({name: "Rohit"}, {city: "Jabalpur"})

        let result = await productsModel.updateMany({city: "Dewas"}, {city: "Dhar"}, {returnDocument: "after"})
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}


const deleteDoc = async (id) => {
    try {
        // await productsModel.findByIdAndDelete(id)
        // await productsModel.deleteOne({age: 19})
        await productsModel.deleteMany({city: "Dhar"})
    } catch (error) {
        console.log(error)
    }
}

// deleteDoc()
export {getDoc, updateDoc}