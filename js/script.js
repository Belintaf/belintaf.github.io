// Pequeño script para hacer funcionar el menú hamburguesa
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('nav').classList.toggle('active');
            document.querySelector('.overlay').classList.toggle('active');
        });

        document.querySelector('.overlay').addEventListener('click', function() {
            document.querySelector('nav').classList.remove('active');
            document.querySelector('.overlay').classList.remove('active');
        });