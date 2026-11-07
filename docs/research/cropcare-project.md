# CropCare project sources

Inspected on November 6, 2026. The team's issue tracker lives in the archived repository `jac-cs-capstone-w24/final-project-cropcare` (archived March 14, 2026). The public mirror `carsonSgit/CropCare` at `bccfd15` holds the code.

## Milestones

| Milestone | Due | Issues | Carson's | Focus |
|---|---|---|---|---|
| 2 | Apr 22, 2024 | 22 | 3 | Hardware interfaces: sensors and actuators on the Pi |
| 3 | Apr 29, 2024 | 48 | 15 | Mobile app: navigation, auth, settings, monitoring and control pages, models |
| 4 | May 10, 2024 | 9 | 2 | Pi to Azure IoT Hub telemetry; planned Cosmos DB storage |
| 5 | May 14, 2024 | 1 | 1 | Connect the app to IoT Hub |
| 6 | May 17, 2024 | 0 | 0 | Control actuators remotely (no issues filed) |
| 7 | May 21, 2024 | 22 | 3 | Nice-to-haves, bug fixes, polish, the physical farm |

Four issues carry no milestone (the API epic, two endpoint stories, teacher feedback). Total: 106 issues.

## Epics (16)

- **Milestone 2:** Monitor Farm Container Activities (#29), Create Hardware Control Systems (#30)
- **Milestone 3:** Create Login/Signup System (#31), Create Supporting App Infrastructure (#33), Create Settings Page (#39), Create GPS Monitoring Page (#43), Create Remote Control Page (#46), Create Models and Database Services (#62), Create Models and Interfaces (#80), Create Add Farm Page (#82)
- **Milestone 4:** Allow Users To Use Farm Icons (#127), Collect Sensor Telemetry Data (#132)
- **Milestone 7:** Setup Azure Database (#34), Complete Monitoring Page (#49), Build Container Farm (#150)
- **No milestone:** Create Monitoring/Remote Control API (#35)

## Carson's assigned issues (24)

- **Milestone 2:** Collect GPS Location (#5), Read Vibration Levels (#7), Read Noise Levels (#9)
- **Milestone 3:** Implement a Logout Button (#25), Create Navigation System (#27), Access Environment Variables (#32), Create Supporting App Infrastructure (#33, epic), Create Color Themes (#36), Design Settings Page (#38), Create Settings Page (#39, epic), Display Container State (#44), Control Container State (#45), Create Remote Control Page (#46, epic), Display Crop Data (#47), Create UML Diagrams (#53), Fix Logout Button (#87), Add Farm Page Navigation (#96), Create Security Page (#114)
- **Milestone 4:** Create README Setup Guide (#123), Add Documentation (#128)
- **Milestone 5:** Remodel UML Diagrams (#141)
- **Milestone 7:** Fix Farm Page Dark Mode UI (#99), Data Visualization (#144), Create Hardware Design Mockups (#147)

## Editorial consequences

- Milestones 4 and 6 planned Cosmos DB for long-term telemetry. No Cosmos code exists at `bccfd15`; the app keeps readings in memory and charts the last ten points.
- Milestone 6 holds no issues, so the timeline shows it as empty rather than inventing its contents.
