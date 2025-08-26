
---
# 🌿 Kallora

Kallora is a digital platform where users can **discover and book authentic, cultural, soul-rooted experiences** — from learning to churn butter from scratch, to joining a folk painting workshop, cooking with a local family, or celebrating with traditional music and dance.  
It’s about slowing down, reconnecting with culture, and finding beauty in the everyday.

---

## ✨ Features (that I would like to have)

- 🏡 Homepage discovery flow (search + category explorer)
- 📍 Explore by category/destination
- 📦 Experience detail pages (host info, description, reviews)
- 🎟 Bookings & inquiries (basic CRUD operations)
- 👥 User accounts with login/logout
- 🧑‍🌾 Host dashboard to add/manage experiences
- 🌍 Event API integration (e.g., Ticketmaster / Eventbrite / SeatGeek) (still trying to figure out if this is necessary)
- 📰 Newsletter signup
- ⭐ Testimonials & reviews
- 📊 Impact stats + brand story section

---

## 🛠 Tech Stack

- **Next.js 14** (App Router)
- **Tailwind CSS v4**
- **Prisma + PostgreSQL** (Neon or Supabase)
- **Auth.js (NextAuth)**
- **Vercel** (hosting & deployment)
- **Figma** for design & prototyping

---

## 📐 Design Prototype

👉 [View the Figma Prototype](https://www.figma.com/proto/s9Yu3Yich7zRX8WFhNXpfq/Kallora.com?node-id=0-1&t=gaWDLzNdKmGDoX6b-1)

---

## 📋 Project Management

We track tasks and sprints in Notion:  
👉 [View the Kallora Project Board](https://www.notion.so/256212a1b84180b0bf96e2f73db88ffe?v=256212a1b84180b782f3000c20d82f8e)

---

## 🚀 Dev Quickstart

```bash
# 1) Clone
git clone https://github.com/helanaPM/auth-exp-project.git
cd auth-exp-project

# 2) Install deps
npm install

# 3) Run
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000).

---

## 🔧 Environment Variables (to be configured)

- `DATABASE_URL` — Postgres connection string (Neon/Supabase)  
- `NEXTAUTH_SECRET` — secret for Auth.js  
- `NEXTAUTH_URL` — e.g., `http://localhost:3000`  

---

## 🗂 Folder Structure (WIP)
```
/app
  /api           → route handlers (auth, bookings, experiences)
  /components    → UI components
  /lib           → prisma client, utils
  /styles        → global styles
  /data          → seed/mock data
/prisma          → schema.prisma & migrations
/docs            → developer docs (Getting-Started, Deploying, Architecture, Contributing)
```

---

## 🧭 Developer Docs

- Full Next.js boilerplate & tips: [/docs/Getting-Started.md](./docs/Getting-Started.md)  
- (TODO) Deployment guide: `/docs/Deploying.md`  
- (TODO) Architecture & data model: `/docs/Architecture.md`  

---

## 🔮 Roadmap

- [x] Setup Next.js + Tailwind + Vercel  
- [ ] Configure Prisma + initial schema  
- [ ] Implement user auth (NextAuth + Prisma)  
- [ ] Build core UI sections (Hero, Explorer, Destinations, Testimonials)  
- [ ] CRUD for Experiences & Bookings  
- [ ] Integrate external events API (normalize to DB)  
- [ ] Responsive design pass  
- [ ] Launch MVP 🎉  

---

## 🤝 Contributing

Kallora is open source, but it’s mainly my personal learning + showcase project.  
If you’d like to get involved:

- Open an Issue to report bugs or suggest improvements.  
- Propose design or architecture ideas (explain *why* they’d help).  
- Small fixes (docs, typos, light refactors) are welcome.  

Please read the full guidelines before contributing:  
👉 [See CONTRIBUTING.md](./CONTRIBUTING.md)

---

## 📜 License
This project is licensed under the **CC BY-NC 4.0 License** — see the [LICENSE](./LICENSE) file for details.
