describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  // Initial test case
  it('Render All Page', async () => {
    await expect(element(by.id('testOne'))).toBeVisible();
  });
});
