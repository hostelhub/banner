const hostel = require('./hostel.js');

describe('Database test suite', () => {

  test('it checks Hostel model schema', () => {
    expect(hostel.Hostel.schema.obj).toHaveProperty('name');
    expect(hostel.Hostel.schema.obj).toHaveProperty('imageUrl');
    expect(hostel.Hostel.schema.obj).toHaveProperty('address');
    expect(hostel.Hostel.schema.obj).toHaveProperty('language');
    expect(hostel.Hostel.schema.obj).toHaveProperty('state');
    expect(hostel.Hostel.schema.obj).toHaveProperty('country');
    expect(Object.keys( hostel.Hostel.schema.obj).length).toBe(6);
  });
});

