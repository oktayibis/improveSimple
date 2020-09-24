describe('App', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Render All Page', async () => {
    await expect(element(by.id('testOne'))).toBeVisible();
  });
});
