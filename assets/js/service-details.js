document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const serviceKey = urlParams.get('service') || 'real-estate';
    const service = servicesData[serviceKey] || servicesData['real-estate'];

    // Update Basic Info
    document.title = `${service.title} | SkyLens`;
    document.getElementById('service-title').textContent = service.title;
    document.getElementById('service-subtitle').textContent = service.subtitle;
    document.getElementById('service-header-bg').style.backgroundImage = `url('${service.heroImage}')`;
    document.getElementById('service-main-image').src = service.heroImage;
    document.getElementById('service-overview').textContent = service.overview;
    document.getElementById('service-overview-extended').textContent = service.overviewExtended;

    // Update Features
    const featuresContainer = document.getElementById('service-features');
    const half = Math.ceil(service.features.length / 2);
    const col1 = service.features.slice(0, half);
    const col2 = service.features.slice(half);

    const renderFeatures = (features) => {
        return `<div class="col-md-6"><ul class="list-unstyled">
            ${features.map(f => `<li class="mb-3 d-flex"><i class="bi bi-check-circle-fill text-primary me-2"></i><span>${f}</span></li>`).join('')}
        </ul></div>`;
    };

    featuresContainer.innerHTML = renderFeatures(col1) + renderFeatures(col2);

    // Update FAQ
    const faqContainer = document.getElementById('questionsAccordion');
    faqContainer.innerHTML = service.faq.map((item, index) => `
        <div class="accordion-item bg-surface border-0 shadow-sm mb-2 rounded overflow-hidden">
            <h2 class="accordion-header">
                <button class="accordion-button ${index === 0 ? '' : 'collapsed'} bg-surface" type="button" data-bs-toggle="collapse" data-bs-target="#q${index}">
                    ${item.q}
                </button>
            </h2>
            <div id="q${index}" class="accordion-collapse collapse ${index === 0 ? 'show' : ''}" data-bs-parent="#questionsAccordion">
                <div class="accordion-body text-secondary">
                    ${item.a}
                </div>
            </div>
        </div>
    `).join('');

    // Update Pricing
    const pricingContainer = document.getElementById('service-pricing');
    pricingContainer.innerHTML = service.pricing.map(p => `
        <div class="col-md-6">
            <div class="card bg-surface border shadow-sm h-100 rounded-4">
                <div class="card-body p-4">
                    <h5 class="fw-bold">${p.name}</h5>
                    <div class="d-flex align-items-baseline mb-2">
                        <h3 class="text-primary fw-bold mb-0">${p.price}</h3>
                    </div>
                    <p class="small text-secondary mb-3">${p.desc}</p>
                    <hr>
                    <ul class="list-unstyled small text-secondary">
                        ${p.items.map(i => `<li><i class="bi bi-check me-2"></i>${i}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    `).join('');

    // Update Sidebar Navigation
    const otherServicesList = document.getElementById('other-services-list');
    const currentPath = window.location.pathname;

    otherServicesList.innerHTML = Object.keys(servicesData).map(key => {
        const item = servicesData[key];
        const isActive = key === serviceKey;
        return `
            <a href="service-details.html?service=${key}" 
               class="list-group-item list-group-item-action bg-transparent border-bottom ${isActive ? 'active text-primary fw-bold' : ''}">
               ${item.title}
            </a>
        `;
    }).join('');
});
