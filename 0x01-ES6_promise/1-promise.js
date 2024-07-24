export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    const resolved = {
      status: 200,
      body: 'Success',
    };
    if (success) {
      resolve(resolved);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}
