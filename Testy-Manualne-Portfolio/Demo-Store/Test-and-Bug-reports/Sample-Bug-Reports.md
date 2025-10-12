# QA Bug Reports — E-commerce Platform (Prestashop)

Zbiór przykładowych bug reportów przygotowanych w ramach testowania funkcjonalności sklepu internetowego opartego na silniku Prestashop. Celem projektu jest dokumentowanie błędów związanych z walidacją danych oraz przestrzeganiem reguł biznesowych.

## Opis projektu

Testy zostały wykonane manualnie na publicznie dostępnej wersji sklepu internetowego Prestashop (demo). Skupiłem się na walidacji formularzy, regułach biznesowych oraz poprawności działania podstawowych funkcji e-commerce (koszyk, rejestracja, newsletter).

---

## Środowisko testowe

- **Przeglądarka:** Firefox 140.0.4  
- **System operacyjny:** Windows 10  
- **Typ testów:** Manualne, funkcjonalne  
- **Użytkownik testowy:** Jan Kowalski (jan.kowalski@email.com)

---

## Bug Report: QMP-10 — Brak ograniczenia ilości produktu w koszyku (limit: 20 sztuk)

![Screenshot](https://i.imgur.com/Zkcoocy.png)

**ID:** QMP-10  
**Moduł:** Koszyk / Cart  
**Severity:** High  
**Priority:** High  

### Kroki do odtworzenia:
1. Przejdź do kategorii **„DRESSES”**  
2. Wybierz produkt **„Printed Summer Dress”**  
3. Wybierz rozmiar **L**  
4. Wpisz ilość: **500**  
5. Kliknij **„Add to cart”**  
6. Przejdź do koszyka

### Oczekiwany rezultat:
- System blokuje dodanie więcej niż 20 sztuk  
- Pojawia się komunikat: „Maximum quantity allowed is 20”  
- Koszyk zawiera maksymalnie 20 sztuk

### Rzeczywisty rezultat:
- System pozwala dodać 500 sztuk  
- Brak komunikatu ograniczającego  
- Reguła biznesowa została naruszona


---

## Bug Report: QMP-3 — Brak walidacji formatu adresu e-mail podczas rejestracji

![Screenshot](https://i.imgur.com/W4DnKDQ.png)

**ID:** QMP-3
**Moduł:** Rejestracja użytkownika / Registration  
**Severity:** Medium  
**Priority:** High  

### Kroki do odtworzenia:
1. Kliknij **„Sign in”**  
2. Wpisz e-mail: `#@email.com`  
3. Kliknij **„Create an account”**  
4. Wypełnij formularz rejestracyjny (Jan Kowalski, hasło: haslo123, data urodzenia: 10/05/1990)  
5. Kliknij **„Register”**

### Oczekiwany rezultat:
- System rozpoznaje niepoprawny format e-maila  
- Wyświetla komunikat: „Invalid email address”  
- Konto nie zostaje utworzone

### Rzeczywisty rezultat:
- Formularz został przesłany  
- Konto zostało utworzone mimo błędnego adresu  
- Brak walidacji formatu e-maila

---

## Uwagi końcowe

Te raporty są częścią większego zestawu testów funkcjonalnych wykonywanych w ramach budowy portfolio QA. Skupiają się na realnych scenariuszach użytkownika i pokazują podejście do testowania reguł biznesowych oraz walidacji danych wejściowych.


