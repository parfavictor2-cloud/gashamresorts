import { NextResponse } from 'next/server';
import { query } from '../../../../lib/db';
import { cookies } from 'next/headers';

export async function PUT(
  request: Request,
  { params }: { params: { id: string } }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session || session.value !== 'authenticated') {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    const { name, description, price, image_url, capacity } = await request.json();

    await query(
      `UPDATE rooms 
       SET name = $1, description = $2, price = $3, image_url = $4, capacity = $5 
       WHERE id = $6`,
      [name, description, price, image_url, capacity, id]
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database update error:', error);
    return NextResponse.json({ success: false, message: 'Failed to update room' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const cookieStore = await cookies();
  const session = cookieStore.get('admin_session');
  if (!session || session.value !== 'authenticated') {
    return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  }

  try {
    const { id } = params;
    await query('DELETE FROM rooms WHERE id = $1', [id]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Database delete error:', error);
    return NextResponse.json({ success: false, message: 'Failed to delete room' }, { status: 500 });
  }
}