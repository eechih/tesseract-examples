import { createWorker } from "tesseract.js";

const recognize = async (image) => {
  const worker = await createWorker();
  await worker.setParameters({ tessedit_char_whitelist: "0123456789" });
  const {
    data: { text },
  } = await worker.recognize(image);
  await worker.terminate();
  return text;
};

(async () => {
  console.log(await recognize("captcha.png"));
  console.log(await recognize("captcha2.png"));
})();
