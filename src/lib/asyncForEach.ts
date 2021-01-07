/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
async function asyncForEach(array, callback): Promise<void> {
  for (let index = 0; index < array.length; index += 1) {
    // eslint-disable-next-line no-await-in-loop
    await callback(array[index], index, array);
  }
}

export default asyncForEach;