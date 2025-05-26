import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // Replace these with your Airtable credentials
    const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
    const AIRTABLE_BASE_ID = process.env.AIRTABLE_BASE_ID;
    const AIRTABLE_TABLE_NAME = 'Applications';

    // Send to Airtable
    const response = await fetch(`https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${AIRTABLE_TABLE_NAME}`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${AIRTABLE_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        records: [{
          fields: {
            'First Name': data.firstName,
            'Last Name': data.lastName,
            'Email': data.email,
            'Phone': data.phone,
            'Education Level': data.education,
            'GPA': data.gpa,
            'Personal Statement': data.essay,
            'Status': 'New',
            'Submission Date': new Date().toISOString(),
          }
        }]
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit to Airtable');
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    );
  }
} 