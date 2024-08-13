class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
        <header class="shadow py-2 bg-dark-green">
        <div class="col">
            <div id="topBanner" class="container-fluid d-flex flex-wrap justify-content-center w-75 rounded-1">
                <a id="ctaLink" href="/" class="d-flex align-items-center mb-3 mb-lg-0 text-white text-decoration-none link-info">
                    <span class="me-2">Join Our Personalized Nutrition Demo For Free</span>
                    <i class="bi bi-arrow-right-short" style="font-size: 19px; margin-top:4px;"></i>
                </a>
            </div>
            <span class="divider py-2 pb-0"></span>
            <navbar-component is-header></navbar-component>
            </div>
        </header>
        `;
    }
}

customElements.define('header-component', Header);