class Footer extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
        <footer class="py-4 bg-dark-green text-white">   
         <div class="container-fluid">
          <navbar-component></navbar-component>
           <div id="footerInfoBar" class="container-fluid d-flex flex-wrap justify-content-center w-75 rounded-1">
             <div class="row d-flex justify-content-between align-items-center">
               <div class="col-sm-7 d-flex flex-grow-1 flex-wrap align-items-center" style="gap: 20px;">
                  <a class="footerInfoItems email text-white link-info text-decoration-none btn" href="mailto:hello@squareup.com">hello@squareup.com</a>
                  <a class="footerInfoItems phone text-white link-info text-decoration-none btn" href="tel:+9191813232309">+91 91813 23 2309</a>
                  <a class="footerInfoItems map text-white link-info text-decoration-none btn" href="#">Somewhere in the World</a>
                </div>
             <div class="col-sm-3 d-flex justify-content-end align-items-center">
                  <span>© ${year} Nutritionist. All rights reserved.</span>
              </div>
            </div>
          </div>
         </div>
        </footer>`;
    }
}

customElements.define('footer-component', Footer);