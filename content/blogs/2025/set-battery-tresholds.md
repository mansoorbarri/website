---
title: "How to Set Battery Thresholds on Linux"
description: "A very simple guide to setting battery thresholds on Linux for your laptops."
date: "2025-01-01"
url: "/set-battery-tresholds/"
draft: false
categories: 
  - Linux 
tags:
  - Battery
---

As a ThinkPad T480 user, I wanted to implement automatic battery charging controls to optimize battery life while maintaining flexibility for mobile use. This is particularly useful when you don't have a fixed schedule and need your laptop to be ready for unexpected outings while preserving battery health.

## Setting Charging Thresholds 

You can set both start and stop charging thresholds just by enterting two commands in therminal. 

### Start charging

To set the battery level at which charging begins, use this command:

```bash
echo 25 | sudo tee /sys/class/power_supply/BAT0/charge_start_threshold
```
This example sets the laptop to start charging when the battery falls below 25%.

### Stop charging

To set the battery level at which charging stops, use this command:

```bash
echo 80 | sudo tee /sys/class/power_supply/BAT0/charge_stop_threshold
```
This example sets the laptop to stop charging once the battery reaches 80%.

thats really it. 

### Why These Thresholds?

Setting charging thresholds between 25% and 80% helps extend battery lifespan by preventing both complete discharge and constant full charging. This range provides enough capacity for mobile use while minimizing battery wear.

*Note: These settings persist across reboots, so you only need to configure them once.*