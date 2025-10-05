-- Plik testowy SQL do portfolio QA
-- Zawiera zestaw zapytań testowych na bazie W3Schools
-- Pokazuje umiejętności filtrowania, złączeń, agregacji i analizy danych
-- Uwzględniono testy pozytywne, negatywne i brzegowe
-- Każde zapytanie opatrzone komentarzem QA z opisem celu i oczekiwanego zachowania


-- Test pozytywny: Wyszukaj wszystkich klientów z Berlina  
-- Sprawdza filtrowanie danych według miasta  
SELECT * 
FROM Customers
WHERE City = "Berlin";

-- Test pozytywny: Pobierz nazwę i cenę produktu z wybranej kategorii i od konkretnego dostawcy  
-- Testuje poprawność złączeń i filtrowania po kluczach obcych  
SELECT p.ProductName, p.price
FROM (Products AS p
     INNER JOIN Categories AS c ON p.CategoryID = c.CategoryID)
      INNER JOIN Suppliers AS s ON p.SupplierID = s.SupplierID
WHERE p.CategoryID = 1 AND p.SupplierID = 10;

-- Test negatywny: Sprawdź, czy istnieją zamówienia bez przypisanego klienta  
-- Weryfikuje integralność danych i wykrywa osierocone rekordy  
SELECT c.CustomerID, c.CustomerName
FROM Orders AS o
LEFT JOIN Customers AS c ON o.CustomerID = c.CustomerID
WHERE o.CustomerID IS NULL;

-- Test pozytywny: Wyświetl produkty posortowane malejąco według ceny  
-- Sprawdza poprawność sortowania i widoczność danych cenowych  
SELECT * 
FROM Products
ORDER BY Price DESC;

-- Test brzegowy: Znajdź klientów, którzy nigdy nie złożyli zamówienia  
-- Testuje zachowanie LEFT JOIN i brak powiązanych rekordów  
SELECT
    c.CustomerID,
    c.CustomerName,
    c.ContactName
FROM
    Customers AS c
LEFT JOIN
    Orders AS o ON c.CustomerID = o.CustomerID
WHERE
    o.OrderID IS NULL;

-- Test pozytywny: Policz zamówienia z ilością między 5 a 10 sztuk  
-- Weryfikuje filtrowanie zakresowe i agregację danych  
SELECT COUNT(*) AS OrderCount
FROM OrderDetails
WHERE Quantity BETWEEN 5 AND 10;

-- Test pozytywny: Policz liczbę zamówień dla każdego klienta  
-- Testuje złączenia i grupowanie danych według klienta  
SELECT c.CustomerName, c.CustomerID, COUNT(*) AS OrderCount
FROM Customers AS c
INNER JOIN Orders AS o ON c.CustomerID = o.CustomerID
GROUP BY c.CustomerName, c.CustomerID;

-- Test brzegowy: Wyszukaj klientów bez kodu pocztowego  
-- Sprawdza obecność wartości NULL i kompletność danych adresowych  
SELECT * FROM Customers WHERE PostalCode IS NULL;
