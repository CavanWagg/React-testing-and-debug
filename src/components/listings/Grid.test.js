import data from '../../data/courses.json';

const numItems = data.length;

test('Number of Items = 12', () => {
  expect(numItems).toBe(12);
});

test('Number of Items to be greater than 12', () => {
  expect(numItems).toBeGreaterThanOrEqual(12);
});
