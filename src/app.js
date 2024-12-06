const express=require('express') ;
const app=express();

/*just use any one app to see result below commented is general response for all the links whether present or not will give same hellow world  including(/root) but test1 is for specific
/*note : /hello  /test1 are known as request handlers
/*app.use((req,res ) =>
{
    console.log("our server is responding");
    res.send("Hello, World!"); 
});
*/

app.use("/",(req,res) =>
    {
       res.send("root(/) link will work");
    });

app.use("/hello",(req,res) =>
{
res.send("hello link will work");
});
app.use("/test1",(req,res) =>
{
 res.send("specific rounte is use..if you mentioned localhost:5000/test1 then give result");
});


app.listen(3000 ,() =>
{
    console.log("running successfully");
});
