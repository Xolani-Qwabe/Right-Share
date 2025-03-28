export const users = [
    { id: 1, name: "John" },
    { id: 2, name: "Mark" },
];

export async function GET(){
    return Response.json(users);
}


export async function POST(req: Request) {
    const body = await req.json();
    const newUser = { id: users.length + 1, name: body.name };
    users.push(newUser);
    return new Response(JSON.stringify(newUser), { 
        status: 201,
        headers: { "Content-Type": "application/json" }
    });
}
