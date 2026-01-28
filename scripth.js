/**
 * Netflix Home Page - JavaScript
 * Handles movie data, dynamic rendering, scrolling, and interactions
 */

// ========================================
// MOVIE DATA STRUCTURE
// ========================================
// Each row contains 15+ movies with title and poster image URL
// Images are sourced from Unsplash for demonstration purposes

const movieData = {
    trending: {
        title: "Trending Now",
        movies: [
            { title: "The Dark Knight", poster: "assets/images/darkknight.jpg" },
            { title: "Inception", poster: "assets/images/incep.jpg" },
            { title: "Interstellar", poster: "assets/images/inter.jpg" },
            { title: "The Matrix", poster: "assets/images/matrix.jpg" },
            { title: "Avatar", poster: "assets/images/avatar.jpg" },
            { title: "Avengers: Endgame", poster: "assets/images/end game.jpg" },
            { title: "The Shawshank Redemption", poster: "assets/images/shawshank.jpg" },
            { title: "Pulp Fiction", poster: "assets/images/pulp fiction.jpg" },
            { title: "Forrest Gump", poster: "assets/images/gump.jpg" },
            { title: "The Godfather", poster: "assets/images/god father.jpg" },
            { title: "The Lord of the Rings", poster: "assets/images/rings.jpg" },
            { title: "Fight Club", poster: "assets/images/fightclub.jpg" },
            { title: "Gladiator", poster: "assets/images/gladiator.jpg" },
            { title: "Titanic", poster: "assets/images/titanic.jpg" },
            { title: "Jurassic Park", poster: "assets/images/jurasssic.jpg" },
            { title: "Star Wars", poster: "assets/images/star wars.jpg" }
        ]
    },
    action: {
        title: "Action & Adventure",
        movies: [
            { title: "Mad Max: Fury Road", poster: "assets/images/mad max.jpg" },
            { title: "John Wick", poster: "assets/images/john.jpg" },
            { title: "Mission: Impossible", poster: "assets/images/mission.jpg" },
            { title: "Die Hard", poster: "assets/images/die.jpg" },
            { title: "The Bourne Identity", poster: "assets/images/bourne.jpg" },
            { title: "Taken", poster: "assets/images/taken.jpg" },
            { title: "Casino Royale", poster: "assets/images/casino.jpg" },
            { title: "The Raid", poster: "assets/images/raid.jpg" },
            { title: "Kingsman", poster: "assets/images/kingsman.jpg" },
            { title: "Fast & Furious", poster: "assets/images/fnf.jpg" },
            { title: "Extraction", poster: "assets/images/extraction.jpg" },
            { title: "Black Panther", poster: "assets/images/black panther.jpg" },
            { title: "Wonder Woman", poster: "assets/images/ww.jpg" },
            { title: "Thor: Ragnarok", poster: "assets/images/thor.jpg" },
            { title: "Guardians of the Galaxy", poster: "assets/images/gg.jpg" },
            { title: "Spider-Man", poster: "assets/images/spidey.jpg" }
        ]
    },
    scifi: {
        title: "Sci-Fi & Fantasy",
        movies: [
            { title: "Blade Runner 2049", poster: "assets/images/blade.jpg" },
            { title: "Dune", poster: "assets/images/dune.jpg" },
            { title: "The Fifth Element", poster: "assets/images/fifth.jpg" },
            { title: "Arrival", poster: "assets/images/arrival.jpg" },
            { title: "Ex Machina", poster: "assets/images/ex.jpg" },
            { title: "Minority Report", poster: "assets/images/minority.jpg" },
            { title: "Total Recall", poster: "assets/images/total.jpg" },
            { title: "Alien", poster: "assets/images/alien.jpg" },
            { title: "Prometheus", poster: "assets/images/prom.jpg" },
            { title: "Gravity", poster: "assets/images/gravity.jpg" },
            { title: "The Martian", poster: "assets/images/martian.jpg" },
            { title: "District 9", poster: "assets/images/9.jpg" },
            { title: "Edge of Tomorrow", poster: "assets/images/edge.jpg" },
            { title: "Looper", poster: "assets/images/looper.jpg" },
            { title: "Ready Player One", poster: "assets/images/p1.jpg" },
            { title: "Alita: Battle Angel", poster: "assets/images/alita.jpg" }
        ]
    },
    drama: {
        title: "Award-Winning Dramas",
        movies: [
            { title: "The Pursuit of Happyness", poster: "assets/images/pursuit.jpg" },
            { title: "12 Years a Slave", poster: "assets/images/12 Years a Slave.jpg" },
            { title: "Moonlight", poster: "assets/images/Moonlight.jpg" },
            { title: "Schindler's List", poster: "assets/images/Schindler's List.jpg" },
            { title: "Goodfellas", poster: "assets/images/Goodfellas.jpg" },
            { title: "The Green Mile", poster: "assets/images/The Green Mile.jpg" },
            { title: "American Beauty", poster: "assets/images/American Beauty.jpg" },
            { title: "A Beautiful Mind", poster: "assets/images/A Beautiful Mind.jpg" },
            { title: "The Pianist", poster: "assets/images/The Pianist.jpg" },
            { title: "No Country for Old Men", poster: "assets/images/No Country for Old Men.jpg" },
            { title: "There Will Be Blood", poster: "assets/images/There Will Be Blood.jpg" },
            { title: "The Departed", poster: "assets/images/The Departed.jpg" },
            { title: "Million Dollar Baby", poster: "assets/images/Million Dollar Baby.jpg" },
            { title: "Crash", poster: "assets/images/Crash.jpg" },
            { title: "Birdman", poster: "assets/images/Birdman.jpg" },
            { title: "Whiplash", poster: "assets/images/Whiplash.jpg" }
        ]
    },
   
};

