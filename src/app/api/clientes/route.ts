import { authOptions } from '@/lib/auth'
import { getServerSession } from 'next-auth'
import prismaClient from '@/lib/prisma'
import { NextResponse } from 'next/server'


// API com todos os clientes
export async function GET(request: Request) {
  const session = await getServerSession(authOptions)

//   if (!session || !session.user) {
//     redirect("/")
//   }

  const customers = await prismaClient.customer.findMany({
    // where: {
    //   userId: session.user.id
    // }
  })

  return NextResponse.json(customers)
}