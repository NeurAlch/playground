describe('Names', () => {
  it('should be meaningful/pronounceable', () => {
    // const cd = ...
    const currentDate = new Date();
    expect(currentDate).not.toBeNull();

    // const year = () => ...
    const getCurrentYear = () => new Date().getFullYear();
    expect(getCurrentYear()).not.toBeNull();
  });

  it('should not have redundant words or unneeded context', () => {
    // const userData = ...
    // const userObj = ...
    const user = { name: 'John' };
    expect(user.name).toBe('John');

    // const getUserObj = () => ...
    // const getUserInfo = () => ...
    // const getUserData = () => ...
    const getUser = () => ({ name: 'John' });
    expect(getUser().name).toBe('John');

    /* bad
    const person = {
      personName: 'John',
      personAge: 30,
    };
    */
    // good
    const person = {
      name: 'John',
      age: 30,
    };
    expect(person.name).toBe('John');
  });

  it('should be searchable', () => {
    // bad
    expect(86400000).toBe(1000 * 60 * 60 * 24);

    // good
    const MILLISECONDS_PER_MINUTE = 1000 * 60;
    const MILLISECONDS_PER_HOUR = MILLISECONDS_PER_MINUTE * 60;
    const MILLISECONDS_PER_DAY = MILLISECONDS_PER_HOUR * 24;
    expect(MILLISECONDS_PER_DAY).toBe(1000 * 60 * 60 * 24);
  });

  it('should be explanatory', () => {
    const configure = (maxElements: number, maxHeight: number) => {
      return {
        maxElements,
        maxHeight,
      };
    };

    // bad
    const options = [10, 50];
    expect(configure(options[0], options[1])).toEqual({
      maxElements: 10,
      maxHeight: 50,
    });

    // good
    const maxElementsAllowed = 10;
    const maxHeightOfElement = 50;
    expect(configure(maxElementsAllowed, maxHeightOfElement)).toEqual({
      maxElements: 10,
      maxHeight: 50,
    });
  });

  it('should be clear on intent', () => {
    // bad, ambiguous, is this a variable/function?
    const user = () => ({ name: 'John' });
    expect(user().name).toBe('John');
    // good
    const getUser = () => ({ name: 'John' });
    expect(getUser().name).toBe('John');

    // bad, is this a variable/function?
    const validUser = () => true;
    expect(validUser()).toBe(true);
    // better, but not great, could be confused with a varaible too
    const isValidUser = (/*...*/) => true;
    expect(isValidUser()).toBe(true);
    // much better (action + subject)
    const validateUser = (/*...*/) => true;
    expect(validateUser()).toBe(true);
  });

  it('should be consistent', () => {
    // bad
    const user = () => ({ name: 'John' }); // is this a var?
    const getConfig = () => ({ env: 'Development' });
    const isValid = (/*...*/) => true;
    const isAllowed = false; // not a function?
    expect(user().name).toBe('John');
    expect(getConfig().env).toBe('Development');
    expect(isValid()).toBe(true);
    expect(isAllowed).toBe(false);
    // good
    const getUser = () => ({ name: 'John' });
    const getConfiguration = () => ({ env: 'Development' });
    const validate = (/*...*/) => true;
    const allowed = false;
    expect(getUser().name).toBe('John');
    expect(getConfiguration().env).toBe('Development');
    expect(validate()).toBe(true);
    expect(allowed).toBe(false);
  });
});
