import {test, expect} from '@playwright/test';

test.describe('Playwright automation using bookstore example', () => {
    
    //Hook running before every test
    test.beforeEach(async ({page}) => {
        await page.goto('https://practice.expandtesting.com/bookstore');
    });

    test('Test if bookstore page is opening', async ({page}) => {
        
        await expect(page).toHaveURL('https://practice.expandtesting.com/bookstore');
        await expect(page).toHaveTitle('E-commerce Bookstore Example for Practicing Automated Tests');
    });

    test('[POSITIVE] Verify search function is working properly @positive', async ({page}) => {
        
        await page.locator('#search-input').click(); // Using CSS locator
        await page.locator('#search-input').fill('JavaScript for Web Developers');
        await page.getByRole('button', {name:'Search'}).click();
        await expect(page.getByText('JavaScript for Web Developers')).toBeVisible();
        
    });

    test('[NEGATIVE] Verify page displays no results for non-existent titles @negative', async ({page}) => {
        await page.locator('#search-input').click();
        await page.locator('#search-input').fill('abcd');
        await page.getByRole('button', { name:/search/i }).click();
        await expect(page.getByText('Can not find any products')).toBeVisible();
    });

    test('[EDGE-CASE] Using special characters in the search function and checking behavior @edge', async ({page}) => {
        const searchBox = page.locator('//input[@name="search"]'); //Using XPath locator
        const searchButton = page.locator('//button[@type="submit"]');
        await searchBox.fill('@!#');
        await searchButton.click();
        await expect(page.getByText('Can not find any products')).toBeVisible();
    });

    test('[POSITIVE] Verify the main page and the book page contain the same data @positive', async ({page}) => {
        await page.goto('https://practice.expandtesting.com/bookstore/books/674108466cb6226060a20d44')
        const specPrice = page.getByText(/Price:/i);
        await expect(specPrice).toContainText('40€');
        await expect(page.getByText('JavaScript for Web Developers')).toBeVisible();
    });

    test('[POSITIVE] Verify sorting by "New" function is working properly @positive', async ({page}) => {
        const button = page.locator('a.filter_sort-new')
        await button.click();
    });

    test('[POSITIVE] Test behavior using sorting methods @positive', async ({page}) => {
        await page.locator('text="Price"').hover();
        await page.locator('a[href="?sort=asc"]').click();
        await page.waitForTimeout(1000);
        await page.locator('text="Price"').hover();
        await page.locator('a[href="?sort=desc"]').click();
    });

    test('[POSITIVE] Verify that book item gets added to the cart @positive', async ({page}) => {
        const bookAdd = page.locator('a[alt="Agile Testing"]');
        const cartButton = page.locator('a[href="/bookstore/cart"]');
        await bookAdd.click();
        await cartButton.click();
    });
    
    test('[EDGE-CASE]Add 100+ Items to Cart @edge', async ({page}) => { //flaky test case
        await page.waitForLoadState('domcontentloaded');
        const bookAdd = page.locator('a[alt="Agile Testing"]');
        const cartButton = page.locator('a[href="/bookstore/cart"]');
        await bookAdd.click();
        await cartButton.click();
        await page.waitForLoadState('domcontentloaded');
        await page.locator('#cartQty').fill('250');
        await page.locator('//button[@type="submit"]').click();
        const value = await page.locator('#cartQty').inputValue();
        await expect(Number(value)).toBeLessThanOrEqual(250); //Testing against business rule
    });

    test('[POSITIVE] Submit signup form with valid inputs @positive', async ({page}) => {
        const signUp = page.locator('[data-testid="goto-signin"]');
        await signUp.click();
        await page.locator('a#go-signup').click();
        const emailBox = page.locator('input#email');
        const username = page.locator('#username');
        const password = page.locator('#password');
        const passwordConfirm = page.locator('#password2');
        const signUpFull = page.locator('button#submit');
        await emailBox.fill('example.email@email.com');
        await username.fill('example');
        await password.fill('strongPassword');
        await passwordConfirm.fill('strongPassword');
        await signUpFull.click();
    });
    test('[NEGATIVE] Submit signup form with missing email input field @negative', async ({page}) => {
        const signUp = page.locator('[data-testid="goto-signin"]');
        await signUp.click();
        await page.locator('a#go-signup').click();
        const username = page.locator('#username');
        const password = page.locator('#password');
        const passwordConfirm = page.locator('#password2');
        const signUpFull = page.locator('button#submit');
        await username.fill('example');
        await password.fill('strongPassword');
        await passwordConfirm.fill('strongPassword');
        await signUpFull.click();
        await expect(page.getByText('Missing credentials')).toBeVisible();
    });
    test('[EDGE-CASE] Validate error message appears when inputting a invalid email format @edge', async ({page}) => {
        const signUp = page.locator('[data-testid="goto-signin"]');
        await signUp.click();
        await page.locator('a#go-signup').click();
        const emailBox = page.locator('input#email');
        const username = page.locator('#username');
        const password = page.locator('#password');
        const passwordConfirm = page.locator('#password2');
        const signUpFull = page.locator('button#submit');
        await emailBox.fill('@@@@email.com');
        await username.fill('example');
        await password.fill('strongPassword');
        await passwordConfirm.fill('strongPassword');
        await signUpFull.click();
        await expect(page.getByText('Invalid email')).toBeVisible();
        
    });


});