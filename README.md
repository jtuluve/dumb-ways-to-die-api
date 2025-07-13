# 💀 Funny Death Generator API

This API generates a random, humorous "cause of death" message — perfect for meme bots, games, or just some light dark humor.

## 🔗 Endpoint

```curl
GET /api
```

### ✅ Optional Query Parameter

- `name` — A name to personalize the death message.
  - Example: `/api?name=Alex`

If `name` is not provided, `You` will be used by default.

---

## 📦 Example Usage

### Request

```curl
GET [https://dumb-ways-to-die-api.vercel.app/api?name=Alex](https://dumb-ways-to-die-api.vercel.app/api?name=Alex)
```

### Response

```text
Alex died trying to breakdance at their hip replacement surgery celebration..
````

---

## 🧪 Without name

```curl
GET https://dumb-ways-to-die-api.vercel.app/api
```

```text
You died trying to breakdance at their hip replacement surgery celebration.
```

---

## ⚙️ Deployment

This project is built for [Vercel](https://vercel.com). Just clone and deploy!

---

## 🧠 Inspiration

- Minecraft deaths
- Real-life fails
- Memes, TikToks, and chaos

---

PRs welcome ✨
