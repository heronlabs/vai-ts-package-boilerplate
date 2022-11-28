import {helloWorld} from '../../src/entry-point';

describe('Given hello world', () => {
  it('Should log hello world', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockReturnValueOnce(undefined);

    helloWorld();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Hello World!');
  });
});
