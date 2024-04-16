export const fileToBlob = async (f: any) =>
  new Blob([new Uint8Array(await f.arrayBuffer())], { type: f.type });
