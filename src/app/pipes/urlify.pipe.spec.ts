import { UrlifyPipe } from './urlify.pipe';

describe('UrlifyPipe', () => {
  it('create an instance', () => {
    const pipe = new UrlifyPipe();
    expect(pipe).toBeTruthy();
  });
});
