export const fakeDebounce = (time: number) =>
  new Promise((resolve) => {
    setTimeout(resolve, time)
  })
