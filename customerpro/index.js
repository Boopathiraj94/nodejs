// express import
const express = require("express")
const db = require("./database/db.js")
const customerModel = require("./models/customer.js")
const productModel = require("./models/product.js")

// create app

const app = express();

// middleware
app.use(express.json())


app.get("/v1/customer/:id", async (req, res) => {
    console.log("id", req.params.id)

    if (req.params && req.params.id) {
        const custId = req.params.id;

        const singleUser = await customerModel.find({ _id: Object(custId) })

        if (singleUser) {
            return res.status(200).send({ status: true, message: "user found", response: singleUser })
        } else {
            return res.status(200).send({ status: false, message: "no record found", response: "" })
        }


    } else {
        res.status(500).send({ status: false, message: "Customer Id is not found" })
    }
})


// get all customers

app.get("/v1/customer", async (req, res) => {

    const customers = await customerModel.find();

    if (customers) {
        return res.status(200).send({ status: true, message: "records", response: customers })
    } else {
        return res.status(200).send({ status: false, message: "no record found", response: "" })
    }

})


// add customer datas
app.post("/v1/customer", (req, res) => {
    const customer = new customerModel(req.body)
    let saved = customer.save()
    if (saved) {
        return res.status(200).send({ status: true, message: "Customer Saved", })
    } else {
        return res.status(200).send({ status: false, message: "Customer not save", })
    }
})

// updated
app.put("/v1/customer", async (req, res) => {

    // [1,3,5,6] => [5,7,9,0]
    const users = req.body;

    if (users.length >= 1) {
        let upd;
        for (const element of users) {
            upd = await customerModel.updateOne(
                { _id: Object(element.id) },
                { name: element.name, age: element.age, address: element.address, email: element.email },
            )

        }

        if (upd) {
            res.status(200).send({ status: true, message: "updated Successfully", response: upd })
        } else {
            res.status(200).send({ status: false, message: "not" })
        }

    } else {

        const updated = await customerModel.findByIdAndUpdate(
            { _id: Object(req.body.id) },
            { name: req.body.name, age: req.body.age, address: req.body.address, email: req.body.email },
            { new: true }

        )

        if (updated) {
            res.status(200).send({ status: true, message: "updated Successfully", response: updated })
        } else {
            res.status(200).send({ status: false, message: "not update" })
        }

    }
    // const updated = await customerModel.updateOne(
    //     { _id: Object(req.body.id) },
    //     { name: req.body.name, age: req.body.age, address: req.body.address, email: req.body.email }
    // )


})

// delete 

app.delete("/v1/customer", async (req, res) => {

    console.log(req.body)
    const user = req.body;
    if (user) {

        const deleted = await customerModel.deleteOne({ _id: Object(user.id) })
        if (deleted) {
            return res.status(200).send({ status: true, message: "Record Deleted Successfully" })
        } else {
            return res.status(200).send({ status: false, message: "some issue", response: deleted })
        }

    } else {
        res.status(200).send({ status: false, message: "invalid request" })
    }

})


// Add Products
app.post("/v1/products", (req, res) => {

    const product = new productModel(req.body)

    const saved = product.save()
    if (saved) {
        return res.status(200).send({ status: true, message: "product Saved", })
    } else {
        return res.status(200).send({ status: false, message: "product not save", })
    }

})

// get all products

app.get("/v1/products", async (req, res) => {

    const price = req.body.price;

    let pipline;

    if (req.body && req.body.condition == ">") {
        pipline = { $gt: price }
    }
    else if (req.body && req.body.condition == "<") {
        pipline = { $lt: price }
    }
    else if (req.body && req.body.condition == "=") {
        pipline = { $eq: price }
    }

    let orderby;
    if (req.body.orderby == "asc") {
        orderby = { productName: 1 }
    }else{
        orderby = { productName: -1 }
    }


    const dataList = await productModel.aggregate([
        { $match: { price: pipline } },
        { $sort: orderby }
    ])


    // console.log(dataList)

    if (dataList) {
        return res.status(200).send({ status: true, message: "product Saved", ress: dataList })
    }

})




app.listen(5000, (req, res) => {
    console.log("server running http://localhost:5000")
})