// preloader
window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 500);
    document.body.style.overflow = 'auto';

    // animation block
    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('el-show');
            }
        });
    }
    let options = {
        threshold: [0.3]
    };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.el');

    for (let elm of elements) {
        observer.observe(elm);
    }
    
    let placeholderBlock = document.querySelectorAll('.portfolio .info-block .block .img');
    
    placeholderBlock.forEach(el => {
       el.style.display = 'block';
    });
};

$('.portfolio-menu button.btn').on('click', function () {
    $('.portfolio-menu button.btn').removeClass('active');
    $(this).addClass('active');

    var id = $(this).attr('data-filter'),
        content = $('.vm-portfolio .vm-portfolio-area .vm-portfolio-item[data-filter="' + id + '"]');

    if (id == '*') {
        $('.vm-portfolio .vm-portfolio-area .vm-portfolio-item').addClass('active');
    } else {
        $('.vm-portfolio .vm-portfolio-area .vm-portfolio-item.active').removeClass('active');
        content.addClass('active');
    }
});