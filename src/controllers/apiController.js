import got from "got";

export const home = async (req, res) => {
    return res.render("home");
};

export const fromToConverter = async (req,res) => {
    const to = "KRW";
    const from = "USD";
    const amount = 5;
    const { body } = await got.get(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
    const data = JSON.parse(body);
    console.log(data);
    return res.render("convert");
}