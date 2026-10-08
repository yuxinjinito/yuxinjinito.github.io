

const content_dir = 'contents/'
const config_file = 'config.yml'
// Sections that actually exist on the page (project is temporarily removed)
const section_names = ['home', 'publications', 'awards']


// Give each #### block of home.md (Biography, Research Interests, ...) its own
// full-width section, then alternate light/gray backgrounds down the page.
function splitHomeIntoSections() {
    const body = document.getElementById('home-md');
    let after = document.getElementById('home');
    let current = null;
    [...body.childNodes].forEach(node => {
        if (node.nodeName === 'H4' && node.textContent.trim() !== 'News') {
            const section = document.createElement('section');
            section.className = 'home-part';
            section.id = 'home-' + node.textContent.trim().toLowerCase().replace(/\s+/g, '-');
            section.innerHTML = '<div class="container px-5"><div class="main-body"></div></div>';
            after.after(section);
            after = section;
            current = section.querySelector('.main-body');
        }
        if (current) current.appendChild(node);
    });
    // The <br> spacers between blocks are no longer needed once each block has its own padding.
    document.querySelectorAll('#home-md > p, .home-part .main-body > p').forEach(p => {
        if (p.innerHTML.trim() === '<br>') p.remove();
    });
    document.querySelectorAll('section:not(.top-section)').forEach((section, i) => {
        section.classList.remove('bg-gradient-primary-to-secondary-light', 'bg-gradient-primary-to-secondary-gray');
        section.classList.add(i % 2 ? 'bg-gradient-primary-to-secondary-gray' : 'bg-gradient-primary-to-secondary-light');
    });
}


window.addEventListener('DOMContentLoaded', event => {
    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // Yaml
    fetch(content_dir + config_file)
        .then(response => response.text())
        .then(text => {
            const yml = jsyaml.load(text);
            Object.keys(yml).forEach(key => {
                try {
                    document.getElementById(key).innerHTML = yml[key];
                } catch {
                    console.log("Unknown id and value: " + key + "," + yml[key].toString())
                }

            })
        })
        .catch(error => console.log(error));


    // Marked
    marked.use({ mangle: false, headerIds: false })
    section_names.forEach((name, idx) => {
        fetch(content_dir + name + '.md')
            .then(response => response.text())
            .then(markdown => {
                const html = marked.parse(markdown);
                document.getElementById(name + '-md').innerHTML = html;
                if (name === 'home') splitHomeIntoSections();
            }).then(() => {
                // MathJax
                MathJax.typeset();
            })
            .catch(error => console.log(error));
    })

}); 
