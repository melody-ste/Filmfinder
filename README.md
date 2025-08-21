# FILMFINDER

FilmFinder is a web application that allows users to search for movies and TV shows using the **Open Movie Database (OMDb) API**. Results are displayed as cards with posters, titles, release dates, and a “Read More” button to view full details in a modal.

---

### Features

- Search movies/series by keyword.
- Display results with:
  - Movie poster
  - Title
  - Release year
  - “Read More” button
- Bootstrap modal showing:
  - Full plot
  - Genre
  - Actors
  - Full release date
- Progressive reveal of movie cards on scroll using **Intersection Observer**.
- Responsive design using **Bootstrap 5**.

---

### Technologies Used

- HTML5 / CSS3
- JavaScript (ES6+)
- [Bootstrap 5](https://getbootstrap.com/)
- [OMDb API](http://www.omdbapi.com/)
- [Vite](https://vitejs.dev/) for bundling and local development


### Installation & Usage

1. Clone the repository:
```bash
git clone https://github.com/your-username/FilmFinder.git
cd FilmFinder
npm install
```

2. Create a .env file at the project root with your OMDb API key:
```bash
VITE_API_KEY=YOUR_API_KEY
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser at the Vite URL (e.g., http://localhost:5173/
).

---