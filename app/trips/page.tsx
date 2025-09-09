import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";


export default async function TripsPage() {
    const session = await auth();
    if (!session) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
                <h1 className="text-3xl font-bold mb-4">Access Denied</h1>
                <p className="text-lg">You must be signed in to view your trips.</p>
            </div>
        );
    }

    return (
        <div className="space-y-6 container mx-auto px-4 py-8">
            <div>
                <h1>Dashboard</h1>
                <Link href="/trips/new">
                    <Button>New Trip</Button>
                </Link>
            </div>

        </div>
    );

}