
export function GET() {
    //database logic
    return Response.json({
        email:"test@gmail.com",
        name:"test"
    })
}

export async function POST(req: Request) {
    //extract body
    const body = await req.json();

    //database logic
    console.log(body);
    return Response.json({
        message: "User created successfully"
    })
}
//express code for reference
// app.get("/api/user", (req,res)=>{
//     res.json({
//         email:"test@gmail.com",
//         name:"test"
//     });
// });