const BOOKS_PER_PAGE = 36;
const css = {
  day: {
    dark: '10, 10, 20',
    light: '255, 255, 255',
  },
  night: {
    dark: '255, 255, 255',
    light: '10, 10, 20',
  },
};

let page = 1;
let matches = books;
let dataSearchGenres = document.querySelector('.data-search-genres');
let dataSearchAuthors = document.querySelector('.data-search-authors');
let dataListButton = document.querySelector('.data-list-button');
let dataListItems = document.querySelector('.data-list-items');
let dataListMessage = document.querySelector('.data-list-message');
let dataSearchOverlay = document.querySelector('.data-search-overlay');
let dataSearchTitle = document.querySelector('.data-search-title');
let dataSettingsOverlay = document.querySelector('.data-settings-overlay');
let dataSettingsTheme = document.querySelector('.data-settings-theme');

if (!books || !Array.isArray(books)) {
  throw new Error('Source required');
}

if (!range || range.length < 2) {
  throw new Error('Range must be an array with two numbers');
}

function createPreview({ author, id, image, title }) {
  const element = document.createElement('button');
  element.classList = 'preview';
  element.setAttribute('data-preview', id);

  element.innerHTML = /* html */ `
    <img
      class="preview__image"
      src="${image}"
    />

    <div class="preview__info">
      <h3 class="preview__title">${title}</h3>
      <div class="preview__author">${author}</div>
    </div>
  `;

  return element;
}

function createPreviewsFragment(matches, start, end) {
  const fragment = document.createDocumentFragment();

  for (let i = start; i < end && i < matches.length; i++) {
    const { author, id, image, title } = matches[i];
    const preview = createPreview({ author, id, image, title });
    fragment.appendChild(preview);
  }

  return fragment;
}

function updateRemaining() {
  const hasRemaining = matches.length > page * BOOKS_PER_PAGE;
  const initial = matches.length - page * BOOKS_PER_PAGE;
  const remaining = hasRemaining ? initial : 0;

  dataListButton.disabled = !hasRemaining;
  dataListButton.innerHTML = /* html */ `
    <span>Show more</span>
    <span class="list__remaining">(${remaining})</span>
  `;
}

function applyFilters() {
  event.preventDefault();
  const formData = new FormData(event.target);
  const filters = Object.fromEntries(formData);
  let result = [];

  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const titleMatch =
      filters.title.trim() === '' &&
      book.title.toLowerCase().includes(filters.title.toLowerCase());
    const authorMatch =
      filters.author === 'any' || book.author === filters.author;
    let genreMatch = filters.genre === 'any';

    for (let j = 0; j < book.genres.length; j++) {
      const singleGenre = book.genres[j];

      if (singleGenre === filters.genre) {
        genreMatch = true;
        break;
      }
    }

    if (titleMatch && authorMatch && genreMatch) {
      result.push(book);
    }
  }

  matches = result;
  page = 1;

  if (matches.length < 1) {
    dataListMessage.classList.add('list__message_show');
  }