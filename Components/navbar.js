class Navbar extends HTMLElement {
    constructor() {
        super();       
    }

    connectedCallback() {
        const isHeader = this.hasAttribute('is-header');
        console.log(isHeader);
        this.renderNavbar(isHeader);
    }

    renderNavbar(isHeader) {
        this.innerHTML = `
        <nav class="navbar navbar-expand-sm w-75 d-flex mx-auto">
            <div class="container-fluid p-0">
                <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerflex-1" aria-controls="navbarTogglerflex-1" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse align-items-baseline" id="navbarTogglerflex-1">
                    <div class="col-sm-1">
                        <a class="navbar-brand" href="#">
                            <img src="/images/Logo.png">
                        </a>
                    </div>
                    <div class="collapse navbar-collapse ${isHeader ? 'justify-content-end' : 'col-sm-3 d-flex justify-content-between'}" id="navbarTogglerflex-1">

                         <ul class="navbar-nav ${isHeader ? 'mb-2 mb-sm-0' : 'mx-auto mb-2 mb-sm-0 justify-content-center'}">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">About</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Team</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Process</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Pricing</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Blog</a>
                            </li>
                            ${!isHeader ? `
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact</a>
                            </li>` : ''}
                        </ul>
                    </div>
                    ${!isHeader ? `
                    <div class="col-sm-30 d-flex justify-content-end">
                       <div class="d-flex align-items-center">
                        <span class="me-2 text-white">Go To Top</span>
                        <a class="goOnTop link-info text-white text-decoration-none d-flex align-items-center justify-content-center" style=" cursor:pointer; border-radius: 50%; width: 62px; height: 62px; background-color:#2C5446; transition: background-color 0.3s;">
                            <i class="bi bi-arrow-up-short" style="font-size: 19px;"></i>
                        </a>
                    </div>` : ''}
                    ${isHeader ? `
                    <a class="btn btn-primary fw-bolder fs-6 btn-lg btnContact ms-4">Contact Us</a>` : ''}
                </div>
            </div>
        </nav>
        `;
    }
}

customElements.define('navbar-component', Navbar);
