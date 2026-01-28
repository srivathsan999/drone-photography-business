# Download Bootstrap
Invoke-WebRequest -Uri "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" -OutFile "drone-photography-business/assets/css/bootstrap.min.css"

# Download Images
# Hero
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/hero/hero-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?q=80&w=2600&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/hero/hero-2.jpg"

# Services
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2573&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/services/service-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2631&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/services/service-2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1511578314322-379afb476865?q=80&w=2612&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/services/service-3.jpg"

# Portfolio
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2613&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/portfolio/portfolio-1.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2600&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/portfolio/portfolio-2.jpg"
Invoke-WebRequest -Uri "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2600&auto=format&fit=crop" -OutFile "drone-photography-business/assets/images/portfolio/portfolio-3.jpg"

Write-Host "Assets Downloaded Successfully"
