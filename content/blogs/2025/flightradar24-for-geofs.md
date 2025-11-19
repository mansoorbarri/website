---
title: "GeoFS-Radar: A Custom Solution for Virtual ATC"
description: "A look at the development of GeoFS-Radar, a T3-stack based tool designed to solve the bandwidth and functionality limitations of the official GeoFS map."
date: "2025-11-19"
url: "/flightradar24-for-geofs/"
draft: false
categories: 
  - Development
  - Flight Simulation
tags:
  - GeoFS
  - T3 Stack
  - Web Development
---

When I first began doing controlling ATC for GeoFS pilots, it became immediately apparent that the [official GeoFS Radar](https://www.geo-fs.com/pages/map.php) is rather inadequate. Essential features for air traffic control, such as accurate altitude, speed, and sufficient zoom capabilities, were missing. This made the task of controlling air traffic significantly more difficult than it needed to be.

This is when I started planning to build my own radar system. The goal was to utilise GeoFS's own variables to display information exactly how a controller would need to see it. But first, let us discuss the specific issues with the official GeoFS radar:

- **Speed:** Knowing how fast an aircraft is travelling is crucial for several reasons. Most importantly, it enables controllers to maintain safe separation between aircrafts. On GeoFS, the speed display is delayed by a significant amount, and the update interval lags even further if the pilot changes speed frequently (which most flights do).
- **Altitude:** The official GeoFS radar displays AGL (Above Ground Level) altitude. However, controllers frequently require MSL (Mean Sea Level) or ASL (Above Sea Level), which calculates the distance from sea level rather than the terrain directly below. This is vital for maintaining vertical separation over varying terrain.
- **Zoom Level:** This is perhaps my biggest issue with the official radar. One cannot zoom in sufficiently on the map to view taxiways or even smaller runways. This lack of detail is a major hindrance for ground control.
- **Foo Infestation:** When a user is on GeoFS but has not logged in, they appear as a "Foo" (Callsign: Foo). This makes it much harder to identify genuine traffic. When you combine this with the inability to zoom in, it becomes nearly impossible to manage traffic effectively at busy airports.

## Drama Alert

Whilst I was scheduling time to develop my radar, I discovered that someone else had already developed one. [GeoFS-FlightRadar](https://github.com/seabus0316/GeoFS-flightradar/) was a brilliant upgrade from the official radar. I had been using it for weeks until it suddenly went offline. I had a chat with the developer, and it turned out there were severe bandwidth issues, particularly when a large number of GeoFS pilots were using the radar simultaneously.

This added another necessary "feature" to my version of the project: the application needed to be extremely bandwidth-efficient.

## My implementation

Here are the key focal points I wanted to prioritise for my version:
- Accurate flight information
- The exclusion of "Foos"
- Minimal bandwidth usage without compromising on features

Introducing [GeoFS-Radar](https://geofs-radar.vercel.app). This is a fork of the original GeoFS-FlightRadar but built on the T3 stack. Here is how I addressed the issues I was facing:

- **Flight information:** regarding altitude, I implemented logic to use MSL below FL180 and ASL at and above FL180. Additionally, the interface displays both ASL and MSL on a sidebar containing all the details about the flight. For speed, I ensured that the user-side of the app transmits the current speed with every position update request.
- **Exclude Foos:** Whilst it is not entirely possible to completely block them since anyone can install the user script and begin sending data, I have configured the system to display these flights as "unknown". Usually, these "Foos" are new or occasional players who do not use add-ons, so it has not been a major issue thus far.
- **Low Bandwidth:** The user script operates on a smart polling system. It checks if anyone is currently viewing the radar. If a controller is watching, it sends your flight's information every 3 seconds. If no one is on the radar screen, it halts data transmission and simply checks for radar viewers every 5 seconds.

## Further Enhancements

Beyond fixing the core issues of the original map, I added several new features to specifically aid controllers in their workflow:

- **Heading Mode:** This feature simplifies vectoring significantly. It allows controllers to calculate the precise heading required to get an aircraft from Point A to Point B directly on the map interface.
- **Detailed Flight Planning:** The radar now supports charting flight plans with granular detail. It displays the specific speed and altitude restrictions an aircraft should observe at a given waypoint, whilst also tracking the flight's progression along the planned route.
- **Airport Data:** I have added charting for airports that includes vital information such as their communication frequencies. This ensures controllers have immediate access to the data needed for hand-offs and radio contact.

![image of the radar](/img/guides/2025/flightradar24-for-geofs/radar.png)

## Conclusion

By rebuilding the radar with the T3 stack and implementing intelligent data transmission, GeoFS-Radar provides a robust solution for the community. It solves the critical lag and data accuracy problems of the official map while respecting server bandwidth. For controllers and serious pilots alike, this offers the precision required for a realistic flight simulation experience, finally allowing for proper separation and ground control management.