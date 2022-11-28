import {helloWorld} from '../../src/application/hello-world';

describe('Given hello world', () => {
  it('Should log hello world', () => {
    const consoleLogSpy = jest
      .spyOn(console, 'log')
      .mockReturnValueOnce(undefined);

    helloWorld();

    expect(consoleLogSpy).toHaveBeenNthCalledWith(1, 'Hello World!');
  });
});
