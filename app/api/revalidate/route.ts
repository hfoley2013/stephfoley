import { NextRequest, NextResponse } from 'next/server'
import { headers } from 'next/dist/client/components/headers'
import { revalidateTag } from 'next/cache'
import {isValidSignature} from '@sanity/webhook'

const secret = process.env.SANITY_REVALIDATE_SECRET!
 
export async function POST(req: NextRequest) {
  const authorization = headers().get('authorization') || ''
  const body = await req.json()
  const tag = req.nextUrl.searchParams.get('posts')

  // Validate signature
  if (!isValidSignature(body, authorization, secret)) {
    return NextResponse.json({
      success: false,
      message: 'Unauthorized',
    })
  }

  // Revalidate tag
  revalidateTag(tag!)

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  })
}
