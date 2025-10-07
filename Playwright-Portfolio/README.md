# 🧪 Automatyzacja testów strony księgarni — Playwright Portfolio

Ten projekt zawiera zestaw testów automatycznych UI dla przykładowej aplikacji e-commerce — [księgarni internetowej](https://practice.expandtesting.com/bookstore). Testy zostały napisane w Playwright z JavaScript i obejmują scenariusze pozytywne, negatywne oraz przypadki brzegowe. Projekt stanowi część mojego portfolio QA.

## 📚 Zakres testów

### ✅ Testy pozytywne (`@positive`)
- Wyszukiwanie książki po poprawnym tytule
- Sortowanie książek według ceny i daty
- Dodanie książki do koszyka
- Poprawne wypełnienie formularza rejestracji

### ❌ Testy negatywne (`@negative`)
- Wyszukiwanie nieistniejącego tytułu
- Wysłanie formularza rejestracji bez adresu e-mail

### 🧪 Przypadki brzegowe (`@edge`)
- Wyszukiwanie z użyciem znaków specjalnych
- Dodanie 250 sztuk produktu do koszyka (test limitu ilości)
- Wysłanie formularza z błędnym formatem adresu e-mail

## 🏷️ Tagi testowe

Każdy test został oznaczony odpowiednim tagiem:
- `@positive` — scenariusze poprawne
- `@negative` — scenariusze błędne lub niepoprawne dane
- `@edge` — nietypowe przypadki, testy graniczne

Dzięki temu można łatwo filtrować testy:

- `npm run test:positive`
- `npm run test:negative`
- `npm run test:edge`

## 🛠️ Wymagania techniczne

Aby uruchomić projekt, potrzebne są:

- Node.js
- Playwright (`@playwright/test`)
- Terminal z dostępem do `npm` i `npx`

## 🚀 Uruchomienie najprostszego testu

Aby uruchomić najprostszy test w Playwright, wystarczy jedno polecenie:

`npx playwright test`
