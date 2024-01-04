export const serialize = (data) => JSON.stringify(data);

export const deserialize = (serialized) => {
  try {
    return JSON.parse(serialized);
  } catch (_) {
    return null;
  }
};
