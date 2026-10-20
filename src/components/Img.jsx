import images from '../assets/images';

/**
 * Fills its (positioned, sized) parent, like the original <image-slot>.
 * `name` is a key in src/assets/images/index.js; swap a file there to change a picture.
 */
export default function Img({ name, alt = '', fit = 'cover' }) {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <img
        src={images[name]}
        alt={alt}
        loading={name === 'hero-main' ? 'eager' : 'lazy'}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: fit, display: 'block' }}
      />
    </div>
  );
}
