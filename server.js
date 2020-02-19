const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const productModel = require("./models/products");  // ./local module이란 의미

const app = express();

// This forces express to register handlebars as its template engine
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");


//Load all your static assets
app.use(express.static("public"));    // 꼭 public이라 이름 지을 필요는 없다.
app.use(bodyParser.urlencoded({ extended: false}));

app.get("/", (req, res)=>{
    res.render("home", {
        title : "home",
        headingInfo : "Home Page",

    });

});
app.post("/contact-us", (req, res)=>{
    const errorMessages = [];
    if(req.body.firstName === ""){
        errorMessages.push("PLEASE ENTER A FIRST NAME!!!");
    }
    if(req.body.lastName === ""){
        errorMessages.push("ENTER A LAST NAME!!!");
    }
    if(req.body.message === ""){
        errorMessages.push("ENTER TEXT MESSAGE!!!!!!!!")
    }

    if(errorMessages.length > 0){
        res.render("contact", {
            title : "Contact-us",
            headingInfo : "Contact Us Page",
            Messages : errorMessages,
            firstName : req.body.firstName,
            lastName : req.body.lastName,
            message : req.body.message,
        });
    }else{
        res.render("contact", {
            title: "Contact-us",
            headingInfo: "Contact Us Page",
            Messages : `Welcome ${req.body.firstName} ${req.body.lastName}. Your message is submitted`,
            message: "Helakdfbakjsdbadhjbv"
        });
        
    }
});

app.get("/contact-us", (req, res)=>{

    res.render("contact", {
        title : "Contact-us",
        headingInfo : "Contact Us Page",
    });

});

app.get("/products", (req, res)=>{
    
    res.render("products", {
        title : "Products",
        headingInfo : "Product Page",
        products: productModel.init(),

    });

});







const PORT =3000;
app.listen(process.env.PORT || PORT, ()=>{

    console.log(`Server is activated!`)
});




const images =[
    {
        name : "landscape",
        route: "/img/landscape.jpeg",
        alt : "landscape"
    },
    
];


