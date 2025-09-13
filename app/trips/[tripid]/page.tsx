

import { auth } from "@/auth";
import TripDetailClient from "@/components/trip-detail";
import { prisma } from "@/lib/prisma";


export default async function TripDetail({ params }: { params: { tripid: string } }) {
  const { tripid } = await params;

  const session = await auth();

  if (!session) {
    return <div> Please sign in.</div>;
  }

  const trip = await prisma.trip.findFirst({
    where: { id: tripid, userId: session.user?.id },
    include: { Location: true },
  });

  console.log(trip);

  if (!trip) {
    return <div> Trip not found.</div>;
  }

  // map Prisma’s `Location` relation to the `locations` property expected by TripDetailClient
  const tripWithLocations = {
    ...trip,
    locations: trip.Location
  };

  return <TripDetailClient trip={tripWithLocations} />;
}
