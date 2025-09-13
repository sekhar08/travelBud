import NewLocationClient from "@/components/new-location";

export default async function NewLocation({
  params,
}: {
  params: { tripid: string };
}) {
  const { tripid } = await params;
  return <NewLocationClient tripId={tripid} />;
}