// ========================================
// DOM ELEMENTS
// ========================================

const navbar = document.getElementById('navbar');
const movieRowsContainer = document.getElementById('movieRowsContainer');
const mobileMenuToggle = document.getElementById('mobileMenuToggle');

// ========================================
// INITIALIZATION
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Render all movie rows
    renderMovieRows();
    
    // Setup navbar scroll effect
    setupNavbarScroll();
    
    // Setup mobile menu toggle
    setupMobileMenu();
    
    // Log welcome message
    console.log('%c🎬 Netflix Home Page Clone', 'color: #e50914; font-size: 20px; font-weight: bold;');
    console.log('%cBuilt with vanilla HTML, CSS, and JavaScript', 'color: #808080; font-size: 14px;');
});

// ========================================
// RENDER MOVIE ROWS
// ========================================

function renderMovieRows() {
    // Clear container
    movieRowsContainer.innerHTML = '';
    
    // Iterate through each category in movieData
    Object.keys(movieData).forEach((categoryKey, index) => {
        const category = movieData[categoryKey];
        
        // Create movie row element
        const movieRow = createMovieRow(category, index);
        
        // Append to container
        movieRowsContainer.appendChild(movieRow);
    });
}

// ========================================
// CREATE MOVIE ROW
// ========================================

function createMovieRow(category, rowIndex) {
    // Create row wrapper
    const row = document.createElement('div');
    row.className = 'movie-row';
    row.setAttribute('data-row-index', rowIndex);
    
    // Create title
    const title = document.createElement('h2');
    title.className = 'movie-row-title';
    title.textContent = category.title;
    
    // Create slider container
    const slider = document.createElement('div');
    slider.className = 'movie-row-slider';
    
    // Create left scroll button
    const scrollLeft = document.createElement('button');
    scrollLeft.className = 'scroll-btn scroll-btn-left';
    scrollLeft.innerHTML = '‹';
    scrollLeft.setAttribute('aria-label', 'Scroll left');
    scrollLeft.onclick = () => scrollMovieRow(rowIndex, 'left');
    
    // Create right scroll button
    const scrollRight = document.createElement('button');
    scrollRight.className = 'scroll-btn scroll-btn-right';
    scrollRight.innerHTML = '›';
    scrollRight.setAttribute('aria-label', 'Scroll right');
    scrollRight.onclick = () => scrollMovieRow(rowIndex, 'right');
    
    // Create wrapper for overflow
    const wrapper = document.createElement('div');
    wrapper.className = 'movie-row-wrapper';
    
    // Create list of movie cards
    const list = document.createElement('div');
    list.className = 'movie-row-list';
    list.setAttribute('data-row-list', rowIndex);
    
    // Add movie cards to list
    category.movies.forEach((movie, movieIndex) => {
        const card = createMovieCard(movie, rowIndex, movieIndex);
        list.appendChild(card);
    });
    
    // Assemble the row
    wrapper.appendChild(list);
    slider.appendChild(scrollLeft);
    slider.appendChild(wrapper);
    slider.appendChild(scrollRight);
    row.appendChild(title);
    row.appendChild(slider);
    
    return row;
}

// ========================================
// CREATE MOVIE CARD
// ========================================

