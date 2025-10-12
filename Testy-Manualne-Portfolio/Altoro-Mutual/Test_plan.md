#  Test Plan — Altoro Mutual

##  Cel testów

Celem testów jest ręczne sprawdzenie kluczowych funkcji strony demonstracyjnej Altoro Mutual. Skupiam się na tym, jak użytkownik porusza się po stronie, jak działają formularze, czy dane są poprawnie walidowane, oraz czy interfejs jest spójny i czytelny.

##  Zakres testów

Testowane obszary:
- Formularz subskrypcji newslettera („Subscribe”)
- Formularz kontaktowy („Feedback”)
- Ankieta promocyjna („Win a Samsung Galaxy S10 smartphone”)
- Strony informacyjne: „Retirement Solutions”, „Corporate Banking”
- Walidacja pól e-mail (poprawne, puste, nietypowe formaty)
- Weryfikacja konta bankowego (widoczność, dostępność, poprawność danych)
- Wizualna spójność interfejsu strony

##  Typy testów

- Testy pozytywne (np. poprawne dane)
- Testy negatywne (np. puste pola, błędny format)
- Edge case (nietypowe dane wejściowe)
- Wizualna ocena interfejsu strony
- Ocena Severity i Priority dla błędów
- Analiza reguł biznesowych i ich poprawności z prezentacją danych

##  Narzędzia i środowisko

- Przeglądarka: Firefox 140.0.4  
- System operacyjny: Windows 10  
- Narzędzia:  
  - ShareX (zrzuty ekranu błędów)
  - Jira 
  - Microsoft Word (.doc)  
  - Markdown (README, test plan)

##  Kryteria wejścia (Entry Criteria)

- Strona Altoro Mutual jest dostępna i działa
- Formularze, sekcje testowe i konto bankowe są widoczne i aktywne  
- Tester ma dostęp do środowiska testowego i narzędzi dokumentacyjnych  

##  Kryteria wyjścia (Exit Criteria)

- Wszystkie zaplanowane przypadki testowe zostały wykonane  
- Błędy zostały udokumentowane i ocenione  
- UI nie zawiera krytycznych błędów wizualnych  

##  Struktura projektu

- Testy i raporty błędów: `/Test-and-Bug-reports/Jira.doc`,   
- Zrzuty ekranu błędów: `/bug-screenshots`  
- Dokument README: `README.md`  
- Plan testów: `Test_plan.md`

##  Uwagi

Ten projekt jest częścią mojego portfolio QA. Pokazuje, jak podchodzę do testowania interfejsu, walidacji danych, analizy reguł biznesowych i dokumentowania błędów w sposób  czytelny i uporządkowany.

