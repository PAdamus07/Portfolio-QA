# Bug Reports — Altoro Mutual

---

## Bug Report: QMTP-5 — Niedostępny zasób po kliknięciu „Online Banking”

[Screenshot](https://i.imgur.com/jI7psT1.png)

**ID:** QMTP-5 
**Moduł:** Strona główna / Nawigacja  
**Severity:** Medium  
**Priority:** High  

### Kroki do odtworzenia:

- Otwórz stronę główną Altoro Mutual  
- Kliknij odnośnik „Online Banking with FREE Online Bill Pay” w menu po lewej stronie

### Oczekiwany rezultat:

- Użytkownik zostaje przekierowany na stronę: `personal_savings.htm`  
- Strona ładuje się poprawnie i zawiera informacje o kontach osobistych

### Rzeczywisty rezultat:

- Użytkownik zostaje przekierowany, ale zasób jest niedostępny  
- Brak komunikatu błędu lub alternatywnego przekierowania

---

## Bug Report: QMTP-7 — Nieczytelne wartości w kolumnie „Debits” konta „800000 Corporate”

[Screenshot](https://i.imgur.com/hNbPKsd.png)

**ID:** QMTP-7 
**Moduł:** Konto użytkownika / Account History  
**Severity:** High  
**Priority:** High  

### Kroki do odtworzenia:

- Zaloguj się na stronie Altoro Mutual (`admin` / `admin`)  
- Wybierz konto „800000 Corporate” z rozwijanego menu  
- Kliknij „Go”  
- Przejdź do zakładki „Account History”  
- Sprawdź kolumnę „Debits”

### Oczekiwany rezultat:

- Wartości w kolumnie „Debits” są w formacie walutowym (np. `$1,234.56`)  
- Dane są spójne i czytelne

### Rzeczywisty rezultat:

- Wartości wyświetlane w notacji naukowej (np. `2.35678E+36`)  
- Brak symbolu waluty w wielu wierszach  
- Formatowanie danych jest niespójne i nieczytelne

---

## Uwagi końcowe

Te raporty są częścią większego zestawu testów funkcjonalnych wykonywanych w ramach budowy portfolio QA. Skupiają się na realnych scenariuszach użytkownika i pokazują podejście do testowania reguł biznesowych, walidacji danych wejściowych oraz jakości interfejsu.

