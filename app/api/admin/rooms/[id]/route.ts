import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await request.json();
    const { name, price, image_url, capacity } = body;

    await query(
      'UPDATE rooms SET name = $1, price = $2, image_url = $3, capacity = $4 WHERE id = $5',
      [name, price, image_url, capacity, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to update room:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    await query('DELETE FROM rooms WHERE id = $1', [id]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete room:', error);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}