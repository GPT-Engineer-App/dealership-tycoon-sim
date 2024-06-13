# dealership-tycoon-sim

Dealership Tycoon Game Design Document
Overview
Dealership Tycoon is a simulation game where players manage and expand their auto dealership. The game involves buying, reconditioning, and selling cars, managing service operations, hiring and training staff, and upgrading the dealership. The goal is to grow the dealership by making profitable decisions and keeping customers satisfied.

Game Mechanics
Core Gameplay Loop
Purchase Vehicles:

Players purchase used cars from a random selection.
Each car has a purchase price, estimated profit, and wildcard rating indicating the chance of hidden issues.
Recondition Vehicles:

Mechanics inspect and repair purchased vehicles.
Reconditioning reveals any hidden issues that affect profit margins.
Sell Vehicles:

Salesmen sell reconditioned vehicles to customers.
Sales process involves interactions with sales managers and finance managers.
Service Vehicles:

Customers bring their cars for service.
Service advisors, mechanics, and porters manage the service flow.
Players must balance service capacity and customer satisfaction.
Manage Staff:

Hire and train salesmen, mechanics, service advisors, porters, sales managers, and finance managers.
Each staff member has levels (up to 20) affecting their task speed and efficiency.
Upgrade Dealership:

Upgrade various aspects of the dealership, such as adding more lot spots, service bays, and improving facilities.
Upgrades increase capacity and efficiency.
Expand Dealership:

Purchase additional dealership locations in the city.
Each new location requires management and offers unique challenges.
Purchase new brands for expanded dealerships.
Detailed Features
1. Vehicle Purchase System
Random Vehicle List:
Generate a random list of cars for purchase with varying prices, profits, and wildcard ratings.
Hidden Costs:
Hidden costs are revealed during reconditioning based on the wildcard rating.
2. Vehicle Reconditioning
Inspection and Repair:
Mechanics inspect and repair cars, revealing hidden issues.
Mechanic Types:
Separate mechanics for reconditioning purchased cars and servicing customer cars.
Reconditioning Process:
Vehicles move from the lot to the mechanic’s bay and back to the lot once reconditioned.
3. Sales Process
Customer Interaction:
Salesmen interact with customers, initiating the sales process.
Sales Workflow:
Salesman -> Sales Manager -> Finance Manager -> Customer finalizes the purchase.
Customer Satisfaction:
Manage bottlenecks and ensure enough staff to handle sales efficiently.
4. Service Process
Service Flow:
Service advisors greet customers, porters move cars, mechanics repair, and porters return cars to customers.
Service Efficiency:
Balance the number of service advisors, porters, and mechanics to keep customers satisfied.
5. Staff Management
Employee Levels:
Staff levels range from 1 to 20, affecting task speed and efficiency.
Training:
Employees gain experience through tasks and level up.
Employee Types:
Salesmen, Mechanics, Service Advisors, Porters, Sales Managers, Finance Managers.
6. Dealership Upgrades
Upgrade Options:
Expand lot spots for vehicles, add service bays, improve facilities for better customer satisfaction.
Upgrade Benefits:
Increased capacity and efficiency, reduced bottlenecks, and higher customer satisfaction.
7. Expanding Dealership
New Locations:
Purchase additional dealership locations.
Unique Challenges:
Each location has specific challenges and opportunities.
New Brands:
Purchase and manage new car brands for expanded dealerships, diversifying the inventory and attracting different customer segments.
Technical Details
Technologies and Tools
Game Engine: Phaser.js for game development.
Languages: JavaScript, HTML, CSS.
Backend (if needed): Node.js for server-side logic (optional).
Database (if needed): MongoDB or Firebase for persistent data storage (optional).
Data Structure
Vehicle Object:

VIN
Year
Make
Model
Location
Status (e.g., 'For Sale', 'In Service')
Reconditioning Cost
Sale Price
Hidden Issues
Estimated Profit
Wildcard Rating
Employee Object:

ID
Type (e.g., 'Salesman', 'Mechanic')
Level
Experience
Task Speed (calculated based on level)
Dealership Object:

Name
Location
Lot Capacity
Service Capacity
Vehicles (array of Vehicle objects)
Employees (array of Employee objects)
Upgrades (array of Upgrade objects)
UI Design
Main Dashboard:

Overview of dealership status, including number of vehicles for sale, in service, total staff, and financials.
Access to different sections: Vehicle Purchase, Sales, Service, Staff Management, Upgrades, Expansion.
Vehicle Purchase Screen:

List of available cars for purchase with details.
Purchase button and estimated profit display.
Reconditioning Screen:

Status of vehicles being reconditioned.
Mechanic assignment and progress bars.
Sales Screen:

List of vehicles for sale.
Customer interaction simulation with steps: Salesman -> Sales Manager -> Finance Manager.
Service Screen:

List of service requests.
Service advisor, porter, and mechanic assignment.
Staff Management Screen:

List of employees with levels and experience.
Training options and performance metrics.
Upgrades Screen:

Available upgrades with descriptions and costs.
Upgrade progress and benefits.
Expansion Screen:

Map of the city with available dealership locations.
Purchase options and unique challenges for each location.
Options to purchase new brands for expanded dealerships.
Game Progression
Initial Setup:
Start with a small dealership, limited lot spots, and basic staff.
Growth and Expansion:
Expand by making profitable decisions, upgrading facilities, and hiring/training staff.
Challenges:
Random events (e.g., economic downturns, increased demand for specific car types).
Balancing customer satisfaction with operational efficiency.
Performance Metrics
Customer Satisfaction:

Measured by a 5-star rating system.
Affects customer arrival rates and dealership reputation.
Financial Performance:

Track income, expenses, and profit margins.
Financial goals and milestones.
Staff Efficiency:

Employee performance metrics.
Impact of training and upgrades on efficiency.

## Collaborate with GPT Engineer

This is a [gptengineer.app](https://gptengineer.app)-synced repository 🌟🤖

Changes made via gptengineer.app will be committed to this repo.

If you clone this repo and push changes, you will have them reflected in the GPT Engineer UI.

## Tech stack

This project is built with React and Chakra UI.

- Vite
- React
- Chakra UI

## Setup

```sh
git clone https://github.com/GPT-Engineer-App/dealership-tycoon-sim.git
cd dealership-tycoon-sim
npm i
```

```sh
npm run dev
```

This will run a dev server with auto reloading and an instant preview.

## Requirements

- Node.js & npm - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)
