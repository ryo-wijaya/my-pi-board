export async function getBusTimings(busStopId, busService) {
  try {
    console.log("Backend API URL:", import.meta.env.VITE_API_BUS);
    const response = await fetch(
      `${import.meta.env.VITE_API_BUS}/bus-timings?bus_stop_id=${busStopId}&bus_service=${busService}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch bus timings for ${busStopId}, ${busService}`);
    }
    return await response.json();
  } catch (error) {
    console.error("error", error);
    return null;
  }
}
