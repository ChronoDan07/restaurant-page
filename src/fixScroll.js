export function adjustFooterPosition(){
    const footer = document.querySelector('footer');
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = window.scrollY;

    if (scrolled >= scrollableHeight) {
        footer.style.position = 'static';
        // footer.style.backgroundColor = "red";
    } else {
        // footer.style.backgroundColor = "green";
        footer.style.position = 'fixed';
        footer.style.bottom = '0';
    }
}

