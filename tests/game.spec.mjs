import { expect, test } from '@playwright/test'

test('rolls both dice and clears the scores and history', async ({ page }) => {
  await page.route('https://cdn.rawgit.com/**', route => route.fulfill({ contentType: 'text/css', body: '' }))
  await page.addInitScript(() => { Math.random = () => 0.5 })
  await page.goto('/dice-game/')
  await expect(page.getByRole('heading', { name: '주사위 게임!' })).toBeVisible()
  await page.getByRole('button', { name: '던지기' }).click()
  await expect(page.getByRole('img', { name: 'blue 3' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'red 3' })).toBeVisible()
  await expect(page.getByRole('img', { name: 'blue 3' })).toHaveJSProperty('complete', true)
  await expect(page.locator('.board p')).toHaveText(['3', '3', '3', '3'])
  await page.getByRole('button', { name: '처음부터' }).click()
  await expect(page.locator('.board p')).toHaveText(['', '0', '', '0'])
  await expect(page.getByRole('img', { name: 'blue 1' })).toBeVisible()
})
