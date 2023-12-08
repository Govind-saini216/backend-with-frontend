import  express from 'express' ;
const app = express();
console.log(app)

app.get('/',(req,res)=>{
//     res.json
//     ( {
//         name:'Govind',product:[]
//      });
res.render('index.ejs')
})
app.use(express.static(path.join(path.resolve(),'public')))


// app.get('/about',(req,res)=>{
//    res.send("<h1> this is about route </h1>");
// })

const port = 3000;

app.listen(port,()=> console.log(`server is start ${port}`))