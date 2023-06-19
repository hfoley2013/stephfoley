import { NextRequest, NextResponse } from 'next/server'
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook'
import { revalidatePath } from 'next/cache'

const secret = process.env.SANITY_REVALIDATE_SECRET!

export async function POST(req: NextRequest) {
  const signature = req.headers.get(SIGNATURE_HEADER_NAME) || ''
  const body = await req.json()
  console.log('webhook data:', body)

  // Validate signature
  if (!isValidSignature(body, signature, secret)) {
    return NextResponse.json({
      success: false,
      message: 'Unauthorized',
    })
  }

  // Revalidate all pages
  await revalidatePath('/**/*')

  return NextResponse.json({
    revalidated: true,
    now: Date.now(),
  })
}
