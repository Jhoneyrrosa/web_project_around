  export function generateCard(data, { onImageClick, onLike, onDelete } = {}) {
  const template = document.querySelector('#card-template').content.querySelector('.card');
  const el = template.cloneNode(true);

  const titleEl = el.querySelector('.photo-grid__name');
  const imgEl = el.querySelector('.photo-grid__item');
  const likeEl = el.querySelector('.photo-grid__coracao');
  const trashEl = el.querySelector('.photo-grid__trash');

  imgEl.src = data.image;
  imgEl.alt = data.name;
  titleEl.textContent = data.name;

  if (typeof onImageClick === 'function') {
    imgEl.addEventListener('click', () => onImageClick(imgEl.src, imgEl.alt));
  }
  if (typeof onLike === 'function') {
    likeEl.addEventListener('click', (e) => onLike(e, el));
  }
  if (typeof onDelete === 'function') {
    trashEl.addEventListener('click', () => onDelete(el));
  }

  return el;
}
