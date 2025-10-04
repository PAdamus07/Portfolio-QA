# QA API Portfolio

Repozytorium zawiera przykładowe testy API wykonane w Postman oraz raporty wygenerowane za pomocą Newman.

## 📝 Opis projektu

Projekt służy do testowania publicznego API [JSONPlaceholder](https://jsonplaceholder.typicode.com/) przy użyciu Postmana. W ramach testów wykorzystuję wszystkie metody HTTP: `GET`, `POST`, `PUT`, `PATCH`, `DELETE`. Testy obejmują różne scenariusze, w tym walidację odpowiedzi i statusów.


## 📂 Struktura folderów
collection/ → Kolekcja Postman (.postman_collection.json)

environment/ → Pliki środowiskowe Postman (.postman_environment.json)

reports/ → Dane z testów i raport HTML wygenerowany przez Newman 


## 🛠 Wymagania

- [Postman](https://www.postman.com/) – do uruchamiania kolekcji lokalnie 

## ✨ Główne funkcje i zaimplementowane testy

- Testowanie pełnego CRUD na zasobach `users`
- Walidacja statusów odpowiedzi (`200`, `201`, `204`, `404`)
- Sprawdzanie struktury odpowiedzi JSON i typów danych
- Testy negatywne (np. błędne ID)
- Użycie zmiennych środowiskowych
- Raportowanie wyników w formacie HTML i JSON

🔹 Scenariusze Pozytywne  
Testy sprawdzające poprawne działanie API przy użyciu metod `GET`, `POST`,`PUT`,`PATCH`,`DELETE`, w tym walidacja statusów odpowiedzi, struktury danych oraz dynamiczne operacje na zasobach.

🔹 Scenariusze Negatywne  
Testy odporności API na błędne dane, oraz próby dostępu do nieistniejących zasobów.


## 🚀 Jak uruchomić ten projekt?

1. **Przeglądanie raportu HTML**  
   - Otwórz plik `reports/API-Portfolio-Report.html` w przeglądarce.  
   - Raport pokazuje wyniki wszystkich testów API wykonanych w kolekcji Postman.  

2. **Przeglądanie kolekcji w Postman**  
   - Otwórz Postman.  
   - Zaimportuj kolekcję `collection/API-Portfolio.postman_collection.json`.  
   - Zaimportuj jedno ze środowisk:  
     - `environment/Dev.postman_environment.json` → środowisko deweloperskie  
     - `environment/Prod.postman_environment.json` → środowisko produkcyjne  
   - Możesz ręcznie uruchamiać requesty i testy w Postman, korzystając ze zmiennych środowiskowych (`{{base_url}}`, `{{token}}`).  
     - **Uwaga:** Token w środowisku nie jest aktywny, ponieważ testy wykonują się na mock API i nie wymagają autoryzacji.  

> Opcjonalnie: jeśli chcesz wygenerować raport samodzielnie, możesz użyć Newman (wymaga Node.js i zainstalowanego Newman). Plik HTML i JSON w repo pokazuje już gotowe wyniki.
