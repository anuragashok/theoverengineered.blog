async function asyncForEach(array, callback): Promise<void> {
  for (let index = 0; index < array.length; index += 1) {
    await callback(array[index], index, array);
  }
}

export default asyncForEach;
