import { NextRequest,NextResponse } from "next/server";


function GET(req:NextRequest, ){
    return NextResponse.json({
        url:req.url,
        response:'you have sucessfully hit the /hello route'
    })
}



module.exports={
    GET,
}