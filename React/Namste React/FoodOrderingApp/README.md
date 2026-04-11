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

### 🔹 1. Named Export

Named export ka use tab karte hain jab hume **multiple variables/functions export** karne hote hain.

#### ✅ Export Syntax:

```js
export const CDN_URL = "https://example.com/image";
export const LOGO_URL = "https://example.com/logo";
```

#### ✅ Import Syntax:

```js
import { CDN_URL, LOGO_URL } from "./constants";
```

#### ⭐ Features:

* Multiple values export kar sakte hain
* Import karte time **same name use karna padta hai**
* Curly braces `{}` ka use hota hai

#### 🔄 Rename while importing:

```js
import { CDN_URL as IMG_URL } from "./constants";
```

---

### 🔹 2. Default Export

Default export tab use hota hai jab file se **sirf ek main value export** karni ho.

#### ✅ Export Syntax:

```js
const LOGO_URL = "https://example.com/logo";

export default LOGO_URL;
```

#### ✅ Import Syntax:

```js
import LOGO from "./constants";
```

#### ⭐ Features:

* Sirf **ek default export allowed** hota hai
* Import karte time **koi bhi naam de sakte hain**
* Curly braces `{}` ka use nahi hota

---

### 🔹 3. Multiple Values with Default Export

Agar multiple values default export karni ho to unhe **object ke andar wrap** karna padta hai:

#### ✅ Export:

```js
const constants = {
  CDN_URL: "https://example.com/image",
  LOGO_URL: "https://example.com/logo"
};

export default constants;
```

#### ✅ Import:

```js
import constants from "./constants";

console.log(constants.CDN_URL);
```

#### 🔄 Destructuring:

```js
const { CDN_URL, LOGO_URL } = constants;
```

---

### 🔥 4. Named vs Default Export

| Feature           | Named Export       | Default Export    |
| ----------------- | ------------------ | ----------------- |
| Number of exports | Multiple           | Only one          |
| Import syntax     | `{ }` required     | No `{ }`          |
| Naming            | Same name required | Any name allowed  |
| Use case          | Multiple utilities | Single main value |

---

### 🚀 Best Practice

* ✅ Multiple values → **Named Export use karo**
* ✅ Single main component/function → **Default Export use karo**
* ✅ Large projects → Named exports preferred (better readability & scalability)

---

### 💡 Example (Real Use Case)

```js
// constants.js
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;
```

```js
// app.js
import { API_URL, TIMEOUT } from "./constants";
```

---

### 🧠 Summary

* Named export → multiple values
* Default export → single value
* Dono ko mix bhi kar sakte ho (advanced use cases)

