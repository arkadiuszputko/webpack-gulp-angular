describe('Application', () => {
    beforeEach(() => {
        browser.get('/');
    });

    it('should have a title', () => {
        expect(browser.getTitle()).toMatch('FountainJS');
    });
});
