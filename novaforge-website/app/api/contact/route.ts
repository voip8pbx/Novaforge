import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// Validation schema
const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Invalid email address"),
    company: z.string().optional(),
    phone: z.string().optional(),
    service: z.string().optional(),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

export async function POST(request: NextRequest) {
    try {
        // Parse and validate the request body
        const body = await request.json();
        const validatedData = contactSchema.parse(body);

        // Here you would typically:
        // 1. Send email notification
        // 2. Store in database
        // 3. Send to CRM
        // 4. Trigger Slack notification, etc.

        // For now, we'll simulate a successful submission
        console.log("Contact form submission:", validatedData);

        // Simulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Return success response
        return NextResponse.json(
            {
                success: true,
                message: "Thank you for your message. We'll get back to you soon!",
                data: {
                    id: `contact_${Date.now()}`,
                    timestamp: new Date().toISOString(),
                },
            },
            { status: 200 }
        );
    } catch (error) {
        // Handle validation errors
        if (error instanceof z.ZodError) {
            return NextResponse.json(
                {
                    success: false,
                    message: "Validation failed",
                    errors: error.issues.map((err: z.ZodIssue) => ({
                        field: err.path.join("."),
                        message: err.message,
                    })),
                },
                { status: 400 }
            );
        }

        // Handle other errors
        console.error("Contact form error:", error);
        return NextResponse.json(
            {
                success: false,
                message: "Internal server error",
            },
            { status: 500 }
        );
    }
}

// Optional: Add rate limiting
export async function GET() {
    return NextResponse.json(
        {
            success: false,
            message: "Method not allowed",
        },
        { status: 405 }
    );
}
