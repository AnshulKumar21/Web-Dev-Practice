Parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in C++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- Consistent Hashing
- Code Splitting
- Differential Bundling - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code
- Different dev and prod bundles


_______________________________________________
Food ordering App
* Header
  - Logo
  - Nav Items

* Body
  - Search
  - RestaurantContainer
    - RestaurantCard
      - Img
      - Name of Res, Star Rating, cuisine, delivery time

* Footer
  - Copyright
  - Links
  - Address
  - Contact




  _______________________________________
  ## 📦 JavaScript Export & Import Notes

## 📦 JavaScript Export & Import (Short Notes)

### 🔹 1. Named Export

Used when exporting **multiple variables/functions**.

```js
export const CDN_URL = "https://example.com/image";
export const LOGO_URL = "https://example.com/logo";
```

```js
import { CDN_URL, LOGO_URL } from "./constants";
```

✔️ Must use same names
✔️ Uses `{ }`

---

### 🔹 2. Default Export

Used for **one main value per file**.

```js
const LOGO_URL = "https://example.com/logo";
export default LOGO_URL;
```

```js
import LOGO from "./constants";
```

✔️ Only one allowed
✔️ Any name can be used
✔️ No `{ }`

---

### 🔹 3. Multiple Values with Default

```js
const constants = {
  CDN_URL: "...",
  LOGO_URL: "..."
};

export default constants;
```

```js
import constants from "./constants";
```

---

### 🔥 Named vs Default

| Named Export | Default Export |
| ------------ | -------------- |
| Multiple     | Single         |
| `{ }`        | No `{ }`       |
| Same name    | Any name       |

---

### 🚀 Summary

* Named → multiple values
* Default → single value
* Use named exports in most cases


_______________________________________________________________________________________________________________________



#React Hooks
(Normal js utility functions)
-usestate() Hook
-useEffect() Hook


-usestate() Hook
Whenever a state variable chnages React re renders and updates ui.## useState (Short Definition)

**useState** is a React Hook used to store and manage state (data) inside a functional component. It allows updating the state, which triggers a re-render of the UI.
______________________________________________________________________

Reconciliation Algorithm
Virtual Dom =  It is  a representation of a actual DOM. And it is a normal js object.

Diff Algorithm =  It finds the differnce between updated virtual dom and older one and compares them both and then updates only specific part and then actually updates original DOM
## ⚛️ React DOM Concepts (Short Notes)
### 🔹 Original DOM (Real DOM)
* Actual browser DOM (HTML structure)
* Changes are slow because browser re-renders UI
---
### 🔹 Virtual DOM
* Lightweight JS object copy of Real DOM
* React updates this first (faster operations)
--
### 🔹 Reconciliation

* Process React uses to update UI
* Compares old Virtual DOM with new Virtual DOM
* Updates only changed parts
---
### 🔹 Diffing Algorithm
* Finds differences between old and new Virtual DOM
* Helps React decide what to update
---
### 📌 Example
Old:
```html
<li>Banana</li>
```
New:
```html
<li>Mango</li>
```
👉 React updates only this `<li>`, not whole DOM
---
### 🚀 One Line
**React updates only the changed parts of the UI using Virtual DOM + Diffing**
