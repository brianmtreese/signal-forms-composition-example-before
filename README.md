# Angular Forms – Large Form Example (Before Signal Forms)

This repository contains the **pre–Signal Forms version** of a large Angular form pattern.

It represents a common real-world starting point: a form composed of multiple UI sections that works correctly, but has **no scalable form architecture** and becomes difficult to reuse or evolve as the application grows.

This repository exists **only as a baseline** for comparison with the refactored Signal Forms version.

---

## What This Repo Demonstrates

- A large form composed of multiple UI components
- Account, shipping, and preferences sections split at the UI level
- A parent component responsible for coordinating all form behavior
- A working form that lacks architectural structure for reuse and scale

---

## What This Repo Does *Not* Use (Intentionally)

- ❌ Angular Signal Forms
- ❌ Signal-based models
- ❌ Composable form architecture
- ❌ Reusable validation or form section logic

These omissions are **intentional** and reflect how many forms might start *before* applying Signal Forms.

---

## Why This Repo Exists

This repository exists to show:

- The **limitations** of UI-only form composition
- Why large forms become hard to maintain over time
- What problems arise before introducing Signal Forms

All of these issues are addressed in the **after** repository.

---

## Related Resources

- 🟩 **Refactored Version (Signal Forms)**  
  https://github.com/brianmtreese/signal-forms-composition-example-after

---

## How to Run

```bash
npm install
ng serve
