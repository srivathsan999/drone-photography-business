const servicesData = {
    "real-estate": {
        title: "Real Estate Photography",
        subtitle: "Showcase properties from breathtaking angles.",
        heroImage: "assets/images/services/service-1.jpg",
        overview: "In the competitive real estate market, visuals are everything. Our drone photography and videography services provide potential buyers with a comprehensive view of the property, including the roof condition, surrounding neighborhood, and proximity to amenities.",
        overviewExtended: "Whether it's a cozy residential home or a sprawling commercial complex, our licensed pilots ensure every shot contributes to a compelling narrative that helps you sell faster.",
        features: [
            "4K Ultra HD Video Tours",
            "20MP HDR Aerial Photos",
            "Property Line Overlays",
            "Twilight / Golden Hour Shoots",
            "Interior Fly-Throughs (FPV)",
            "24-Hour Turnaround Time"
        ],
        faq: [
            { q: "Are you FAA certified?", a: "Yes, all our pilots are FAA Part 107 certified." },
            { q: "What happens if it rains?", a: "We monitor weather closely and reschedule at no cost if conditions are unsafe." }
        ],
        pricing: [
            { name: "Standard Package", price: "$299", desc: "Perfect for residential listings.", items: ["10 Aerial Photos", "30 Sec Video Edit"] },
            { name: "Premium Package", price: "$549", desc: "For luxury estates.", items: ["25 Aerial Photos", "2 Min 4K Video Tour", "Interior FPV shots"] }
        ]
    },
    "construction": {
        title: "Construction Monitoring",
        subtitle: "Track progress and ensure site safety.",
        heroImage: "assets/images/services/service-2.jpg",
        overview: "Construction drone services provide real-time site updates, high-resolution orthomosaic maps, and 3D modeling. This helps project managers monitor progress without being on-site 24/7.",
        overviewExtended: "Our regular flights can document every stage of construction, from excavation to final landscaping, providing valuable data for stakeholders and marketing.",
        features: [
            "Weekly Progress Reports",
            "Orthomosaic Site Mapping",
            "3D Volumetric Measurements",
            "Site Safety Inspections",
            "Marketing Timelapses",
            "BIM Integration Support"
        ],
        faq: [
            { q: "How often can you fly?", a: "We can fly daily, weekly, or bi-weekly depending on your project needs." },
            { q: "Can you provide 3D models?", a: "Yes, we generate high-precision 3D point clouds and textured meshes." }
        ],
        pricing: [
            { name: "Site Visit", price: "$350", desc: "Single progress update.", items: ["Photo Set", "Raw Video Clips"] },
            { name: "Monthly Plan", price: "$1,200", desc: "4 visits per month.", items: ["Progress Reports", "Mapping Data", "Timelapse Video"] }
        ]
    },
    "events": {
        title: "Event Coverage",
        subtitle: "Capture the energy of your special moments.",
        heroImage: "assets/images/services/service-3.jpg",
        overview: "From music festivals to weddings, drones capture the scale and atmosphere of events like no other camera can. We provide dynamic cinematic angles that would be impossible with traditional cranes.",
        overviewExtended: "Our pilots are experienced in flying over crowds safely (with proper waivers) and capturing candid moments from high above.",
        features: [
            "Full Event Highlights",
            "Live Stream Integration",
            "Crowd Scale Shots",
            "Action Tracking",
            "4K Raw Footage",
            "Social Media Ready Clips"
        ],
        faq: [
            { q: "Do you fly over crowds?", a: "We follow FAA regulations for flights over people, using specialized safety equipment when required." },
            { q: "Can you live stream?", a: "Yes, we can feed the drone view directly into your production switcher." }
        ],
        pricing: [
            { name: "Half Day", price: "$499", desc: "Up to 4 hours of coverage.", items: ["Edited Highlight", "Photo Gallery"] },
            { name: "Full Day", price: "$899", desc: "Full day event coverage.", items: ["Cinematic Feature", "Live Feed Support", "Unlimited Photos"] }
        ]
    },
    "production": {
        title: "Film & TV Production",
        subtitle: "Cinema-grade aerial cinematography.",
        heroImage: "assets/images/portfolio/portfolio-1.jpg",
        overview: "We provide professional aerial cinematography for films, commercials, and documentaries. Our fleet includes heavy-lift drones and FPV drones capable of high-speed chases.",
        overviewExtended: "Working closely with Directors of Photography, we achieve the exact camera movement and framing required for your production.",
        features: [
            "ProRes / CinemaDNG RAW",
            "Dual Operator Setup",
            "High-Speed FPV Chases",
            "Precision Waypoint Flight",
            "Wireless HD Client Feed",
            "Indoors/Tight Space Flight"
        ],
        faq: [
            { q: "What cameras do you use?", a: "We use DJI Inspire 3 with X9-Air and specialized FPV rigs with RED/Arri cameras." },
            { q: "Are you union friendly?", a: "Yes, we have experience working with various production unions and guilds." }
        ],
        pricing: [
            { name: "Single Op", price: "$1,200", desc: "Day rate for single pilot.", items: ["Inspire 3 / Mavic 3 Pro", "Standard Logistics"] },
            { name: "Full Crew", price: "Custom", desc: "Pilot + Camera Op + Tech.", items: ["Heavy Lift Rigs", "FPV Support", "Full Logistics"] }
        ]
    },
    "inspection": {
        title: "Industrial Inspection",
        subtitle: "Safe and detailed visual analysis.",
        heroImage: "assets/images/portfolio/portfolio-2.jpg",
        overview: "Drones are the safest and most cost-effective way to inspect infrastructure. We eliminate the need for scaffolding or climbing in dangerous environments.",
        overviewExtended: "Using high-zoom and thermal cameras, we detect issues like thermal leaks, structural cracks, and corrosion that are invisible to the naked eye.",
        features: [
            "Thermal Leak Detection",
            "High-Zoom Visuals (30x)",
            "Roof & Tower Inspection",
            "Solar Panel Analysis",
            "AI-Powered Issue Detection",
            "Detailed Post-Flight Reports"
        ],
        faq: [
            { q: "Is it safer than manual?", a: "Significantly. We keep personnel on the ground while the drone does the dangerous work." },
            { q: "What reporting do you provide?", a: "Interactive online reports with geo-tagged issues and high-res imagery." }
        ],
        pricing: [
            { name: "Visual Scan", price: "$450", desc: "High-res physical inspection.", items: ["Detailed Photos", "Issue Log"] },
            { name: "Thermal Scan", price: "$750", desc: "Thermal data analysis.", items: ["Radiometric Data", "Full Report"] }
        ]
    },
    "mapping": {
        title: "Mapping & Surveying",
        subtitle: "High-precision geospatial data.",
        heroImage: "assets/images/portfolio/portfolio-3.jpg",
        overview: "Aerial mapping provides centimeter-level accuracy for land surveying, environmental monitoring, and urban planning. Our data integrates seamlessly with GIS and CAD software.",
        overviewExtended: "We use RTK-enabled drones to capture data that can be used for volumetric calculations, drainage analysis, and topographical maps.",
        features: [
            "Centimeter-Level Accuracy",
            "3D Point Clouds & Meshes",
            "Volumetric Analysis",
            "Digital Elevation Models",
            "GIS/CAD Integration",
            "Environmental Monitoring"
        ],
        faq: [
            { q: "What is the accuracy?", a: "With GCPs or RTK, we achieve horizontal and vertical accuracy under 3cm." },
            { q: "What file types do you deliver?", a: ".las, .obj, .geotiff, and .dwg files are standard." }
        ],
        pricing: [
            { name: "Area Map", price: "$600", desc: "Up to 50 acres mapping.", items: ["Orthomosaic Map", "DEM Model"] },
            { name: "Complete Survey", price: "Custom", desc: "Large scale or complex terrain.", items: ["Full 3D Model", "Volumetric Reports", "RTK Data"] }
        ]
    }
};
