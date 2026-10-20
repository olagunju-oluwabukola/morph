# Morph Energies site (React + Vite + React Router)

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # outputs dist/
```

## Structure

```
src/
  App.jsx                  routes: / /solutions /shop /hub /projects /about /partnerships /contact
  components/
    Layout.jsx             Header + <Outlet/> + Footer, scrolls to top on route change
    Header.jsx / .css      sticky header, NavLink active state, mobile menu (<= 960px)
    Footer.jsx
    CtaBanner.jsx          yellow / dark call-to-action card (props: title, text, to, label, tone, flush)
    ContactForm.jsx        contact form (add your submit handler in handleSubmit)
    Img.jsx                <Img name="hero-main" /> looks the picture up in assets/images/index.js
    Eyebrow.jsx, HeroBadge.jsx
  pages/<Page>/index.jsx   a page = an ordered list of its section components
  pages/<Page>/*.jsx       one component per section (Hero, Ecosystem, EnergyShop, ...)
  assets/images/index.js   slot name -> image file (swap a file here to change a picture)
  index.css                fonts, base styles, responsive rules
  hover.css                :hover / :focus rules that used to be style-hover attributes
```

## Deploying
This uses clean URLs (BrowserRouter), so the host must serve `index.html` for every path.
`public/_redirects` (Netlify/Cloudflare) and `vercel.json` are already included.
