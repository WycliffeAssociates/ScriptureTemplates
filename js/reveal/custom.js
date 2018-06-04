// Create an instance of Meny
    var meny = Meny.create({
    // The element that will be animated in from off screen
    menuElement: document.querySelector('.meny'),

    // The contents that gets pushed aside while Meny is active
    contentsElement: document.querySelector('.reveal'),

    // [optional] The alignment of the menu (top/right/bottom/left)
    position: Meny.getQuery().p || 'left',

    // [optional] The height of the menu (when using top/bottom position)
    height: 200,

    // [optional] The width of the menu (when using left/right position)
    width: 300,

    // [optional] Distance from mouse (in pixels) when menu should open
    threshold: 40,

    // [optional] Use mouse movement to automatically open/close
    mouse: true,

    // [optional] Use touch swipe events to open/close
    touch: true
});

// API Methods:
// meny.open();
// meny.close();
// meny.isOpen();

// Events:
// meny.addEventListener( 'open', function(){ console.log( 'open' ); } );
// meny.addEventListener( 'close', function(){ console.log( 'close' ); } );


var flyOutNotes;

// Full list of configuration options available here:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: false,
    width: '100%',
    height: '100%',
    margin: 0,

    theme: Reveal.getQueryHash().theme, // available themes are in /css/theme
    transition: Reveal.getQueryHash().transition || 'fade', // default/cube/page/concave/zoom/linear/fade/none

    // Parallax scrolling
    // parallaxBackgroundImage: 'https://s3.amazonaws.com/hakim-static/reveal-js/reveal-parallax-1.jpg',
    // parallaxBackgroundSize: '2100px 900px',

    // Optional libraries used to extend on reveal.js
    dependencies: [
        {
            src: '/js/reveal/classList.js', condition: function () {
            return !document.body.classList;
        }
        },
        {
            src: '/js/reveal/marked.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
        },
        {
            src: '/js/reveal/markdown.js', condition: function () {
            return !!document.querySelector('[data-markdown]');
        }
        },
        {
            src: '/js/reveal/highlight.js', async: true, callback: function () {
            hljs.initHighlightingOnLoad();
        }
        },
        {
            src: '/js/reveal/zoom.js', async: true, condition: function () {
            return !!document.body.classList;
        }
        },
        {
            src: '/js/reveal/obs-notes.js', async: true, callback: function () {
            flyOutNotes = new FlyOutNotes();
            window.addEventListener('hashchange', function () {
                flyOutNotes.loadNotes()
            });
        }
        }
    ]
});
