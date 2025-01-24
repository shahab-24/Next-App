import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export const GET = async (req) => {
    try {
        // Use handleAuth from Kinde
        const response = await handleAuth()(req);

        // Debug state validation
        const { searchParams } = new URL(req.url);
        const state = searchParams.get("state");
        const storedState = req.cookies.get("state")?.value;

        // Check state for security
        if (state !== storedState) {
            console.error("State mismatch detected", {
                receivedState: state,
                storedState,
            });
            return NextResponse.json(
                { error: "State mismatch" },
                { status: 400 }
            );
        }

        // If validation passes, proceed
        return response;
    } catch (error) {
        console.error("Authentication error:", error);
        return NextResponse.json(
            { error: "Authentication failed", details: error.message },
            { status: 500 }
        );
    }
};

// POST handler (if needed)
export const POST = handleAuth();
