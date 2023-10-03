import { createWorker } from "tesseract.js";

const recognize = async (image) => {
  const worker = await createWorker();
  const { data } = await worker.recognize(image);
  await worker.terminate();
  return data.text.replace(/\D+/g, "");
};

(async () => {
  console.log(await recognize("captcha.png"));
  console.log(await recognize("captcha2.png"));
})();