function createMovieCard(movie, rowIndex, movieIndex) {
    // Create card element
    const card = document.createElement('div');
    card.className = 'movie-card';
    card.setAttribute('data-row', rowIndex);
    card.setAttribute('data-movie', movieIndex);
    
    // Create poster image
    const poster = document.createElement('img');
    poster.className = 'movie-poster';
    poster.src = movie.poster;
    poster.alt = movie.title;
    poster.loading = 'lazy'; // Lazy load images for performance
    
    // Create movie info overlay
    const info = document.createElement('div');
    info.className = 'movie-info';
    
    const title = document.createElement('h3');
    title.className = 'movie-title';
    title.textContent = movie.title;
    
    info.appendChild(title);
    
    // Assemble card
    card.appendChild(poster);
    card.appendChild(info);
    
    // Add click event
    card.onclick = () => handleMovieClick(movie);
    
    return card;
}

// ========================================
// HORIZONTAL SCROLLING LOGIC
// ========================================

function scrollMovieRow(rowIndex, direction) {
    const list = document.querySelector(`[data-row-list="${rowIndex}"]`);
    if (!list) return;
    
    // Get current transform value
    const currentTransform = getComputedStyle(list).transform;
    let currentX = 0;
    
    if (currentTransform !== 'none') {
        const matrix = currentTransform.match(/matrix.*\((.+)\)/);
        if (matrix) {
            const values = matrix[1].split(', ');
            currentX = parseFloat(values[4]) || 0;
        }
    }
    
    // Calculate scroll amount (width of ~3 cards)
    const cardWidth = 200; // Default card width
    const gap = 8; // Gap between cards
    const scrollAmount = (cardWidth + gap) * 3;
    
    // Calculate new position
    let newX = currentX;
    if (direction === 'left') {
        newX = Math.min(currentX + scrollAmount, 0);
    } else {
        const maxScroll = -(list.scrollWidth - list.parentElement.offsetWidth);
        newX = Math.max(currentX - scrollAmount, maxScroll);
    }
    
    // Apply transform
    list.style.transform = `translateX(${newX}px)`;
}

// ========================================
// MOUSE WHEEL SCROLLING (Optional Enhancement)
// ========================================

// Add horizontal scrolling with mouse wheel on movie rows
document.addEventListener('wheel', function(e) {
    const target = e.target.closest('.movie-row-wrapper');
    if (target) {
        e.preventDefault();
        const list = target.querySelector('.movie-row-list');
        if (list) {
            const currentTransform = getComputedStyle(list).transform;
            let currentX = 0;
            
            if (currentTransform !== 'none') {
                const matrix = currentTransform.match(/matrix.*\((.+)\)/);
                if (matrix) {
                    const values = matrix[1].split(', ');
                    currentX = parseFloat(values[4]) || 0;
                }
            }
            
            // Scroll based on wheel delta
            const scrollSpeed = 2;
            let newX = currentX - (e.deltaY * scrollSpeed);
            
            // Clamp values
            const maxScroll = -(list.scrollWidth - list.parentElement.offsetWidth);
            newX = Math.max(Math.min(newX, 0), maxScroll);
            
            list.style.transform = `translateX(${newX}px)`;
        }
    }
}, { passive: false });

// ========================================
// NAVBAR SCROLL EFFECT
// ========================================

function setupNavbarScroll() {
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        // Add solid background when scrolled
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });
}

// ========================================
// MOBILE MENU TOGGLE
// ========================================

function setupMobileMenu() {
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            const navbarLinks = document.querySelector('.navbar-links');
            if (navbarLinks) {
                navbarLinks.style.display = 
                    navbarLinks.style.display === 'flex' ? 'none' : 'flex';
            }
        });
    }
}

// ========================================
// MOVIE CLICK HANDLER
// ========================================

function handleMovieClick(movie) {
    console.log('Movie clicked:', movie.title);
    // In a real app, this would navigate to movie details page
    alert(`You clicked: ${movie.title}\n\nIn a real Netflix app, this would open the movie details page.`);
}

// ========================================
// BUTTON INTERACTIONS
// ========================================

// Play button
const playBtn = document.querySelector('.btn-play');
if (playBtn) {
    playBtn.addEventListener('click', function() {
        console.log('Play button clicked');
        alert('Play button clicked!\n\nIn a real Netflix app, this would start playback.');
    });
}

// More Info button
const infoBtn = document.querySelector('.btn-info');
if (infoBtn) {
    infoBtn.addEventListener('click', function() {
        console.log('More Info button clicked');
        alert('More Info button clicked!\n\nIn a real Netflix app, this would show detailed information.');
    });
}
