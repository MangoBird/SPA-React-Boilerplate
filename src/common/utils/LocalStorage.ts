export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    const loaded = JSON.parse(serializedState);
    console.log('loaded', loaded);
    return loaded;
  } catch (err) {
    console.log(err);
    return undefined;
  }
};

export const saveState = (state: any) => {
  try {
    console.log('saving', state);
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state', serializedState);
  } catch (err) {
    console.log(err);
  }
};
