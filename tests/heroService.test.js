const { findsHeroReleaseAge } = require('../services/heroesService');

test('tests if age is positive', () => {
    expect(findsHeroReleaseAge("1992")).toBeGreaterThanOrEqual(0);
});

test('tests the negative release year', () => {
    expect(findsHeroReleaseAge("2024")).toBeLessThan(-1);
});
 