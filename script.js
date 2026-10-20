(function() {
    var overlay = document.getElementById('dark-overlay');
    var box = document.getElementById('modal-box');
    var gifDuration = parseInt(document.getElementById('minion-gif').dataset.duration);

    setTimeout(function() {
        var gif = document.getElementById('minion-gif');
        gif.src = '';
        gif.src = 'images/minions GIF.gif';
        gif.style.animationPlayState = 'paused';

        overlay.classList.add('active');
        setTimeout(function() {
            box.classList.add('active');
            document.getElementById('shorten-btn').addEventListener('click', function() {
                if (document.getElementById('url-input').value.trim() === '') return;
                box.classList.toggle('shrunk');
            });
        }, 300);
    }, 2300 + gifDuration);
})();
