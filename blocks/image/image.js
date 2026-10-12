/**
 * Image Block
 * Loads images with optional captions
 */

export default async function decorate(block) {
  const pictures = block.querySelectorAll('picture');
  pictures.forEach((picture) => {
    const figure = document.createElement('figure');
    figure.appendChild(picture.cloneNode(true));
    const caption = picture.nextElementSibling;
    if (caption && caption.tagName !== 'PICTURE') {
      const figcaption = document.createElement('figcaption');
      figcaption.innerHTML = caption.innerHTML;
      figure.appendChild(figcaption);
      caption.remove();
    }
    picture.replaceWith(figure);
  });
}
