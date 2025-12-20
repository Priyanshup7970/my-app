
export function GET() {
    //database logic
    return Response.json({
        email:"test@gmail.com",
        name:"test"
    })
}

export function POST() {
    //database logic
    return Response.json({
        email:"test@gmail.com",
        name:"test"
    })
}
//express code for reference
// app.get("/api/user", (req,res)=>{
//     res.json({
//         email:"test@gmail.com",
//         name:"test"
//     });
// });