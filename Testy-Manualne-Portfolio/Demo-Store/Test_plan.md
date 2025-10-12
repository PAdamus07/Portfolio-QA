# Test Plan — E-commerce Platform

## Cel testów

Celem testów jest ręczne sprawdzenie kluczowych funkcji strony demonstracyjnej sklepu internetowego opartego na Prestashop. Skupiam się na tym, jak użytkownik porusza się po stronie, jak działają formularze, czy dane są poprawnie walidowane, oraz czy reguły biznesowe są przestrzegane. Testy obejmują zarówno scenariusze pozytywne, jak i negatywne, z naciskiem na jakość interfejsu i logikę systemową.

---

## Zakres testów

Testowane obszary:

- Formularz rejestracji użytkownika 
- Formularz logowania 
- Dodawanie produktów do koszyka 
- Proces zamówienia 
- Formularz subskrypcji newslettera
- Walidacja pól e-mail (poprawne, nietypowe formaty)
- Walidacja ilości produktu w koszyku
- Akceptacja regulaminu przed płatnością
- Wizualna spójność interfejsu strony

---

## Typy testów

- Testy pozytywne (np. poprawne dane, pełny proces zakupu)
- Testy negatywne (np. błędny format e-maila, przekroczenie limitu ilości)
- Edge case (nietypowe dane wejściowe)
- Wizualna ocena interfejsu strony
- Ocena Severity i Priority dla błędów
- Analiza reguł biznesowych i ich poprawności z prezentacją danych

---

## Narzędzia i środowisko

- **Przeglądarka:** Firefox 140.0.4  
- **System operacyjny:** Windows 10  
- **Narzędzia:**
  - ShareX (zrzuty ekranu błędów)
  - Jira (raportowanie błędów)
  - Microsoft Word (.doc) — dokumentacja testów
  - Markdown (`README.md`, `Test_plan.md`) — repozytorium GitHub

---

## Kryteria wejścia (Entry Criteria)

- Strona e-commerce jest dostępna i działa  
- Formularze rejestracji, logowania, koszyk i newsletter są widoczne i aktywne  
- Tester ma dostęp do środowiska testowego i narzędzi dokumentacyjnych

---

## Kryteria wyjścia (Exit Criteria)

- Wszystkie zaplanowane przypadki testowe zostały wykonane  
- Błędy zostały udokumentowane i ocenione  
- UI nie zawiera krytycznych błędów wizualnych  
- Reguły biznesowe zostały zweryfikowane  
- Raporty testowe i bug reporty są gotowe do prezentacji

---

## Struktura projektu

- Testy i raporty błędów: `/Test-and-Bug-reports/Jira2.doc`, `/Test-and-Bug-reports/Sample-Bug-Reports.md`   
- Zrzuty ekranu błędów: `/bug-screenshots`  
- Dokument README: `README.md`  
- Plan testów: `Test_plan.md`  

---

## Uwagi

Ten projekt jest częścią mojego portfolio QA. Pokazuje, jak podchodzę do testowania interfejsu, walidacji danych, analizy reguł biznesowych i dokumentowania błędów w sposób czytelny i uporządkowany. Testy zostały wykonane manualnie, z naciskiem na realizm danych i profesjonalną prezentację wyników.

